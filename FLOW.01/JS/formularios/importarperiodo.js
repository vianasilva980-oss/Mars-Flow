export function formimportarperiodo(setor, acao) {
    return `
    <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
        
        <!-- ================= TOPO PADRÃO (ESTILO INLINE) ================= -->
        <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1); width: 100%;">
            <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
            <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
        </header>

        <!-- ================= ÁREA DE IMPORTAÇÃO (PÍLULA) ================= -->
        <div class="header-busca" style="margin-bottom: 20px;">
            <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
                <div class="input-group" style="flex: 2; margin-bottom: 0;">
                    <label style="background-color: #0056f3;">ARQUIVO</label>
                    <input id="imp-arquivo-excel" type="file" accept=".xlsx, .xls, .csv" style="padding: 7px; background: white; border: none; font-weight: bold; flex: 1;">
                </div>
                <button id="imp-btn-carregar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> CARREGAR </button>
            </div>
            
            <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; width: 100%; gap: 10px;">
                <div class="input-group" style="flex: 1;">
                    <label style="background-color: #0056f3;">FILTRAR DATA</label>
                    <input id="imp-data-busca" type="text" placeholder="DD/MM/AAAA" style="border: none; outline: none; padding: 0 15px; flex: 1; font-weight: bold;">
                </div>
            </div>
        </div>

        <div class="info-auto" style="background-color:#0056f3; margin-bottom: 10px;">PRÉ-VISUALIZAÇÃO DO CALENDÁRIO</div>

        <!-- ================= TABELA (COM COR DIFERENTE NO TOPO) ================= -->
        <div class="tabela-container" style="flex: 1; background: #0056f3; border-radius: 20px; overflow: hidden; margin-bottom: 20px; border: 1px solid #ccc;">
            <div style="overflow-x: auto; width: 100%;">
                <table class="tabela-mars" style="width: 100%; min-width: 800px; border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #0056f3; color: white;">
                            <th style="padding: 15px;">DATA</th>
                            <th style="padding: 15px;">PERÍODO</th>
                            <th style="padding: 15px;">WEEK</th>
                            <th style="padding: 15px;">SEMANA</th>
                        </tr>
                    </thead>
                    <tbody id="tabela-corpo-periodos" style="text-align: center;">
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">24/05/2024</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">P5</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">W21</td>
                            <td style="padding: 12px; border-bottom: 1px solid #eee;">SEMANA 03</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ================= FOOTER (PADRÃO CSS) ================= -->
        <div class="form-footer" style="margin-top: auto;">
            <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">← VOLTAR</button>
            <button id="imp-btn-confirmar" class="btn-salvar" style="background-color: #0056f3; color: white;">CONFIRMAR IMPORTAÇÃO</button>
        </div>
    </div>
    `;
}
