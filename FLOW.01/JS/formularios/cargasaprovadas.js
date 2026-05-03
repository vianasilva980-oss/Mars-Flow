export function formcargasaprovadas(setor, acao) {
    return `
    <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
        
        <!-- Cabeçalho Padronizado -->
        <header class="form-header">
            <div class="header-title">${setor}</div>
            <div class="header-subtitle">${acao}</div>
        </header>

        <!-- Filtros de Busca e Monitoramento -->
        <div class="header-busca">
            <div class="busca-wrapper">
                <input id="aprov-busca-geral" type="text" class="input-id" placeholder="Buscar por ID, Placa ou Nota Fiscal...">
                <button id="aprov-btn-buscar" class="btn-mars bg-primary">PESQUISAR</button>
            </div>
            
            <div class="row-flex-busca">
                <!-- Filtro de Período -->
                <div class="grupo-busca-mobile">
                    <div class="input-group">
                        <label>PERÍODO</label>
                        <select id="aprov-filtro-periodo">
                            <option value="todos">TODOS</option>
                            <option value="p1">P1</option>
                            <option value="p2">P2</option>
                            <option value="p3">P3</option>
                            <option value="p4">P4</option>
                        </select>
                    </div>
                </div>

                <!-- Filtro de Data de Aprovação -->
                <div class="grupo-busca-mobile">
                    <div class="input-group">
                        <label>DATA APROV.</label>
                        <input id="aprov-data-filtro" type="text" placeholder="DD/MM/AAAA" maxlength="10">
                    </div>
                </div>
            </div>
        </div>

        <div class="info-auto">RELATÓRIO DE CARGAS APROVADAS</div>

        <!-- Tabela de Resultados -->
        <div class="tabela-container" style="flex: 1; background: 0056f3; margin-bottom: 20px;">
            <table class="tabela-mars">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATA APROV.</th>
                        <th>PLACA</th>
                        <th>TRANSPORTADORA</th>
                        <th>FORNECEDOR</th>
                        <th>MATÉRIA</th>
                        <th>PESO (KG)</th>
                        <th>STATUS</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody id="tabela-corpo-aprovadas">
                    <!-- Exemplo de linha aprovada -->
                    <tr>
                        <td>#1025</td>
                        <td>24/05/2024</td>
                        <td>BRA-2E19</td>
                        <td>LOG MARS BRASIL</td>
                        <td>AGRO INDÚSTRIA</td>
                        <td>MILHO</td>
                        <td style="font-weight: bold;">33.500</td>
                        <td><span class="badge bg-aprovada">APROVADA</span></td>
                        <td>
                            <button class="btn-tabela-acao" title="Ver Detalhes">👁️</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Footer com Opções de Saída -->
        <div class="form-footer" style="margin-top: auto;">
            <button class="btn-mars bg-success" onclick="location.reload()">← VOLTAR</button>
            <div style="display:flex; gap:10px;">
                <button class="btn-mars bg-primary" id="aprov-btn-imprimir">IMPRIMIR LISTA</button>
                <button class="btn-mars bg-success" id="aprov-btn-excel">EXPORTAR EXCEL</button>
            </div>
        </div>
    </div>
    `;
}
