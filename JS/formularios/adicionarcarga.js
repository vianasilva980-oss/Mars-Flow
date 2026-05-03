export function formadicionarcarga(setor, acao) {
  return `
  <div class="form-mars-container">
    <!-- ================= TOPO ================= -->
    <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1);">
      <div style="font-size:50px; font-weight:bold; color: #0056f3; letter-spacing:2px;"> ${setor} </div>
      <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
    </header>

    <!-- ================= BUSCA ================= -->
    <div class="header-busca" style="margin-bottom: 20px;">
        <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
            <input id="adc-busca-id" type="text" class="input-id" placeholder="Busca por ID" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
            <button id="adc-btn-buscar" class="btn-buscar-pilula" style="background-color:#4cd964; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> BUSCAR </button>
        </div>

        <!-- Linha de Informações de Tempo (Padrão 2 Grupos) -->
        <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 10px;">
            <!-- GRUPO ESQUERDA -->
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1; min-width: 300px; flex-direction: column;">
                <div class="input-group"><label style="background-color: #4cd964;">PERÍODO</label><input id="adc-periodo" type="text" placeholder="Ex.: P1"></div>
                <div class="input-group"><label style="background-color: #4cd964;">WEEK</label><input id="adc-week" type="text" placeholder="Ex.: W1"></div>
            </div>
            <!-- GRUPO DIREITA -->
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1.5; justify-content: flex-end; min-width: 300px; flex-direction: column;">
                <div class="input-group"><label style="background-color: #4cd964;">DATA</label><input id="adc-data-chegada" type="text" placeholder="DD/MM/AAAA"></div>
                <div class="input-group"><label style="background-color: #4cd964;">HORA</label><input id="adc-hora-chegada" type="text" placeholder="00:00:00"></div>
            </div>
        </div>
    </div>

    <!-- ================= CORPO (DIVIDIDO EM 2 COM FLEX) ================= -->
    <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%;">
      
      <!-- COLUNA ESQUERDA -->
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> DADOS DO MOTORISTA </div>
        <div class="input-group"><label style="background-color: #4cd964;">MOTORISTA</label><input id="adc-motorista" type="text"></div>
        <div class="input-group"><label style="background-color: #4cd964;">CPF</label><input id="adc-cpf" type="text" placeholder="000.000.000-00"></div>
        <div class="input-group"><label style="background-color: #4cd964;">RG</label><input id="adc-rg" type="text"></div>
        <div class="input-group"><label style="background-color: #4cd964;">TELEFONE</label><input id="adc-telefone" type="text" placeholder="(00)00000-0000"></div>

        <div class="info-auto" style="background-color:#0056f3;"> DADOS DO VEÍCULO </div>
        <div class="input-group"><label style="background-color: #4cd964;">TIPO VEÍCULO</label><input id="adc-tipo-veiculo" type="text"></div>
        <div class="input-group"><label style="background-color: #4cd964;">PLACA CAVALO</label><input id="adc-placa-cavalo" type="text"></div>
        <div class="input-group"><label style="background-color: #4cd964;">CARRETA 1</label><input id="adc-placa-carreta-1" type="text"></div>
        <div class="input-group"><label style="background-color: #4cd964;">CARRETA 2</label><input id="adc-placa-carreta-2" type="text"></div>
        <div class="input-group"><label style="background-color: #4cd964;">TRANSPORTADORA</label><input id="adc-transportadora" type="text"></div>
        <div class="input-group"><label style="background-color: #4cd964;">CNPJ TRANS</label><input id="adc-cnpj-transportadora" type="text"></div>
      </div>

      <!-- COLUNA DIREITA -->
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> QUESTIONÁRIO </div>
        <div class="input-group"><label style="background-color: #4cd964;">VEÍCULO > 18M?</label><input id="adc-qtd-18m" type="text"></div>
        <div class="input-group"><label style="background-color: #4cd964;">PRIMEIRA VEZ?</label><input id="adc-primeira-vez" type="text"></div>
        
        <!-- Botão Central de Cadastro -->
        <div style="display:flex; justify-content:center; margin-top:50px;">
            <button id="adc-btn-cadastrar" class="btn-buscar-pilula" style="background-color: #4cd964; height: 45px; border-radius: 50px; padding: 0 40px; color: white; border: none; font-weight: bold; cursor: pointer;"> 
                ME CADASTRAR 
            </button>
        </div>
      </div>
    </div>

    <!-- ================= BOTÕES FOOTER ================= -->
    <div class="form-footer">
      <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">← VOLTAR</button>
      <button class="btn-registrar-central" id="adc-btn-registrar" style="background-color: #0056f3; color: white;"> REGISTRAR CARGA </button>
      <button class="btn-salvar" id="adc-btn-salvar" style="background-color: #28a745; color: white;"> SALVAR </button>
    </div>
  </div>
  `;
}
