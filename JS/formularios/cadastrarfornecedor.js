export function formcadastrarfornecedor(setor, acao) {
    return `
    <div class="form-mars-container" style="min-height: 100vh; display: flex; flex-direction: column;">
        
        <!-- ================= TOPO PADRÃO ================= -->
        <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1);">
            <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
            <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
        </header>

        <!-- ================= FORMULÁRIO DE ENTRADA ================= -->
        <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 20px; width: 100%; margin-bottom: 20px;">
            
            <!-- COLUNA 1: IDENTIFICAÇÃO -->
            <div class="col" style="flex: 1; min-width: 350px;">
                <div class="info-auto" style="background-color:#0056f3;">IDENTIFICAÇÃO DA EMPRESA</div>
                <div class="input-group"><label style="background-color: #0056f3;">RAZÃO SOCIAL</label><input id="forn-razao-social" type="text"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CNPJ</label><input id="forn-cnpj" type="text" placeholder="00.000.000/0000-00"></div>
                <div class="input-group"><label style="background-color: #0056f3;">CÓD. FORN.</label><input id="forn-codigo" type="text"></div>
            </div>

            <!-- COLUNA 2: ENDEREÇO -->
            <div class="col" style="flex: 1; min-width: 350px;">
                <div class="info-auto" style="background-color:#0056f3;">ENDEREÇO E LOCALIZAÇÃO</div>
                <div class="input-group"><label style="background-color: #0056f3;">CEP</label><input id="forn-cep" type="text" placeholder="00000-000"></div>
                <div class="input-group"><label style="background-color: #0056f3;">RUA</label><input id="forn-rua" type="text"></div>
                
                <!-- Ajuste aqui: flex-wrap e min-widths para não comprimir -->
                <div class="row-flex-busca-endereco">
                    <div class="input-group"><label style="background-color: #0056f3;">BAIRRO</label><input id="forn-bairro" type="text"></div>
                    <div class="input-group"><label style="background-color: #0056f3;">CIDADE</label><input id="forn-cidade" type="text"></div>
                    <div class="input-group"><label style="background-color: #0056f3;">UF</label><input id="forn-estado" type="text" maxlength="2"></div>
                </div>
            </div>
        </div>

        <!-- BLOCO DE AÇÕES -->
        <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap;">
             <button id="forn-btn-limpar" class="btn-buscar-pilula" style="background-color: #6c757d; height: 45px; border-radius: 50px; padding: 0 30px; color: white; border: none; font-weight: bold; cursor: pointer;">LIMPAR CAMPOS</button>
             <button id="forn-btn-salvar" class="btn-buscar-pilula" style="background-color: #0056f3; height: 45px; border-radius: 50px; padding: 0 40px; color: white; border: none; font-weight: bold; cursor: pointer; min-width: 250px;">ADICIONAR FORNECEDOR</button>
        </div>

        <!-- ================= CONSULTA (TABELA) ================= -->
        <div class="info-auto" style="background-color:#0056f3; margin-bottom: 10px;">CONSULTAR FORNECEDORES</div>
        
        <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
            <input id="forn-busca" type="text" class="input-id" placeholder="Pesquisar..." style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
            <button id="forn-btn-pesquisar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: bold; cursor: pointer;"> FILTRAR </button>
        </div>

        <!-- Ajuste na Tabela: min-width para evitar compressão das colunas -->
        <div class="tabela-container" style="flex: 1; background: white; border-radius: 20px; overflow: hidden; margin-bottom: 20px; border: 1px solid #ccc;">
            <div style="overflow-x: auto; width: 100%;">
                <table class="tabela-mars" style="width: 100%; min-width: 900px; border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #0056f3; color: white;">
                            <th style="padding: 12px;">CÓD</th>
                            <th style="padding: 12px;">RAZÃO SOCIAL</th>
                            <th style="padding: 12px;">CNPJ</th>
                            <th style="padding: 12px;">CIDADE/UF</th>
                            <th style="padding: 12px;">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody id="tabela-corpo-fornecedores" style="text-align: center;">
                        <!-- Conteúdo via JS -->
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ================= BOTÕES FOOTER ================= -->
        <div class="form-footer" style="margin-top: auto;">
            <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">← VOLTAR AO MENU</button>
            
            <!-- Use as classes que estão no seu CSS (btn-salvar e btn-registrar-central) -->
            <button id="forn-btn-pdf" class="btn-registrar-central" style="background-color: #dc3545; color: white;">GERAR PDF</button>
            <button id="forn-btn-excel" class="btn-salvar" style="background-color: #28a745; color: white;">PLANILHA COMPLETA</button>
        </div>
    </div>
    `;
}
