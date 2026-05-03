export function formcadastrarveiculo(setor, acao) {
  return `
  <div class="form-mars-container">
    <!-- ================= TOPO ================= -->
    <header style="display:flex; flex-direction:column; align-items:center; border:2px solid #0056f3; border-radius:40px; padding:10px; margin-bottom:20px; background:rgba(0,86,243,0.1);">
      <div style="font-size:50px; font-weight:bold; color:#0056f3; letter-spacing:2px;"> ${setor} </div>
      <div style="font-size:35px; color: #ffffff; border-top:1px solid #0056f3; margin-top:5px; padding-top:3px; width:60%; text-align:center; text-transform:uppercase;"> ${acao} </div>
    </header>

    <!-- ================= BUSCA E DATA ================= -->
    <div class="header-busca" style="margin-bottom: 20px;">
        <div class="busca-wrapper" style="display:flex; gap:10px; width:100%; margin-bottom:20px; align-items:center;">
            <input id="vei-busca-id" type="text" class="input-id" placeholder="ID ou Placa" style="height: 40px; border-radius: 50px; border:none; padding:0 25px; flex:1; font-weight:bold;">
            <button id="vei-btn-buscar" class="btn-buscar-pilula" style="background-color:#0056f3; height: 40px; border-radius: 50px; padding: 0 35px; color: white; border: none; font-weight: 900; cursor: pointer; white-space: nowrap;"> BUSCAR </button>
        </div>

        <div class="row-flex-busca" style="display: flex; flex-wrap: wrap; justify-content: flex-end; width: 100%; gap: 10px;">
            <div class="grupo-busca-mobile" style="display: flex; gap: 10px; flex: 0 1 auto; min-width: 300px;">
                <div class="input-group">
                    <label style="background-color:#0056f3;">DATA CADASTRAMENTO</label>
                    <input id="vei-data-cadastro" type="text" placeholder="DD/MM/AAAA" maxlength="10">
                </div>
            </div>
        </div>
    </div>

    <!-- ================= CORPO (DIVIDIDO EM 2 COM FLEX) ================= -->
    <div class="form-grid-principal" style="display: flex; flex-wrap: wrap; gap: 30px; width: 100%;">
      
      <!-- COLUNA ESQUERDA: CATEGORIA (AZUL) -->
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#0056f3;"> CATEGORIA DE CARGA / RESÍDUOS </div>
        <div class="input-group">
            <label style="background-color:#0056f3;">TIPO DE VEÍCULO</label>
            <select id="vei-tipo" style="border: none; outline: none; padding: 0 15px; flex: 1; font-weight: bold; color: #333; background: white; height: 100%; cursor: pointer;">
                <option value="">SELECIONE O MODELO</option>
                <option value="carreta_ls">CARRETA LS</option>
                <option value="bitrem">BITREM</option>
                <option value="bisider">BISIDER</option>
                <option value="tanque">TANQUE</option>
                <option value="carreta_ls_bitrem">CARRETA LS BITREM</option>
                <option value="truck">TRUCK</option>
                <option value="furgao">FURGÃO</option>
                <option value="vlc">VLC (VEÍCULO LEVE)</option>
                <option value="cacamba">CAÇAMBA / BASCULANTE</option>
                <option value="roll_on">ROLL-ON / ROLL-OFF</option>
            </select>
        </div>
      </div>

      <!-- COLUNA DIREITA: ESPECIFICAÇÕES (VERDE) -->
      <div class="col" style="flex: 1; min-width: 320px;">
        <div class="info-auto" style="background-color:#4cd964;"> ESPECIFICAÇÕES TÉCNICAS </div>
        <div class="input-group">
            <label style="background-color:#4cd964;">EIXOS</label>
            <select id="vei-eixos" style="border: none; outline: none; padding: 0 15px; flex: 1; font-weight: bold; color: #333; background: white; height: 100%; cursor: pointer;">
                <option value="2_eixos">2 EIXOS (TOCO)</option>
                <option value="3_eixos">3 EIXOS (TRUCK)</option>
                <option value="4_eixos">4 EIXOS</option>
                <option value="6_eixos">6 EIXOS</option>
                <option value="9_eixos">9 EIXOS (BITREM/RODOTREM)</option>
            </select>
        </div>
        <div class="input-group">
            <label style="background-color:#4cd964;">PROPULSÃO</label>
            <select id="vei-propulsao" style="border: none; outline: none; padding: 0 15px; flex: 1; font-weight: bold; color: #333; background: white; height: 100%; cursor: pointer;">
                <option value="combustao">A COMBUSTÃO (DIESEL/GAS)</option>
                <option value="eletrico">ELÉTRICO</option>
                <option value="hibrido">HÍBRIDO</option>
            </select>
        </div>
      </div>
    </div>

    <!-- ================= TABELA DE RESULTADOS ================= -->
    <div class="tabela-container">
      <table class="tabela-mars">
        <thead>
          <tr>
            <th>ID</th>
            <th>TIPO</th>
            <th>EIXOS</th>
            <th>PROPULSÃO</th>
            <th>DATA CADASTRO</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody id="tabela-corpo-veiculos">
          <tr>
            <td>001</td>
            <td>CARRETA LS</td>
            <td>3 EIXOS</td>
            <td>COMBUSTÃO</td>
            <td>10/05/2024</td>
            <td>
              <button class="btn-tabela-edit">✏️</button>
              <button class="btn-tabela-del">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ================= BOTÕES FOOTER ================= -->
    <div class="form-footer">
      <button class="btn-voltar" onclick="location.reload()" style="background-color: #28a745;">← VOLTAR</button>
      <button class="btn-registrar-central" id="vei-btn-cadastrar" style="background-color: #0056f3; color: white;"> CADASTRAR VEÍCULO </button>
      <button class="btn-salvar" id="vei-btn-salvar" style="background-color: #28a745; color: white;"> SALVAR </button>
    </div>
  </div>
  `;
}
