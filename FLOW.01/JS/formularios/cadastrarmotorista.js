export function formcadastrarmotorista(setor, acao) {
  return `
  <div class="form-mars-container">
    <!-- ================= TOPO ================= -->
    <header style="display: flex; flex-direction: column; align-items: center; border: 2px solid #0056f3; border-radius: 40px; padding: 10px; margin-bottom: 20px; background: rgba(0, 86, 243, 0.1);">
      <div style="font-size: 50px; font-weight: bold; color: #0056f3; letter-spacing: 2px;"> ${setor} </div>
      <div style="font-size: 35px; color: #ffffff; border-top: 1px solid #0056f3; margin-top: 5px; padding-top: 3px; width: 60%; text-align: center; text-transform: uppercase;"> ${acao} </div>
    </header>

    <!-- ================= BUSCA (ADICIONADO) ================= -->
    <div class="header-busca" style="margin-bottom: 20px;">
        <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
            <input id="mot-busca-id" type="text" class="input-id" placeholder="Busca por CPF ou Nome" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
            <button id="mot-btn-buscar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> BUSCAR </button>
        </div>
    </div>

    <!-- ================= CORPO ================= -->
    <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%;">
      
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> DADOS DO MOTORISTA </div>
        
        <div class="input-group">
            <label style="background-color: #0056f3;">NOME COMPLETO</label>
            <input id="mot-nome" type="text" placeholder="Digite o nome completo">
        </div>

        <div class="input-group">
            <label style="background-color: #0056f3;">RG</label>
            <input id="mot-rg" type="text" placeholder="Digite o RG">
        </div>

        <div class="input-group">
            <label style="background-color: #0056f3;">CPF</label>
            <input id="mot-cpf" type="text" placeholder="000.000.000-00">
        </div>

        <div class="input-group">
            <label style="background-color: #0056f3;">TELEFONE</label>
            <input id="mot-telefone" type="text" placeholder="(00) 00000-0000">
        </div>

        <div class="input-group">
            <label style="background-color: #0056f3;">STATUS</label>
            <select id="mot-status" style="border: none; outline: none; padding: 0 15px; flex: 1; font-weight: bold; color: #333; background: white; height: 100%; cursor: pointer;">
                <option value="ativo">ATIVO</option>
                <option value="inativo">INATIVO</option>
                <option value="bloqueado">BLOQUEADO</option>
            </select>
        </div>
      </div>

    </div>

    <!-- ================= BOTÕES ================= -->
    <div class="form-footer">
      <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">VOLTAR</button>
      <button class="btn-registrar-central" id="mot-btn-cadastrar" style="background-color: #0056f3; color: white;">CADASTRAR MOTORISTA</button>
      <button class="btn-salvar" id="mot-btn-salvar" style="background-color: #28a745; color: white;">SALVAR</button>
    </div>
  </div>
  `;
}
