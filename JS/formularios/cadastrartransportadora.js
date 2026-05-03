export function formcadastrartransportadora(setor, acao) {
  return `
  <div class="form-mars-container">
    <!-- ================= TOPO ================= -->
    <header style="display: flex; flex-direction: column; align-items: center; border: 2px solid #0056f3; border-radius: 40px; padding: 10px; margin-bottom: 20px; background: rgba(0, 86, 243, 0.1);">
      <div style="font-size: 50px; font-weight: bold; color: #0056f3; letter-spacing: 2px;"> ${setor} </div>
      <div style="font-size: 35px; color: #ffffff; border-top: 1px solid #0056f3; margin-top: 5px; padding-top: 3px; width: 60%; text-align: center; text-transform: uppercase;"> ${acao} </div>
    </header>

    <!-- ================= BUSCA ================= -->
    <div class="header-busca" style="margin-bottom: 20px;">
        <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
            <input id="tr-busca-id" type="text" class="input-id" placeholder="Busca Transportadora por ID" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
            <button id="btn-buscar-transportadora" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> BUSCAR </button>
        </div>
    </div>

    <!-- ================= CORPO ================= -->
    <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%;">
      
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> DADOS DA TRANSPORTADORA </div>
        
        <div class="input-group">
            <label style="background-color:#0056f3;">LOGO</label>
            <input id="tr-logo" type="file" accept="image/*" style="padding-top: 8px; background: white;">
        </div>

        <!-- STATUS DA CONVERSÃO PYTHON -->
        <div id="tr-status-api" style="display:none; margin-top:5px; padding:5px; border-radius:10px; text-align:center; font-size:12px; font-weight:bold;"></div>

        <input type="hidden" id="tr-logo-base64">

        <div class="input-group">
            <label style="background-color:#0056f3;">CNPJ</label>
            <input id="tr-cnpj" type="text" placeholder="00.000.000/0000-00">
        </div>

        <div class="input-group">
            <label style="background-color:#0056f3;">RAZÃO SOCIAL</label>
            <input id="tr-razao-social" type="text">
        </div>

        <!-- ÁREA DE PREVIEW -->
        <div style="margin-top:15px; text-align:center; border: 2px dashed #0056f3; border-radius: 15px; padding: 10px;">
            <img id="tr-logo-preview" style="max-width:150px; display:none; border-radius:10px; background:white; padding:5px;" />
            <p id="tr-preview-placeholder" style="color:white; opacity:0.5;">Aguardando Logo...</p>
        </div>
      </div>

      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#4cd964;"> TIPO DE MATERIAL </div>
        <div class="input-group">
            <label style="background-color:#4cd964;">RESID. INDUSTR.</label>
            <select id="tr-residuos-industriais">
                <option value="Não">Não</option>
                <option value="Sim">Sim</option>
            </select>
        </div>
        <div class="input-group">
            <label style="background-color:#4cd964;">MATÉRIA PRIMA</label>
            <select id="tr-materia-prima">
                <option value="Não">Não</option>
                <option value="Sim">Sim</option>
            </select>
        </div>
      </div>

    </div>

    <!-- ================= BOTÕES ================= -->
    <div class="form-footer" style="display: flex; gap: 10px; margin-top: 30px;">
      <button class="btn-voltar" onclick="location.reload()" style="background-color: #6c757d; flex: 1;">VOLTAR</button>
      <button class="btn-registrar-central" id="tr-btn-cadastrar" style="background-color: #0056f3; color: white; flex: 2;">CADASTRAR</button>
      <button id="tr-btn-salvar" style="background-color: #28a745; color: white; flex: 2;">SALVAR</button>
    </div>
  </div>
  `;
}
