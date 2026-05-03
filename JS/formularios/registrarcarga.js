export function formregistrarcarga(setor, acao) {
    return `
    <div class="form-mars-container">
        <!-- ================= TOPO ================= -->
        <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1);">
            <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
            <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
        </header>

        <!-- ================= BUSCA ================= -->
        <div class="header-busca" style="margin-bottom: 20px;">
            <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
                <input id="carga-busca-id" type="text" class="input-id" placeholder="Busca por ID" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
                <button id="carga-btn-buscar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> BUSCAR </button>
            </div>
            <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 10px;">
                <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1; min-width: 300px;flex-direction: column;">
                    <div class="input-group"><label style="background-color: #0056f3;">PERÍODO</label><input id="carga-periodo" type="text" placeholder="P1"></div>
                    <div class="input-group"><label style="background-color: #0056f3;">WEEK</label><input id="carga-week" type="text" placeholder="W1"></div>
                </div>
                <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1.5; justify-content: flex-end; min-width: 300px;flex-direction: column;">
                    <div class="input-group"><label style="background-color: #0056f3;">DATA</label><input id="carga-data-chegada" type="text" placeholder="DD/MM/AAAA"></div>
                    <div class="input-group"><label style="background-color: #0056f3;">HORA</label><input id="carga-hora-chegada" type="text" placeholder="00:00:00"></div>
                </div>
            </div>
        </div>

        <!-- ================= CORPO ================= -->
        <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%;">
            
            <!-- COLUNA ESQUERDA -->
            <div class="col" style="flex: 1; min-width: 320px;">
                <div class="info-auto" style="background-color:#0056f3;"> DADOS DO MOTORISTA </div>
                <div class="input-group"><label style="background-color: #0056f3;">MOTORISTA</label><input id="carga-motorista" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CPF</label><input id="carga-cpf" type="text" placeholder="000.000.000-00"></div>
                <div class="input-group"><label style="background-color: #0056f3;">RG</label><input id="carga-rg" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">TELEFONE</label><input id="carga-telefone" type="text"></div>
                
                <div class="info-auto" style="background-color:#0056f3;"> DADOS DO VEÍCULO </div>
                <div class="input-group"><label style="background-color: #0056f3;">TIPO VEÍCULO</label><input id="carga-tipo-veiculo" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">PLACA CAVALO</label><input id="carga-placa-cavalo" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CARRETA 1</label><input id="carga-placa-carreta-1" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CARRETA 2</label><input id="carga-placa-carreta-2" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">TRANSPORTADORA</label><input id="carga-transportadora" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CNPJ TRANS</label><input id="carga-cnpj-transportadora" type="text"></div>
            </div>

            <!-- COLUNA DIREITA -->
            <div class="col" style="flex: 1; min-width: 320px;">
                <div class="info-auto" style="background-color:#0056f3;"> DADOS DA CARGA </div>
                <div class="input-group"><label style="background-color: #0056f3;">FORNECEDOR</label><input id="carga-fornecedor" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CÓD FORN</label><input id="carga-cod-fornecedor" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">MATÉRIA</label><input id="carga-materia" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CÓD MATÉRIA</label><input id="carga-cod-materia" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">NOTA FISCAL</label><input id="carga-nota-fiscal" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">PESO NF</label><input id="carga-peso-nf" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">VALOR NF</label><input id="carga-valor-nf" type="text"></div>

                <!-- SEÇÃO NOVA DENTRO DA COLUNA -->
                <div class="info-auto" style="background-color:#0056f3; margin-top:20px;"> DESCARREGAMENTO </div>
                <div class="input-group">
                    <label style="background-color: #0056f3;">TIPO</label>
                    <select id="carga-detalhe-tipo">
                        <option value="">Selecione...</option>
                        <option value="Materia prima">Materia prima</option>
                        <option value="Embalagem">Embalagem</option>
                        <option value="Transferência">Transferência</option>
                        <option value="Manufaturados">Manufaturados</option>
                    </select>
                </div>
                <div class="input-group">
                    <label style="background-color: #0056f3;">SETOR</label>
                    <select id="carga-detalhe-setor">
                        <option value="">Selecione...</option>
                        <option value="Moega">Moega</option>
                        <option value="Logistica">Logistica</option>
                        <option value="Almoxarifado">Almoxarifado</option>
                    </select>
                </div>
                <div class="input-group">
                    <label style="background-color: #0056f3;">CATEGORIA</label>
                    <select id="carga-detalhe-categoria">
                        <option value="">Selecione...</option>
                        <option value="Granel Sólido">Granel Sólido</option>
                        <option value="Granel liquido">Granel liquido</option>
                        <option value="Sacaria Paletizada">Sacaria Paletizada</option>
                        <option value="Big Bags Paletizados">Big Bags Paletizados</option>
                        <option value="Filme Stretch Paletizado">Filme Stretch Paletizado</option>
                        <option value="Embalagem Paletizado">Embalagem Paletizado</option>
                        <option value="Diversos">Diversos</option>
                    </select>
                </div>
            </div> 
        </div>

        <!-- ================= BOTÕES ================= -->
        <div class="form-footer" style="margin-top:30px;">
            <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">VOLTAR</button>
            <button class="btn-registrar-central" id="carga-btn-registrar" style="background-color: #0056f3; color: white;"> REGISTRAR CARGA </button>
            <button class="btn-salvar" id="carga-btn-salvar" style="background-color: #28a745; color: white;"> SALVAR </button>
        </div>
    </div>
    `;
}
