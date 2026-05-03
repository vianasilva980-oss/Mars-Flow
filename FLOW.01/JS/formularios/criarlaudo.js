export function formcriarlaudo(setor, acao) {
    return `
    <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
        <!-- ================= TOPO PADRÃO ================= -->
        <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1);">
            <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
            <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
        </header>

        <!-- ================= BUSCA (PADRÃO PÍLULA) ================= -->
        <div class="header-busca" style="margin-bottom: 20px;">
            <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
                <input id="laudo-busca-id" type="text" class="input-id" placeholder="Busca por ID" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
                <button id="btn-buscar-laudo" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> BUSCAR </button>
            </div>

            <!-- Linha de Informações de Tempo -->
            <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 10px;">
                <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1; min-width: 300px; flex-direction: column;">
                    <div class="input-group"><label style="background-color: #0056f3;">PERÍODO</label><input id="laudo-periodo" type="text" placeholder="P1"></div>
                    <div class="input-group"><label style="background-color: #0056f3;">WEEK</label><input id="laudo-week" type="text" placeholder="W1"></div>
                </div>
                <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1.5; justify-content: flex-end; min-width: 300px; flex-direction: column;">
                    <div class="input-group"><label style="background-color: #0056f3;">DATA</label><input id="laudo-data-chegada" type="text" placeholder="DD/MM/AAAA"></div>
                    <div class="input-group"><label style="background-color: #0056f3;">HORA</label><input id="laudo-hora-chegada" type="text" placeholder="00:00:00"></div>
                </div>
            </div>
        </div>

        <!-- ================= CORPO (GRID) ================= -->
        <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%;">
            <!-- COLUNA ESQUERDA (VEÍCULO) -->
            <div class="col" style="flex: 1; min-width: 320px;">
                <div class="info-auto" style="background-color:#0056f3;"> DADOS DO VEÍCULO </div>
                <div class="input-group"><label style="background-color: #0056f3;">TIPO VEÍCULO</label><input id="ld-tipo-veiculo" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">PLACA CAVALO</label><input id="ld-placa-cavalo" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CARRETA 1</label><input id="ld-carreta-1" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">TRANSPORTADORA</label><input id="ld-transportadora" type="text"></div>
            </div>

            <!-- COLUNA DIREITA (CARGA) -->
            <div class="col" style="flex: 1; min-width: 320px;">
                <div class="info-auto" style="background-color:#0056f3;"> DADOS DA CARGA </div>
                <div class="input-group"><label style="background-color: #0056f3;">FORNECEDOR</label><input id="ld-fornecedor" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CÓD FORN</label><input id="ld-cod-fornecedor" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">MATÉRIA</label><input id="ld-materia" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">NOTA FISCAL</label><input id="ld-nota-fiscal" type="text"></div>
            </div>
        </div>

        <!-- ================= LAUDO (DESTAQUE VERDE) ================= -->
        <div class="form-grid-principal" style="display: flex; justify-content: center; margin-top: 20px;">
            <div class="col" style="flex: 1; max-width: 100%;">
                <div class="info-auto" style="background-color:#4cd964;"> CRIAÇÃO DE LAUDO TÉCNICO </div>
                <div class="input-group"><label style="background-color:#4cd964;"> CONDIÇÃO </label><input id="ld-condicao" type="text"></div>
                <div class="input-group"><label style="background-color:#4cd964;"> ANÁLISE </label><input id="ld-analise" type="text"></div>
                <div class="input-group"><label style="background-color:#4cd964;"> RESPONSÁVEL </label><input id="ld-responsavel" type="text"></div>
                
                <div style="display:flex; justify-content:center; margin-top:30px; margin-bottom: 20px;">
                    <button id="ld-btn-gerar" class="btn-buscar-pilula" style="background-color:#4cd964; height: 45px; border-radius: 50px; padding: 0 40px; color: white; border: none; font-weight: bold; cursor: pointer;"> GERAR LAUDO </button>
                </div>
            </div>
        </div>

        <!-- ================= BOTÕES FOOTER ================= -->
        <div class="form-footer" style="margin-top: auto;">
            <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">VOLTAR</button>
            <button class="btn-registrar-central" style="background-color: #0056f3; color: white;">VER CARGA</button>
            <button class="btn-salvar" id="ld-btn-salvar" style="background-color: #28a745; color: white;"> SALVAR LAUDO </button>
        </div>
    </div>
    `;
}
