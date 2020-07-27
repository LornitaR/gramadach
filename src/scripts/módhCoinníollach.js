function módhCoinníollach() {
  this.módhCoinníollachClear();
  let teideal = `An Módh Coinníollach (The Conditional Tense)`;
  let fotheideal = `Na Briathra Neamhrialta (Irregular Verbs)`;
  let bord = `
                <table id="briathra" class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Briathar</th>
                    <th scope="col">Abair</th>
                    <th scope="col">Beir</th>
                    <th scope="col">Bí</th>
                    <th scope="col">Clois</th>
                    <th scope="col">Déan</th>
                    <th scope="col">Faigh</th>
                    <th scope="col">Feic</th>
                    <th scope="col">Ith</th>
                    <th scope="col">Tabhair</th>
                    <th scope="col">Tar</th>
                    <th scope="col">Téigh</th>
                  </tr>
                  <tr>
                    <th scope="col">Verb</th>
                    <th scope="col">to say</th>
                    <th scope="col">to catch</th>
                    <th scope="col">to be</th>
                    <th scope="col">to hear</th>
                    <th scope="col">to make / to do</th>
                    <th scope="col">to get</th>
                    <th scope="col">to see</th>
                    <th scope="col">to eat</th>
                    <th scope="col">to give</th>
                    <th scope="col">to come</th>
                    <th scope="col">to go</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" ">
                    <td>I</td>
                    <td>Déarfainn</td>
                    <td>Bhéarfainn</td>
                    <td>Bheinn</td>
                    <td>Cloisfinn</td>
                    <td>Dhéanfainn</td>
                    <td>Gheobhainn</td>
                    <td>D'fheicfinn</td>
                    <td>D'íosfainn</td>
                    <td>Thabharfainn</td>
                    <td>Thiocfainn</td>
                    <td>Rachainn</td>
                  </tr>
                  <tr class=" ">
                    <td>You</td>
                    <td>Déarfá</td>
                    <td>Bhéarfá</td>
                    <td>Bheifeá</td>
                    <td>Chloisfeá</td>
                    <td>Dhéanfá</td>
                    <td>Gheofá</td>
                    <td>D'fheicfeá</td>
                    <td>D'íosfá</td>
                    <td>Thabharfá</td>
                    <td>Thiocfá</td>
                    <td>Rachfá</td>
                  </tr>
                  <tr class=" ">
                    <td>He / She</td>
                    <td>Déarfadh sé / sí</td>
                    <td>Bhéarfadh sé / sí</td>
                    <td>Bheadh sé / sí</td>
                    <td>Chloisfeadh sé / sí</td>
                    <td>Dhéanfadh sé / sí</td>
                    <td>Gheobhadh sé / sí</td>
                    <td>D'fheicfeadh sé / sí</td>
                    <td>D'íosfadh sé / sí</td>
                    <td>Thabharfadh sé / sí</td>
                    <td>Thiocfadh sé / sí</td>
                    <td>Rachadh sé / sí</td>
                  </tr>
                  <tr class=" ">
                    <td>We</td>
                    <td>Déarfaimis</td>
                    <td>Bhéarfaimis</td>
                    <td>Bheimis</td>
                    <td>Chloisfimis</td>
                    <td>Dhéanfaimis</td>
                    <td>Gheobhaimis</td>
                    <td>D'fheicfimis</td>
                    <td>D'íosfamis</td>
                    <td>Thabharfaimis</td>
                    <td>Thiocfaimís</td>
                    <td>Rachaimis</td>
                  </tr>
                  <tr class=" ">
                    <td>Ye / You(plural)</td>
                    <td>Déarfadh sibh</td>
                    <td>Bhéarfadh sibh</td>
                    <td>Bheadh sibh</td>
                    <td>Chloisfeadh sibh</td>
                    <td>Dhéanfadh sibh</td>
                    <td>Gheobhadh sibh</td>
                    <td>D'fheicfeadh sibh</td>
                    <td>D'íosfadh sibh</td>
                    <td>Thabharfadh sibh</td>
                    <td>Thiocfadh sibh</td>
                    <td>Rachadh sibh</td>
                  </tr>
                  <tr class=" ">
                    <td>They</td>
                    <td>Déarfaidís</td>
                    <td>Bhéarfaidís</td>
                    <td>Bheidís</td>
                    <td>Chloisfidís</td>
                    <td>Dhéanfaidís</td>
                    <td>Gheobhaidís</td>
                    <td>D'fheicfidís</td>
                    <td>D'íosfaidís</td>
                    <td>Thabharfaidís</td>
                    <td>Thiocfaidís</td>
                    <td>Rachaidís</td>
                  </tr>
                  <tr class=" ">
                    <td>It is (an briathar saor)</td>
                    <td>Déarfaí</td>
                    <td>Bhéarfaí</td>
                    <td>Bheifí</td>
                    <td>Chloisfí</td>
                    <td>Dhéanfaí</td>
                    <td>Gheofaí</td>
                    <td>D'fheicfí</td>
                    <td>D'íosfaí</td>
                    <td>Thabharfaí</td>
                    <td>Thiocfaí</td>
                    <td>Rachfaí</td>
                  </tr>
                  <tr class="table-info">
                    <td>Ceist / Question</td>
                    <td>An ndéarfá?</td>
                    <td>An mbéarfá?</td>
                    <td>An mbeifeá?</td>
                    <td>An gcloisfeá?</td>
                    <td>An ndéanfá?</td>
                    <td>An bhfaigheá?</td>
                    <td>An bhfeicfeá?</td>
                    <td>An íosfá?</td>
                    <td>An dtabharfá?</td>
                    <td>An dtiocfá?</td>
                    <td>An rachfá?</td>
                  </tr>
                  <tr class="table-danger">
                    <td>Negative / Diúltach</td>
                    <td>Ní déarfainn</td>
                    <td>Ní bhéarfainn</td>
                    <td>Ní bheinn</td>
                    <td>Ní chloisfinn</td>
                    <td>Ní dhéanfainn</td>
                    <td>Ní bhfaighfinn</td>
                    <td>Ní fheicfinn</td>
                    <td>Ní íosfainn</td>
                    <td>Ní thabharfainn</td>
                    <td>Ní thiocfainn</td>
                    <td>Ní rachainn</td>
                  </tr>
                  <tr class="table-warning">
                    <td>Negative question</td>
                    <td>Nach ndéarfá?</td>
                    <td>Nach mbéarfá?</td>
                    <td>Nach mbeifeá?</td>
                    <td>Nach gcloisfeá?</td>
                    <td>Nach ndéanfá?</td>
                    <td>Nach bhfaigheá?</td>
                    <td>Nach bhfeicfeá?</td>
                    <td>Nach íosfá?</td>
                    <td>Nach dtabharfá?</td>
                    <td>Nach dtiocfá?</td>
                    <td>Nach rachfá?</td>
                  </tr>
                </tbody>
              </table>`;

  document.querySelector('#bord').innerHTML = bord;
  document.getElementById('teideal').innerHTML = teideal;
  document.getElementById('fotheideal').innerHTML = fotheideal;
}

function módhCoinníollachClear() {
  document.querySelector('#bord').innerHTML = ""; 
  document.getElementById('teideal').innerHTML = "";
  document.getElementById('fotheideal').innerHTML = "";
  document.getElementById('eolas').innerHTML = "";
  document.getElementById('privacy-policy').innerHTML = "";
}
