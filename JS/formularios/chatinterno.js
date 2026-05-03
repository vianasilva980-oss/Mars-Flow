/* ========================================================= 
   GERAÇÃO DO HTML DO MICROSOFT TEAMS V2 (VERSÃO TEAMS FREE) 
   ========================================================= */ 
export function gerarHTMLNavegadorMicrosoft(setor, acao) { 
  return ` 
    <div class="form-mars-container modo-painel" style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #000c3c; font-family: sans-serif;"> 
      <header style="width: 100%; display:flex; flex-direction:column; align-items:center; border:2px solid #4B53BC; border-radius:40px; padding:10px; margin-bottom:50px; background:rgba(75,83,188,0.1);"> 
        <div style="font-size:30px; font-weight:bold; color:#4B53BC;"> ${setor} </div> 
        <div style="font-size:20px; color:white;"> COMUNICAÇÃO VIA MICROSOFT TEAMS </div> 
      </header> 

      <div style="text-align: center; background: rgba(75,83,188,0.1); padding: 40px; border-radius: 30px; border: 1px solid #4B53BC;"> 
        <div style="font-size: 80px; margin-bottom: 20px;">🟦</div> 
        <h2 style="color: white; margin-bottom: 20px;">O Teams protege a conexão externa.</h2> 
        <p style="color: #ccc; margin-bottom: 30px;">Para garantir a segurança, clique no botão abaixo para abrir o chat em uma janela segura.</p> 
        
        <!-- URL CORRIGIDA PARA TEAMS FREE E SINTAXE LIMPA -->
        <button onclick="window.open('https://teams.live.com/free/', 'TeamsMars', 'width=1100,height=750,top=100,left=100,menubar=no,status=no,toolbar=no')" 
                style="background: #4B53BC; color: white; border: none; padding: 15px 40px; border-radius: 30px; font-size: 20px; font-weight: bold; cursor: pointer; transition: 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.3);"> 
            CONECTAR AO TEAMS AGORA 
        </button> 
      </div> 

      <div style="margin-top: 50px; color: #4B53BC; font-size: 14px;"> 
        MARS® Operating System | Microsoft Integration 
      </div> 
    </div>`; 
}
