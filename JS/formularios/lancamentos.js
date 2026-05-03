export function formlancamentos(setor, acao) {
  return `
  <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
    <!-- ================= TOPO PADRÃO ================= -->
    <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1);">
      <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
      <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
    </header>

    <!-- ================= BUSCA E FILTROS (PADRÃO DOIS GRUPOS) ================= -->
    <div class="header-busca" style="margin-bottom: 20px;">
        <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
            <input id="lan-busca-id" type="text" class="input-id" placeholder="ID ou Nota Fiscal" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
            <button id="lan-btn-buscar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> PESQUISAR </button>
        </div>

        <!-- Linha de Filtros (Ajustada para PC e Mobile) -->
        <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 10px;">
            <!-- GRUPO ESQUERDA (Matéria) -->
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1; min-width: 300px; flex-direction: column;">
                <div class="input-group">
                    <label style="background-color: #0056f3;">MATÉRIA</label>
                    <select id="lan-filtro-materia" style="border: none; outline: none; padding: 0 15px; flex: 1; font-weight: bold; color: #333; background: white; height: 100%; cursor: pointer;">
                        <option value="todos">TODAS</option>
                        <option value="residuos">RESÍDUOS</option>
                        <option value="materia-prima">MATÉRIA PRIMA</option>
                    </select>
                </div>
            </div>
            <!-- GRUPO DIREITA (Data) -->
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 1.5; justify-content: flex-end; min-width: 300px; flex-direction: column;">
                <div class="input-group">
                    <label style="background-color: #0056f3;">DATA FILTRO</label>
                    <input id="lan-data-filtro" type="text" placeholder="DD/MM/AAAA" maxlength="10">
                </div>
            </div>
        </div>
    </div>

    <!-- ================= CONTEÚDO PRINCIPAL (TABELA) ================= -->
    <div class="info-auto" style="background-color:#0056f3; margin-bottom: 10px;"> 
        RELATÓRIO DE LANÇAMENTOS 
    </div>

    <div class="tabela-container" style="flex: 1; background: #0056f3; border-radius: 20px; overflow: hidden; margin-bottom: 20px;">
        <div style="overflow-x: auto; width: 100%;">
            <table class="tabela-mars">
                <thead>
                    <tr>
                        <th>TIPO VEÍCULO</th>
                        <th>PLACA CAVALO</th>
                        <th>PLACA CARRETA 1</th>
                        <th>TRANSPORTADORA</th>
                        <th>FORNECEDOR</th>
                        <th>MATÉRIA</th>
                        <th>NF</th>
                        <th>PESO LÍQUIDO</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody id="tabela-corpo-lancamentos">
                    <tr>
                        <td>CARRETA LS</td>
                        <td>ABC-1234</td>
                        <td>DEF-5678</td>
                        <td>LOGÍSTICA S.A</td>
                        <td>FORNECEDOR XYZ</td>
                        <td>RESÍDUOS</td>
                        <td>15420</td>
                        <td style="font-weight: bold; text-align: right;">28.500 KG</td>
                        <td>
                            <button class="btn-tabela-edit">👁️</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- ================= BOTÕES FOOTER ================= -->
    <div class="form-footer" style="margin-top: auto;">
        <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">VOLTAR</button>
        <button class="btn-registrar-central" id="lan-btn-exportar" style="background-color:#28a745; color:white;"> EXPORTAR EXCEL </button>
    </div>
  </div>
  `;
}
