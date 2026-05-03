/* ========================================================= 
   1. IMPORTAÇÕES (TODOS OS MÓDULOS) 
   ========================================================= */ 
import { formsolicitardescarga } from './formularios/solicitardescarga.js'; 
import { formadicionarcarga } from './formularios/adicionarcarga.js'; 
import { formimprimircapa } from './formularios/imprimircapa.js'; 
import { formregistrarcarga } from './formularios/registrarcarga.js'; 
import { formregistrarcoleta } from './formularios/registrarcoleta.js'; 
import { formregistrardescarga } from './formularios/registrardescarga.js'; 
import { formrecusarcarga } from './formularios/recusarcarga.js'; 
import { formliberarcarga } from './formularios/liberarcarga.js'; 
import { formcriarlaudo } from './formularios/criarlaudo.js'; 
import { formcadastrarmotorista } from './formularios/cadastrarmotorista.js'; 
import { formcadastrartransportadora } from './formularios/cadastrartransportadora.js'; 
import { formsolicitarcoleta } from './formularios/solicitarcoleta.js'; 
import { formcadastrarveiculo } from './formularios/cadastrarveiculo.js'; 
import { formlancamentos } from './formularios/lancamentos.js'; 
import { formstatuscarga } from './formularios/statuscarga.js'; 
import { formcadastrarfornecedor } from './formularios/cadastrarfornecedor.js'; 
import { formrecebimentos } from './formularios/recebimentos.js'; 
import { formimportarperiodo } from './formularios/importarperiodo.js'; 
import { formcargasaprovadas } from './formularios/cargasaprovadas.js'; 

// Importa a função visual do Teams do seu arquivo chatinterno.js
import { gerarHTMLNavegadorMicrosoft } from './formularios/chatinterno.js';

import { initTransportadoraEvents } from './eventos-transportadora.js';


/* ========================================================= 
   2. CARREGAMENTO DE FORMULÁRIOS 
   ========================================================= */ 
function carregarFormulario(tipo) { 
    const painel = document.querySelector('.area-ilustracao'); 
    if (!painel) return; 

    // Esconde imagem de boas-vindas
    const imgBoasVindas = document.getElementById('img-boas-vindas'); 
    if (imgBoasVindas) imgBoasVindas.style.display = 'none'; 

    const setorNome = document.getElementById('nome-setor-pill')?.innerText || "SISTEMA"; 
    const btnMenu = document.getElementById(`acao-${tipo}`); 
    const acaoNome = btnMenu ? btnMenu.querySelector('span').innerText : tipo.toUpperCase(); 

    let html = ""; 

    // ✅ LÓGICA DO TEAMS: Agora ele carrega a TELA com o botão no painel central
    if (tipo === "teams" || tipo === "chatinterno" || tipo === "chatmicrosoft") {
        painel.innerHTML = gerarHTMLNavegadorMicrosoft(setorNome, acaoNome);
        return; // Interrompe aqui. O window.open será disparado pelo botão que está no HTML gerado.
    }

    // SELEÇÃO DOS FORMULÁRIOS TRADICIONAIS
    if (tipo === "adicionarcarga") html = formadicionarcarga(setorNome, acaoNome); 
    else if (tipo === "registrarcoleta") html = formregistrarcoleta(setorNome, acaoNome); 
    else if (tipo === "imprimircapa") html = formimprimircapa(setorNome, acaoNome); 
    else if (tipo === "registrardescarga") html = formregistrardescarga(setorNome, acaoNome); 
    else if (tipo === "registrarcarga") html = formregistrarcarga(setorNome, acaoNome); 
    else if (tipo === "recusarcarga") html = formrecusarcarga(setorNome, acaoNome); 
    else if (tipo === "liberarcarga") html = formliberarcarga(setorNome, acaoNome); 
    else if (tipo === "criarlaudo") html = formcriarlaudo(setorNome, acaoNome); 
    else if (tipo === "cadastrarmotorista") html = formcadastrarmotorista(setorNome, acaoNome); 
    else if (tipo === "cadastrartransportadora") html = formcadastrartransportadora(setorNome, acaoNome); 
    else if (tipo === "solicitarcoleta") html = formsolicitarcoleta(setorNome, acaoNome); 
    else if (tipo === "cadastrarveiculo") html = formcadastrarveiculo(setorNome, acaoNome); 
    else if (tipo === "lancamentos") html = formlancamentos(setorNome, acaoNome); 
    else if (tipo === "solicitardescarga") html = formsolicitardescarga(setorNome, acaoNome); 
    else if (tipo === "statuscarga" || tipo === "statusdacarga") html = formstatuscarga(setorNome, acaoNome); 
    else if (tipo === "cadastrarfornecedor") html = formcadastrarfornecedor(setorNome, acaoNome); 
    else if (tipo === "recebimentos" || tipo === "recebimento") html = formrecebimentos(setorNome, acaoNome); 
    else if (tipo === "importarperiodo") html = formimportarperiodo(setorNome, acaoNome); 
    else if (tipo === "cargasaprovadas") html = formcargasaprovadas(setorNome, acaoNome); 
    else { 
        painel.innerHTML = `<div style="color:white; padding:20px; text-align:center;"><h2>Módulo em desenvolvimento</h2></div>`; 
        return; 
    } 

    painel.innerHTML = html;

    // ✅ ADICIONE ESTE BLOCO AQUI:
    // Se o formulário carregado for o de transportadora, ativa a API Python de imagem
    if (tipo === "cadastrartransportadora") {
        initTransportadoraEvents();
    }

    // --- ATRIBUIÇÃO DE EVENTOS DINÂMICOS --- 
    const btn = painel.querySelector(".btn-registrar-central");
    if (btn) {
        btn.addEventListener("click", () => {
            if (tipo === "imprimircapa") {
                imprimirFormularioCapa();
            } else {
                alert("Ação registrada para: " + acaoNome);
            }
        });
    }

    const btnBuscarVei = painel.querySelector("#vei-btn-buscar"); 
    if (btnBuscarVei) { 
        btnBuscarVei.onclick = () => { 
            const dadosExemplo = [ 
                { id: 101, tipo: 'BITREM', eixos: '9 EIXOS', propulsao: 'A COMBUSTÃO', data: '12/05/2024' }, 
                { id: 102, tipo: 'CARRETA LS', eixos: '3 EIXOS', propulsao: 'ELÉTRICO', data: '13/05/2024' } 
            ]; 
            if (typeof window.atualizarTabelaVeiculos === "function") { 
                window.atualizarTabelaVeiculos(dadosExemplo); 
            } 
        }; 
    } 
} 


/* ========================================================= 
   3. MAPEAMENTO DE AÇÕES COMPLETO (TODOS OS SETORES)
   ========================================================= */ 
const acoesSetores = { 
    // CARGAS E COLETA
    "acao-adicionarcarga": () => carregarFormulario("adicionarcarga"), 
    "acao-registrarcarga": () => carregarFormulario("registrarcarga"), 
    "acao-registrarcoleta": () => carregarFormulario("registrarcoleta"), 
    "acao-registrardescarga": () => carregarFormulario("registrardescarga"), 
    "acao-solicitarcoleta": () => carregarFormulario("solicitarcoleta"), 
    "acao-solicitardescarga": () => carregarFormulario("solicitardescarga"),
    "acao-liberarcarga": () => carregarFormulario("liberarcarga"), 
    "acao-recusarcarga": () => carregarFormulario("recusarcarga"),
    "acao-cargasaprovadas": () => carregarFormulario("cargasaprovadas"),
    "acao-cargascoletadas": () => carregarFormulario("cargascoletadas"),
    "acao-cargasdescarregadas": () => carregarFormulario("cargasdescarregadas"),

    // CADASTROS
    "acao-cadastrartransportadora": () => carregarFormulario("cadastrartransportadora"), 
    "acao-cadastrarmotorista": () => carregarFormulario("cadastrarmotorista"), 
    "acao-cadastrarveiculo": () => carregarFormulario("cadastrarveiculo"),
    "acao-cadastrarfornecedor": () => carregarFormulario("cadastrarfornecedor"),

    // FINANCEIRO / LANÇAMENTOS / DOCUMENTOS
    "acao-lancamentos": () => carregarFormulario("lancamentos"), 
    "acao-recebimentos": () => carregarFormulario("recebimentos"),
    "acao-recebimento": () => carregarFormulario("recebimentos"), // Variação de ID
    "acao-importarperiodo": () => carregarFormulario("importarperiodo"),
    "acao-imprimircapa": () => carregarFormulario("imprimircapa"), 
    "acao-criarlaudo": () => carregarFormulario("criarlaudo"), 

    // STATUS E MONITORAMENTO
    "acao-statuscarga": () => carregarFormulario("statuscarga"), 
    "acao-statusdacarga": () => carregarFormulario("statuscarga"), // Variação de ID

    // COMUNICAÇÃO (TEAMS)
    "acao-teams": () => carregarFormulario("teams"),
    "acao-chatinterno": () => carregarFormulario("teams"), // Redireciona antigo para o Teams
    "acao-chatmicrosoft": () => carregarFormulario("teams") // Redireciona assistente para o Teams
};


/* ========================================================= 
   4. INICIALIZAÇÃO DO MENU
   ========================================================= */ 
function inicializarMenu() { 
    document.addEventListener("click", (e) => { 
        const botao = e.target.closest(".menu-item"); 
        if (!botao || botao.classList.contains('btn-home')) return; 

        const acao = acoesSetores[botao.id]; 
        if (typeof acao === "function") acao(); 
    }); 
} 

// Garante o carregamento correto do DOM
if (document.readyState === 'loading') { 
    document.addEventListener('DOMContentLoaded', inicializarMenu); 
} else { 
    inicializarMenu(); 
}



/* ========================================================= 
   5. MÁSCARAS DE INPUT 
========================================================= */

document.addEventListener('input', (e) => {
    const input = e.target;
    let val = input.value;

    if (input.placeholder === 'DD/MM/AAAA') {
        val = val.replace(/\D/g, "");
        val = val.replace(/(\d{2})(\d)/, "$1/$2");
        val = val.replace(/(\d{2})(\d)/, "$1/$2");
        input.value = val.substring(0, 10);
    }

    if (input.placeholder === '00:00:00') {
        val = val.replace(/\D/g, "");
        val = val.replace(/(\d{2})(\d)/, "$1:$2");
        val = val.replace(/(\d{2})(\d)/, "$1:$2");
        input.value = val.substring(0, 8);
    }

    if (input.placeholder === '000.000.000-00') {
        val = val.replace(/\D/g, "");
        val = val.replace(/(\d{3})(\d)/, "$1.$2");
        val = val.replace(/(\d{3})(\d)/, "$1.$2");
        val = val.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        input.value = val.substring(0, 14);
    }

    if (input.previousElementSibling?.innerText.includes("PLACA")) {
        val = val.toUpperCase().replace(/[^A-Z0-9]/g, "");
        input.value = val.substring(0, 7);
    }
});
/* ==========================================
   ANIMAÇÃO DO SLIDER NO PAINEL CENTRAL
   ========================================== */

// 1. Lista de imagens (ajuste os caminhos se necessário)
const imagensSlider = [
    "img/areaprincipal.png",
    "img/icon-fluxo.png",
    "img/logomars.png"
];

let indiceAtual = 0;

// 2. Função global para o Slider (usando window. para funcionar com modules)
window.proximoSlide = function() {
    const imgElemento = document.getElementById('img-boas-vindas'); // Verifique se o ID é este ou 'img-slider-portaria'
    
    if (!imgElemento) return;

    indiceAtual++;

    if (indiceAtual >= imagensSlider.length) {
        indiceAtual = 0;
    }

    // Efeito suave
    imgElemento.style.opacity = 0;
    
    setTimeout(() => {
        imgElemento.src = imagensSlider[indiceAtual];
        imgElemento.style.opacity = 1;
    }, 200);
};

/* ==========================================
   DICA: LÓGICA PARA LIMPAR O SLIDER
   ========================================== */
// Função para esconder a imagem e mostrar o formulário ao clicar no menu
window.mostrarConteudo = function() {
    const slider = document.getElementById('img-boas-vindas');
    const login = document.getElementById('login-container');

    if(slider) slider.style.display = 'none';
    if(login) login.style.display = 'flex';
};
/* ========================================================= 
   6. FUNÇÃO DE IMPRESSÃO (CORRIGIDA)
   ========================================================= */
function imprimirFormularioCapa() { 
    const painel = document.querySelector('.area-ilustracao'); 
    if (!painel) return; 

    // 1. Captura os valores digitados (Inputs E Selects)
    const valores = {}; 
    painel.querySelectorAll('input, select').forEach(el => { 
        valores[el.id] = el.value; 
    }); 

    // 2. Cria ou limpa o iframe oculto 
    let iframe = document.getElementById('iframe-impressao'); 
    if (iframe) iframe.remove(); 
    
    iframe = document.createElement('iframe'); 
    iframe.id = 'iframe-impressao'; 
    iframe.style.display = 'none'; 
    document.body.appendChild(iframe); 

    // 3. Clona o conteúdo 
    const conteudoClone = painel.cloneNode(true); 

    // 4. 🔥 LIMPEZA: Remove o fundo quadrado das DIVs que o JS injetou 
    const boxes = conteudoClone.querySelectorAll('.data-box, .hora-box'); 
    boxes.forEach(box => { 
        box.style.setProperty('background-color', 'transparent', 'important'); 
        box.style.setProperty('border', 'none', 'important'); 
        box.style.setProperty('padding', '0', 'important'); 
    }); 

    // 5. Injeta os valores capturados de volta nos elementos do clone
    conteudoClone.querySelectorAll('input, select').forEach(el => { 
        if (valores[el.id]) { 
            if (el.tagName === 'SELECT') {
                // Lógica especial para listas: marca a opção escolhida como selecionada
                const option = el.querySelector(`option[value="${valores[el.id]}"]`);
                if (option) option.setAttribute('selected', 'selected');
            } else {
                // Lógica para inputs normais
                el.setAttribute('value', valores[el.id]); 
            }
        } 
    }); 

    // 6. Escreve no Iframe e dispara a impressão 
    const doc = iframe.contentWindow.document; 
    doc.open(); 
    doc.write(` 
        <html> 
        <head> 
            <title>Impressão - Capa</title> 
            <link rel="stylesheet" href="css/print.css" type="text/css"> 
        </head> 
        <body> 
            ${conteudoClone.innerHTML} 
            <script> 
                window.onload = () => { 
                    // Pequeno delay para garantir o carregamento do CSS 
                    setTimeout(() => { 
                        window.print(); 
                    }, 500); 
                }; 
            <\/script> 
        </body> 
        </html> 
    `); 
    doc.close();
}
/* =========================================================
   FUNÇÃO PARA RENDERIZAR A TABELA DE VEÍCULOS
   ========================================================= */
function atualizarTabelaVeiculos(dados) {
    const corpoTabela = document.getElementById('tabela-corpo-veiculos');
    if (!corpoTabela) return;

    corpoTabela.innerHTML = dados.map(veiculo => `
        <tr>
            <td>${veiculo.id || '-'}</td>
            <td>${veiculo.tipo || '-'}</td>
            <td>${veiculo.eixos || '-'}</td>
            <td>${veiculo.propulsao || '-'}</td>
            <td>${veiculo.data || '-'}</td>
            <td>
                <button class="btn-tabela-edit" onclick="console.log('Editar', ${veiculo.id})">✏️</button>
                <button class="btn-tabela-del" onclick="console.log('Excluir', ${veiculo.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}
/* =========================================================
   FUNÇÃO PARA RENDERIZAR A TABELA DE LANÇAMENTOS
   ========================================================= */
function atualizarTabelaLancamentos(dados) {
    const corpo = document.getElementById('tabela-corpo-lancamentos');
    if (!corpo) return;

    corpo.innerHTML = dados.map(item => `
        <tr>
            <td>${item.tipoVei}</td>
            <td>${item.placaC}</td>
            <td>${item.placaC1}</td>
            <td>${item.transp}</td>
            <td>${item.fornec}</td>
            <td>${item.materia}</td>
            <td>${item.nf}</td>
            <td>${item.pesoLiq} KG</td>
            <td><button class="btn-tabela-edit">👁️</button></td>
        </tr>
    `).join('');
}

/* ========================================================= 
   FUNÇÃO PARA ATUALIZAR A VERSÃO NO RODAPÉ (DINÂMICA)
========================================================= */
async function displaySWVersion() {
    if ('serviceWorker' in navigator) {
        try {
            // 1. Aguarda o SW estar pronto e ativo
            const registration = await navigator.serviceWorker.ready;
            
            if (registration.active) {
                // 2. Canal de comunicação
                const messageChannel = new MessageChannel();
                
                messageChannel.port1.onmessage = (event) => {
                    const versionElement = document.getElementById('sw-version');
                    if (versionElement && event.data) {
                        // Recebe o valor '1.0.9' diretamente do sw.js
                        versionElement.textContent = `v${event.data}`;
                    }
                };

                // 3. Pergunta a versão para o Service Worker
                registration.active.postMessage('GET_VERSION', [messageChannel.port2]);
            }
        } catch (err) {
            console.log("Erro ao recuperar versão do SW:", err);
            // Fallback caso o SW ainda não tenha carregado
            const versionElement = document.getElementById('sw-version');
            if (versionElement) versionElement.textContent = 'v1.0.9'; 
        }
    }
}

displaySWVersion();
