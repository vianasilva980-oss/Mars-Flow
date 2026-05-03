// No topo do seu sw.js
const VERSION = '1.0.1';

self.addEventListener('message', (event) => {
    if (event.data === 'GET_VERSION') {
        // ports[0] garante que a resposta chegue ao script.js corretamente
        if (event.ports && event.ports[0]) {
            event.ports[0].postMessage(VERSION);
        }
    }
});

const CACHE_NAME = 'mars-flow-v02';

// Lista de ativos (Mantenha exatamente como você definiu)
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './script.js',
  './sw.js',
  './adicionarcarga.html',
  './almoxarifado.html',
  './configuracoes.html',
  './laboratorio.html',
  './logistica.html',
  './manufatura.html',
  './manutencao.html',
  './moega.html',
  './portaria.html',
  './qualidade.html',
  './seguranca.html',
  './CSS/main.css',
  './CSS/base.css',
  './CSS/header.css',
  './CSS/layout.css',
  './CSS/sidebar.css',
  './CSS/components.css',
  './CSS/forms.css',
  './CSS/chat.css',
  './CSS/footer.css',
  './CSS/print.css',
  './CSS/responsive.css',
  './CSS/login.css',
  './CSS/pwa.css',
  './JS/operacao.js',
  './JS/formularios/adicionarcarga.js',
  './JS/formularios/cadastrarfornecedor.js',
  './JS/formularios/cadastrarmotorista.js',
  './JS/formularios/cadastrartransportadora.js',
  './JS/formularios/cadastrarveiculo.js',
  './JS/formularios/cargasaprovadas.js',
  './JS/formularios/chatinterno.js',
  './JS/formularios/criarlaudo.js',
  './JS/formularios/importarperiodo.js',
  './JS/formularios/imprimircapa.js',
  './JS/formularios/lancamentos.js',
  './JS/formularios/liberarcarga.js',
  './JS/formularios/recebimentos.js',
  './JS/formularios/recusarcarga.js',
  './JS/formularios/registrarcarga.js',
  './JS/formularios/registrarcoleta.js',
  './JS/formularios/registrardescarga.js',
  './JS/formularios/solicitarcoleta.js',
  './JS/formularios/solicitardescarga.js',
  './JS/formularios/statuscarga.js',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png',
  './icons/icon-384.png',
  './icons/icon-512.png'
];

//* 1. Instalação
//self.addEventListener('install', (event) => {
  //event.waitUntil(
    //caches.open(CACHE_NAME).then((cache) => {
      //return cache.addAll(ASSETS);
    //})
  //);
  //self.skipWaiting();
//});

// 1. Instalação (AJUSTADO: Removido o skipWaiting automático)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  // O Service Worker ficará em "espera" até que o usuário autorize
});

// ESCUTADOR DE MENSAGENS (Adicione/Ajuste este bloco)
self.addEventListener('message', (event) => {
    // Código da versão que você já tinha
    if (event.data === 'GET_VERSION') {
        if (event.ports && event.ports[0]) {
            event.ports[0].postMessage(VERSION);
        }
    }
    
    // NOVO: Comando que o botão do seu alerta vai enviar
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});

// 2. Ativação: Limpa versões antigas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// 3. Estratégia de Busca
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
