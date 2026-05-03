const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

/* ========================= CONFIGURAÇÃO ========================= */
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ========================= UPLOAD ========================= */
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

/* ========================= BANCO ========================= */
const db = new sqlite3.Database("./database.db");

db.run(`
CREATE TABLE IF NOT EXISTS chat (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    setor TEXT,
    mensagem TEXT,
    arquivo TEXT,
    data_hora TEXT
)`);

/* ========================= USUÁRIOS ONLINE ========================= */
const usuariosOnline = new Map();

/* ========================= SOCKET.IO ========================= */
io.on("connection", (socket) => {
    console.log("🔌 Conectado:", socket.id);

    socket.on("entrarSala", (setor) => {
        socket.join(setor);
        usuariosOnline.set(socket.id, setor);

        io.to(setor).emit("online", contarUsuarios(setor));
    });

    socket.on("digitando", (setor) => {
        socket.to(setor).emit("digitando", socket.id);
    });

    socket.on("parouDigitando", (setor) => {
        socket.to(setor).emit("parouDigitando", socket.id);
    });

    socket.on("enviarMensagem", (data) => {
        const { setor, mensagem } = data;

        db.run(
            "INSERT INTO chat (setor, mensagem, data_hora) VALUES (?, ?, ?)",
            [setor, mensagem, new Date().toISOString()],
            function (err) {
                if (err) return;

                const novaMsg = {
                    id: this.lastID,
                    setor,
                    mensagem,
                    data_hora: new Date()
                };

                io.to(setor).emit("novaMensagem", novaMsg);
            }
        );
    });

    socket.on("disconnect", () => {
        const setor = usuariosOnline.get(socket.id);
        usuariosOnline.delete(socket.id);

        if (setor) {
            io.to(setor).emit("online", contarUsuarios(setor));
        }

        console.log("❌ Desconectado:", socket.id);
    });
});

function contarUsuarios(setor) {
    let count = 0;
    usuariosOnline.forEach(s => {
        if (s === setor) count++;
    });
    return count;
}

/* ========================= ROTAS REST ========================= */

// 📎 Upload continua funcionando
app.post("/chat", upload.single("arquivo"), (req, res) => {
    const setor = req.body.setor || "DESCONHECIDO";
    const mensagem = req.body.mensagem || null;
    const arquivo = req.file ? req.file.filename : null;

    db.run(
        "INSERT INTO chat (setor, mensagem, arquivo, data_hora) VALUES (?, ?, ?, ?)",
        [setor, mensagem, arquivo, new Date().toISOString()],
        function (err) {
            if (err) return res.status(500).json({ error: "Erro ao salvar" });

            const novaMsg = {
                id: this.lastID,
                setor,
                mensagem,
                arquivo,
                data_hora: new Date()
            };

            // 🔥 ENVIA EM TEMPO REAL TAMBÉM
            io.to(setor).emit("novaMensagem", novaMsg);

            res.json({ success: true, id: this.lastID });
        }
    );
});

// 📥 histórico
app.get("/chat", (req, res) => {
    db.all("SELECT * FROM chat ORDER BY id ASC", [], (err, rows) => {
        if (err) return res.status(500).json({ error: "Erro ao buscar" });
        res.json(rows);
    });
});

/* ========================= START ========================= */
const PORT = 3000;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});