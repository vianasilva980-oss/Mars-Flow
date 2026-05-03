/* ==========================================
   1. DADOS DOS SETORES E CREDENCIAIS
   ========================================== */
const baseDados = {
    'btn-portaria':    { nome: 'PORTARIA',     user: 'portaria.mars', pass: '001', emoji: '👮' },
    'btn-lab':         { nome: 'LABORATÓRIO',  user: 'lab.mars',      pass: '002', emoji: '🧪' },
    'btn-moega':       { nome: 'MOEGA',        user: 'moega.mars',    pass: '003', emoji: '🏗️' },
    'btn-logistica':   { nome: 'LOGÍSTICA',    user: 'log.mars',      pass: '004', emoji: '🚛' },
    'btn-manufatura':  { nome: 'MANUFATURA',   user: 'manu.mars',     pass: '005', emoji: '🏭' },
    'btn-config':      { nome: 'CONFIG',       user: 'admin',         pass: '006', emoji: '⚙️' },
    'btn-seguranca':   { nome: 'SEGURANÇA',    user: 'segur.mars',    pass: '007', emoji: '🛡️' },
    'btn-qualidade':   { nome: 'QUALIDADE',    user: 'qualid.mars',   pass: '008', emoji: '💎' },
    'btn-almoxarifado':{ nome: 'ALMOXARIFADO', user: 'almox.mars',    pass: '009', emoji: '📦' },
    'btn-manutençao':  { nome: 'MANUTENÇÃO',   user: 'manut.mars',    pass: '010', emoji: '🛠️' }
};

let setorSelecionadoID = null;

/* ==========================================
   2. ELEMENTOS DA TELA
   ========================================== */
const elementos = {
    pillSetor:      document.getElementById('nome-setor-pill'),
    descSetor:      document.getElementById('descricao-setor'),
    imgBoasVindas:  document.getElementById('img-boas-vindas'),
    loginContainer: document.getElementById('login-container'),
    tituloLogin:    document.getElementById('titulo-login'),
    // Agora aponta para a div que recebe o emoji
    emojiLoginSetor: document.getElementById('emoji-login-setor'), 
    userInput:      document.getElementById('user-input'),
    passInput:      document.getElementById('pass-input'),
    btnEntrar:      document.querySelector('.btn-entrar'),
    menuItems:      document.querySelectorAll('.menu-item'),
    areaDinamica:   document.getElementById('conteudo-dinamico')
};

/* ==========================================
   3. CLIQUE NO MENU: MOSTRA TELA DE LOGIN
   ========================================== */
elementos.menuItems.forEach(item => {
    item.addEventListener('click', () => {

        if (item.id === 'btn-home-sidebar') return;

        if (item.id === 'btn-adicionarcarga') {
            window.location.href = "adicionarcarga.html"; 
            return; 
        }

        const info = baseDados[item.id];
        if (!info) return;

        setorSelecionadoID = item.id;

        elementos.userInput.value = "";
        elementos.passInput.value = "";
        elementos.imgBoasVindas.style.display = 'none';
        elementos.loginContainer.style.display = 'flex';

        // Mostra o botão home na sidebar
        const btnHomeSidebar = document.getElementById('btn-home-sidebar');
        if (btnHomeSidebar) btnHomeSidebar.style.display = 'flex';

        elementos.tituloLogin.textContent = info.nome;
        
        // Troca o emoji dinamicamente
        if (elementos.emojiLoginSetor) {
            elementos.emojiLoginSetor.textContent = info.emoji;
        }
    });
});

/* ==========================================
   4. CLIQUE NO BOTÃO ENTRAR: VALIDA LOGIN
   ========================================== */
elementos.btnEntrar.addEventListener('click', () => {
    const dadosSetor = baseDados[setorSelecionadoID];
    const userDigitado = elementos.userInput.value;
    const passDigitada = elementos.passInput.value;

    if (userDigitado === dadosSetor.user && passDigitada === dadosSetor.pass) {
        elementos.pillSetor.textContent = dadosSetor.nome;
        elementos.descSetor.textContent = "Sessão Ativa: " + dadosSetor.nome;
        abrirPainel(dadosSetor.nome);
    } else {
        alert("❌ Usuário ou senha incorretos para o setor " + dadosSetor.nome);
    }
});

/* ==========================================
   5. REDIRECIONAMENTO DE SETORES
   ========================================== */
function abrirPainel(nomeSetor) {
    let arquivo = "";
    const nomeBusca = nomeSetor.toUpperCase();

    if (nomeBusca === 'PORTARIA') arquivo = "portaria.html";
    else if (nomeBusca === 'LABORATÓRIO') arquivo = "laboratorio.html";
    else if (nomeBusca === 'MOEGA') arquivo = "moega.html";
    else if (nomeBusca === 'LOGÍSTICA') arquivo = "logistica.html";
    else if (nomeBusca === 'MANUFATURA') arquivo = "manufatura.html";
    else if (nomeBusca === 'CONFIG') arquivo = "configuracoes.html";
    else if (nomeBusca === 'SEGURANÇA') arquivo = "seguranca.html";
    else if (nomeBusca === 'QUALIDADE') arquivo = "qualidade.html";
    else if (nomeBusca === 'ALMOXARIFADO') arquivo = "almoxarifado.html";
    else if (nomeBusca === 'MANUTENÇÃO') arquivo = "manutencao.html";

    if (arquivo !== "") window.location.href = arquivo;
    else alert("Página em desenvolvimento para o setor: " + nomeSetor);
}

/* ==========================================
   6. FUNÇÃO VOLTAR HOME
   ========================================== */
function voltarHome() {
    elementos.loginContainer.style.display = 'none';
    elementos.imgBoasVindas.style.display = 'block';
    
    const btnHomeSidebar = document.getElementById('btn-home-sidebar');
    if (btnHomeSidebar) btnHomeSidebar.style.display = 'none';

    if (elementos.emojiLoginSetor) {
        elementos.emojiLoginSetor.textContent = '👤';
    }

    elementos.pillSetor.textContent = "SETORES";
    elementos.descSetor.textContent = "FLOW - GERENCIADOR DE FLUXO";
}

/* ==========================================
   7. SISTEMA DE INSTALAÇÃO PWA
   ========================================== */
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById("btn-instalar-pwa");
    if (btn) btn.style.display = "block";
});

const btnInstalar = document.getElementById("btn-instalar-pwa");
if (btnInstalar) {
    btnInstalar.addEventListener("click", async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
        btnInstalar.style.display = "none";
    });
}

/* ==========================================
   8. SLIDER DE IMAGENS (BOAS-VINDAS)
   ========================================== */
const imagensSlider = [
    "img/areaprincipal.png",
    "img/icon-fluxo.png",
    "img/logomars.png"
];
let indiceAtual = 0;

function proximoSlide() {
    const imgElemento = document.getElementById('img-boas-vindas');
    indiceAtual = (indiceAtual + 1) % imagensSlider.length;

    imgElemento.style.opacity = 0;
    setTimeout(() => {
        imgElemento.src = imagensSlider[indiceAtual];
        imgElemento.style.opacity = 1;
    }, 200);
}

/* ========================================================= 
   9 FUNÇÃO PARA ATUALIZAR A VERSÃO NO RODAPÉ (DINÂMICA)
========================================================= */
async function displaySWVersion() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.ready;
            if (registration.active) {
                const messageChannel = new MessageChannel();
                messageChannel.port1.onmessage = (event) => {
                    const versionElement = document.getElementById('sw-version');
                    if (versionElement && event.data) {
                        versionElement.textContent = `v${event.data}`;
                    }
                };
                registration.active.postMessage('GET_VERSION', [messageChannel.port2]);
            }
        } catch (err) {
            console.log("Erro SW Version:", err);
        }
    }
}

// Inicia a busca da versão
displaySWVersion();

// Expõe a função voltarHome globalmente caso necessário pelo onclick do HTML
window.voltarHome = voltarHome;
window.proximoSlide = proximoSlide;

// Chama a função
displaySWVersion();

/* ========================================================= 
   10. DETECTOR DE NOVA VERSÃO (PWA)
========================================================= */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
        
        // Verifica se já existe um SW esperando (ex: usuário abriu a aba agora)
        if (reg.waiting) {
            exibirAlertaAtualizacao();
        }

        // Escuta por novos SWs que terminam de baixar
        reg.addEventListener('updatefound', () => {
            const novoSW = reg.installing;
            novoSW.addEventListener('statechange', () => {
                // Quando o novo SW termina de instalar e fica em espera
                if (novoSW.state === 'installed' && navigator.serviceWorker.controller) {
                    exibirAlertaAtualizacao();
                }
            });
        });
    });
}

function exibirAlertaAtualizacao() {
    const alerta = document.getElementById('update-notification');
    if (alerta) {
        alerta.style.display = 'flex';
    }
}


/* ========================================================= 
   11. Atalho Enter para Login
========================================================= */

elementos.passInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') elementos.btnEntrar.click();
});

/* ========================================================= 
   12. mensahem de nova versão
========================================================= */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
        
        // Se já houver uma atualização esperando
        if (reg.waiting) {
            exibirAlertaAtualizacao(reg.waiting);
        }

        // Se uma nova atualização for encontrada e instalada
        reg.addEventListener('updatefound', () => {
            const novoSW = reg.installing;
            novoSW.addEventListener('statechange', () => {
                if (novoSW.state === 'installed' && navigator.serviceWorker.controller) {
                    exibirAlertaAtualizacao(novoSW);
                }
            });
        });
    });

    // Quando o novo SW assume o controle, recarrega a página
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
    });
}

function exibirAlertaAtualizacao(worker) {
    const alerta = document.getElementById('update-notification');
    const btn = document.getElementById('btn-atualizar'); // ID do seu botão

    if (alerta) {
        alerta.style.display = 'flex';
        btn.onclick = () => {
            worker.postMessage('skipWaiting'); // Envia o comando para o sw.js
        };
    }
}
