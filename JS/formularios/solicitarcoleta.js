export function formsolicitarcoleta(setor, acao) {
  return `
  <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
    <!-- ================= TOPO PADRÃO MARS ================= -->
    <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1);">
      <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
      <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
    </header>

    <!-- ================= BUSCA (PADRÃO DOIS GRUPOS) ================= -->
    <div class="header-busca" style="margin-bottom: 20px;">
        <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
            <input id="sol-busca-id" type="text" class="input-id" placeholder="Busca por ID" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
            <button id="sol-btn-buscar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> BUSCAR </button>
        </div>

        <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 10px;">
            <!-- GRUPO ESQUERDA -->
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1; min-width: 300px; flex-direction: column;">
                <div class="input-group"><label style="background-color:#0056f3;">PERÍODO</label><input id="sol-periodo" type="text" placeholder="Ex.: P1"></div>
                <div class="input-group"><label style="background-color:#0056f3;">WEEK</label><input id="sol-week" type="text" placeholder="Ex.: W1"></div>
            </div>
            <!-- GRUPO DIREITA -->
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1.5; justify-content: flex-end; min-width: 300px; flex-direction: column;">
                <div class="input-group"><label style="background-color:#0056f3;">DATA SOLICIT.</label><input id="sol-data" type="text" placeholder="DD/MM/AAAA"></div>
                <div class="input-group"><label style="background-color:#0056f3;">HORA SOLICIT.</label><input id="sol-hora" type="text" placeholder="00:00:00"></div>
            </div>
        </div>
    </div>

    <!-- ================= CORPO (DIVIDIDO EM 2 COM FLEX) ================= -->
    <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%;">
      
      <!-- COLUNA ESQUERDA -->
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> DADOS DO MOTORISTA </div>
        <div class="input-group"><label style="background-color:#0056f3;">MOTORISTA</label><input id="sol-motorista" type="text"></div>
        <div class="input-group"><label style="background-color:#0056f3;">CPF</label><input id="sol-cpf" type="text" placeholder="000.000.000-00"></div>
        <div class="input-group"><label style="background-color:#0056f3;">RG</label><input id="sol-rg" type="text"></div>
        <div class="input-group"><label style="background-color:#0056f3;">TELEFONE</label><input id="sol-telefone" type="text" placeholder="(00)00000-0000"></div>

        <div class="info-auto" style="background-color:#0056f3;"> DADOS DA TRANSPORTADORA </div>
        <div class="input-group"><label style="background-color:#0056f3;">TRANSPORTADORA</label><input id="sol-transportadora" type="text"></div>
        <div class="input-group"><label style="background-color:#0056f3;">CNPJ</label><input id="sol-cnpj" type="text"></div>
        <div class="input-group"><label style="background-color:#0056f3;">MATERIAL</label><input id="sol-material" type="text"></div>
      </div>

      <!-- COLUNA DIREITA -->
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> DADOS DA CARGA </div>
        <div class="input-group"><label style="background-color:#0056f3;">FORNECEDOR</label><input id="sol-fornecedor" type="text"></div>
        <div class="input-group"><label style="background-color:#0056f3;">MATÉRIA</label><input id="sol-materia" type="text"></div>
        <div class="input-group"><label style="background-color:#0056f3;">NOTA FISCAL</label><input id="sol-nota-fiscal" type="text"></div>
        <div class="input-group"><label style="background-color:#0056f3;">PESO NF</label><input id="sol-peso-nf" type="text"></div>
        <div class="input-group"><label style="background-color:#0056f3;">VALOR NF</label><input id="sol-valor-nf" type="text"></div>

        <!-- ================= SOLICITAÇÃO (VERDE) ================= -->
        <div class="info-auto" style="background-color: #4cd964;"> DADOS DA SOLICITAÇÃO </div>
        <div class="input-group"><label style="background-color: #4cd964;">DATA SOLICIT.</label><input id="sol-data-solic" type="text" placeholder="DD/MM/AAAA"></div>
        <div class="input-group"><label style="background-color: #4cd964;">HORA SOLICIT.</label><input id="sol-hora-solic" type="text" placeholder="00:00:00"></div>
      </div>
    </div>

    <!-- ================= BOTÕES ================= -->
    <div class="form-footer" style="margin-top: auto; padding-top: 20px;">
      <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">← VOLTAR</button>
      <button class="btn-registrar-central" id="sol-btn-enviar" style="background-color: #4cd964; color: white;"> ENVIAR SOLICITAÇÃO </button>
      <button class="btn-salvar" id="sol-btn-salvar" style="background-color: #28a745; color: white;"> SALVAR </button>
    </div>
  </div>
  `;
}
