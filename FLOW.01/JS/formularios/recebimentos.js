export function formrecebimentos(setor, acao) {
    return `
    <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
        
        <!-- ================= TOPO PADRÃO (IGUAL À IMAGEM) ================= -->
        <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1); width: 100%;">
            <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
            <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
        </header>

        <!-- ================= BUSCA E FILTROS (PADRÃO PÍLULA) ================= -->
        <div class="header-busca" style="margin-bottom: 20px;">
            <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
                <input id="rec-busca-id" type="text" class="input-id" placeholder="ID, Placa ou Nota Fiscal" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
                <button id="rec-btn-buscar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> PESQUISAR </button>
            </div>
            
            <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 10px;">
                <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1; min-width: 300px; flex-direction: column;">
                    <div class="input-group">
                        <label style="background-color: #0056f3;">PERÍODO</label>
                        <select id="rec-filtro-periodo" style="border: none; outline: none; padding: 0 15px; flex: 1; font-weight: bold; color: #333; background: white; cursor: pointer;">
                            <option value="todos">TODOS</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                        </select>
                    </div>
                </div>
                <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1; min-width: 300px; flex-direction: column;">
                    <div class="input-group">
                        <label style="background-color: #0056f3;">DATA RECEB.</label>
                        <input id="rec-data-filtro" type="text" placeholder="DD/MM/AAAA" maxlength="10">
                    </div>
                </div>
            </div>
        </div>

        <div class="info-auto" style="background-color:#0056f3; margin-bottom: 10px;">PLANILHA DE RECEBIMENTOS</div>

        <!-- ================= TABELA (PLANILHA) ================= -->
        <div class="tabela-container" style="flex: 1; background: #0056f3; border-radius: 20px; overflow: hidden; margin-bottom: 20px;">
            <div style="overflow-x: auto; width: 100%;">
                <table class="tabela-mars" style="width: 100%; min-width: 1000px; border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #0056f3; color: white;">
                            <th>DATA/HORA</th>
                            <th>PLACA</th>
                            <th>TRANSPORTADORA</th>
                            <th>FORNECEDOR</th>
                            <th>PRODUTO</th>
                            <th>NF</th>
                            <th>PESO BRUTO</th>
                            <th>PESO LÍQ.</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody id="tabela-corpo-recebimentos" style="text-align: center;">
                        <tr>
                            <td>24/05/2024 08:30</td>
                            <td>ABC-1234</td>
                            <td>LOGISTICA MARS</td>
                            <td>USINA SÃO JOSÉ</td>
                            <td>MILHO</td>
                            <td>45882</td>
                            <td>45.000 KG</td>
                            <td style="font-weight: bold;">32.000 KG</td>
                            <td> <button class="btn-tabela-edit">👁️</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ================= BOTÕES FOOTER (PADRÃO CSS) ================= -->
        <div class="form-footer" style="margin-top: auto;">
            <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">← VOLTAR</button>
            <button id="rec-btn-pdf" class="btn-registrar-central" style="background-color: #0056f3; color: white;">GERAR PDF</button>
            <button id="rec-btn-excel" class="btn-salvar" style="background-color: #28a745; color: white;">EXPORTAR EXCEL</button>
        </div>
    </div>
    `;
}
