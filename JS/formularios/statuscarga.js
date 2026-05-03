export function formstatuscarga(setor, acao) {
    return `
    <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
        <!-- ================= TOPO PADRÃO ================= -->
        <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1);">
            <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
            <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
        </header>

        <!-- ================= BUSCA E FILTROS ================= -->
        <div class="header-busca" style="margin-bottom: 20px;">
            <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
                <input id="st-busca-id" type="text" class="input-id" placeholder="ID ou Placa" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
                <button id="st-btn-buscar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> PESQUISAR </button>
            </div>

            <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; width: 100%; gap: 10px;">
                <div class="input-group" style="flex: 1; min-width: 300px;">
                    <label style="background-color: #0056f3;">FILTRAR STATUS</label>
                    <select id="st-filtro-status" style="border: none; outline: none; padding: 0 15px; flex: 1; font-weight: bold; color: #333; background: white; cursor: pointer;">
                        <option value="todos">TODOS</option>
                        <option value="aprovada">APROVADA</option>
                        <option value="aguardando_analise">AGUARDANDO ANÁLISE</option>
                        <option value="descarregada">DESCARREGADA</option>
                        <option value="recusada">RECUSADA</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- ================= TABELA ================= -->
        <div class="info-auto" style="background-color:#0056f3; margin-bottom: 10px;"> MONITORAMENTO DE CARGAS </div>
        
        <div class="tabela-container" style="flex: 1; background: 0056f3; border-radius: 20px; overflow: hidden; margin-bottom: 20px;">
            <div style="overflow-x: auto; width: 100%;">
                <table class="tabela-mars">
                    <thead>
                        <tr>
                            <th>STATUS</th>
                            <th>SETOR DESTINO</th>
                            <th>TIPO VEÍCULO</th>
                            <th>PLACA</th>
                            <th>TRANSPORTADORA</th>
                            <th>FORNECEDOR</th>
                            <th>NF</th>
                        </tr>
                    </thead>
                    <tbody id="tabela-corpo-status">
                        <tr>
                            <td><span style="background:#4cd964; color:white; padding:5px 10px; border-radius:15px; font-size:10px; font-weight:bold;">APROVADA</span></td>
                            <td>RECEBIMENTO</td>
                            <td>BITREM</td>
                            <td>KXP-4589</td>
                            <td>TRANS-LOG</td>
                            <td>AGRO LTDA</td>
                            <td>9855</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ================= BOTÕES FOOTER ================= -->
        <div class="form-footer" style="margin-top: auto;">
            <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">VOLTAR</button>
            <button class="btn-registrar-central" id="sld-btn-enviar" style="background-color: #0056f3; color: white;"> ENVIAR SOLICITAÇÃO </button>
            <button class="btn-salvar" id="sld-btn-salvar" style="background-color: #28a745; color: white;"> SALVAR </button>
        </div>
    </div>
    `;
}
