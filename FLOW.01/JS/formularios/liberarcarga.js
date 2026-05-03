export function formliberarcarga(setor, acao) {
  return `
  <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
    <!-- ================= TOPO PADRÃO ================= -->
    <header style="display:flex;flex-direction:column;align-items:center;border:2px solid #0056f3;border-radius:40px;padding:10px;margin-bottom:20px;background:rgba(0,86,243,0.1);">
      <div style="font-size:50px;font-weight:bold;color:#0056f3;letter-spacing:2px;"> ${setor} </div>
      <div style="font-size:35px;color: #ffffff;border-top:1px solid #0056f3;margin-top:5px;padding-top:3px;width:60%;text-align:center;text-transform:uppercase;"> ${acao} </div>
    </header>

    <!-- ================= BUSCA (PADRÃO DOIS GRUPOS) ================= -->
    <div class="header-busca" style="margin-bottom: 20px;">
        <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
            <input id="lc-busca-id" type="text" class="input-id" placeholder="Buscar carga por ID" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
            <button id="lc-btn-buscar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> BUSCAR </button>
        </div>

        <!-- Linha de Informações de Tempo -->
        <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 10px;">
            <!-- GRUPO ESQUERDA -->
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1; min-width: 300px; flex-direction: column;">
                <div class="input-group"><label style="background-color: #0056f3;">PERÍODO</label><input id="lc-periodo" type="text" placeholder="P1"></div>
                <div class="input-group"><label style="background-color: #0056f3;">WEEK</label><input id="lc-week" type="text" placeholder="W1"></div>
            </div>
            <!-- GRUPO DIREITA -->
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1.5; justify-content: flex-end; min-width: 300px; flex-direction: column;">
                <div class="input-group"><label style="background-color: #0056f3;">DATA</label><input id="lc-data" type="text" placeholder="DD/MM/AAAA"></div>
                <div class="input-group"><label style="background-color: #0056f3;">HORA</label><input id="lc-hora" type="text" placeholder="00:00:00"></div>
            </div>
        </div>
    </div>

    <!-- ================= CORPO (DIVIDIDO EM 2 COM FLEX) ================= -->
    <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%;">
      
      <!-- COLUNA ESQUERDA (VEÍCULO) -->
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> DADOS DO VEÍCULO </div>
        <div class="input-group"><label style="background-color: #0056f3;">TIPO VEÍCULO</label><input id="lc-tipo-veiculo" type="text"></div>
        <div class="input-group"><label style="background-color: #0056f3;">PLACA CAVALO</label><input id="lc-placa-cavalo" type="text"></div>
        <div class="input-group"><label style="background-color: #0056f3;">CARRETA 1</label><input id="lc-carreta1" type="text"></div>
        <div class="input-group"><label style="background-color: #0056f3;">TRANSPORTADORA</label><input id="lc-transportadora" type="text"></div>
      </div>

      <!-- COLUNA DIREITA (CARGA) -->
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> DADOS DA CARGA </div>
        <div class="input-group"><label style="background-color: #0056f3;">FORNECEDOR</label><input id="lc-fornecedor" type="text"></div>
        <div class="input-group"><label style="background-color: #0056f3;">CÓD FORN</label><input id="lc-cod-fornecedor" type="text"></div>
        <div class="input-group"><label style="background-color: #0056f3;">MATÉRIA</label><input id="lc-materia" type="text"></div>
        <div class="input-group"><label style="background-color: #0056f3;">NOTA FISCAL</label><input id="lc-nota-fiscal" type="text"></div>
      </div>
    </div>

    <!-- ================= SEÇÃO DE LIBERAÇÃO (VERDE) ================= -->
    <div class="form-grid-principal" style="display: flex; justify-content: center; margin-top: 20px;">
        <div class="col" style="flex: 1; max-width: 100%;">
            <div class="info-auto" style="background-color:#4cd964;"> APROVAÇÃO DE CARGA </div>
            <div class="input-group"><label style="background-color:#4cd964;"> STATUS </label><input id="lc-status" type="text" value="LIBERADO"></div>
            <div class="input-group"><label style="background-color:#4cd964;"> OBSERVAÇÃO </label><input id="lc-observacao" type="text" placeholder="Opcional"></div>
            
            <div style="display:flex; justify-content:center; margin-top:30px; margin-bottom: 20px;">
                <button id="lc-btn-liberar" class="btn-buscar-pilula" style="background-color:#4cd964; height: 45px; border-radius: 50px; padding: 0 40px; color: white; border: none; font-weight: bold; cursor: pointer;"> 
                    LIBERAR CARGA 
                </button>
            </div>
        </div>
    </div>

    <!-- ================= BOTÕES FOOTER ================= -->
    <div class="form-footer" style="margin-top: auto;">
      <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">VOLTAR</button>
      <button class="btn-registrar-central" style="background-color: #0056f3; color: white;">VER CARGA</button>
      <button class="btn-salvar" style="background-color: #28a745; color: white;">SALVAR LIBERAÇÃO</button>
    </div>
  </div>
  `;
}
