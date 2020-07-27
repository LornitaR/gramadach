function aimsirFháistineach() {
  this.aimsirFháistineachClear();
  let teideal = `An Aimsir Fháistineach (The Future Tense)`;
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
                    <td>Déarfaidh mé</td>
                    <td>Béarfaidh mé</td>
                    <td>Beidh mé</td>
                    <td>Cloisfidh mé</td>
                    <td>Déanfaidh mé</td>
                    <td>Gheobhaidh mé</td>
                    <td>Feicfidh mé</td>
                    <td>Íosfaidh mé</td>
                    <td>Tabharfaidh mé</td>
                    <td>Tiocfaidh mé</td>
                    <td>Rachaidh mé</td>
                  </tr>
                  <tr class=" ">
                    <td>You</td>
                    <td>Déarfaidh tú</td>
                    <td>Béarfaidh tú</td>
                    <td>Beidh tú</td>
                    <td>Cloisfidh tú</td>
                    <td>Déanfaidh tú</td>
                    <td>Gheobhaidh tú</td>
                    <td>Feicfidh tú</td>
                    <td>Íosfaidh tú</td>
                    <td>Tabharfaidh tú</td>
                    <td>Tiocfaidh tú</td>
                    <td>Rachaidh tú</td>
                  </tr>
                  <tr class=" ">
                    <td>He / She</td>
                    <td>Déarfaidh sé / sí</td>
                    <td>Béarfaidh sé / sí</td>
                    <td>Beidh sé / sí</td>
                    <td>Cloisfidh sé / sí</td>
                    <td>Déanfaidh sé / sí</td>
                    <td>Gheobhaidh sé / sí</td>
                    <td>Feicfidh sé / sí</td>
                    <td>Íosfaidh sé / sí</td>
                    <td>Tabharfaidh sé / sí</td>
                    <td>Tiocfaidh sé / sí</td>
                    <td>Rachaidh sé / sí</td>
                  </tr>
                  <tr class=" ">
                    <td>We</td>
                    <td>Déarfaimid</td>
                    <td>Béarfaimid</td>
                    <td>Beimid</td>
                    <td>Cloisfimid</td>
                    <td>Déanfaimid</td>
                    <td>Gheobhaimid</td>
                    <td>Feicfimid</td>
                    <td>Íosfaimid</td>
                    <td>Tabharfaimid</td>
                    <td>Tiocfaimid</td>
                    <td>Rachaimid</td>
                  </tr>
                  <tr class=" ">
                    <td>Ye / You(plural)</td>
                    <td>Déarfaidh sibh</td>
                    <td>Béarfaidh sibh</td>
                    <td>Beidh sibh</td>
                    <td>Cloisfidh sibh</td>
                    <td>Déanfaidh sibh</td>
                    <td>Gheobhaidh sibh</td>
                    <td>Feicfidh sibh</td>
                    <td>Íosfaidh sibh</td>
                    <td>Tabharfaidh sibh</td>
                    <td>Tiocfaidh sibh</td>
                    <td>Rachaidh sibh</td>
                  </tr>
                  <tr class=" ">
                    <td>They</td>
                    <td>Déarfaidh siad</td>
                    <td>Béarfaidh siad</td>
                    <td>Beidh siad</td>
                    <td>Cloisfidh siad</td>
                    <td>Déanfaidh siad</td>
                    <td>Gheobhaidh siad</td>
                    <td>Feicfidh siad</td>
                    <td>Íosfaidh siad</td>
                    <td>Tabharfaidh siad</td>
                    <td>Tiocfaidh siad</td>
                    <td>Rachaidh siad</td>
                  </tr>
                  <tr class=" ">
                    <td>Passive (an briathar saor)</td>
                    <td>Déarfar</td>
                    <td>Béarfar</td>
                    <td>Beifear</td>
                    <td>Cloisfear</td>
                    <td>Déanfar</td>
                    <td>Gheofar</td>
                    <td>Feicfear</td>
                    <td>Íosfar</td>
                    <td>Tabharfar</td>
                    <td>Tiocfar</td>
                    <td>Rachfar</td>
                  </tr>
                  <tr class="table-info">
                    <td>Ceist / Question</td>
                    <td>An ndéarfaidh tú?</td>
                    <td>An mbéarfaidh tú?</td>
                    <td>An mbeidh tú?</td>
                    <td>An gcloisfidh tú?</td>
                    <td>An ndéanfaidh tú?</td>
                    <td>An bhfaighidh tú?</td>
                    <td>An bhfeicfidh tú?</td>
                    <td>An íosfaidh tú?</td>
                    <td>An dtabharfaidh tú?</td>
                    <td>An dtiocfaidh tú?</td>
                    <td>An rachaidh tú?</td>
                  </tr>
                  <tr class="table-danger">
                    <td>Negative / Diúltach</td>
                    <td>Ní déarfaidh mé</td>
                    <td>Ní bhéarfaidh mé</td>
                    <td>Ní bheidh mé</td>
                    <td>Ní chloisfidh mé</td>
                    <td>Ní dhéanfaidh mé</td>
                    <td>Ní bhfaighidh mé</td>
                    <td>Ní fheicfidh mé</td>
                    <td>Ní íosfaidh mé</td>
                    <td>Ní thabharfaidh mé</td>
                    <td>Ní thiocfaidh mé</td>
                    <td>Ní rachaidh mé</td>
                  </tr>
                  <tr class="table-warning">
                    <td>Negative question</td>
                    <td>Nach ndéarfaidh tú?</td>
                    <td>Nach mbéarfaidh tú?</td>
                    <td>Nach mbeidh tú?</td>
                    <td>Nach gcloisfidh tú?</td>
                    <td>Nach ndéanfaidh tú?</td>
                    <td>Nach bhfaighidh tú?</td>
                    <td>Nach bhfeicfidh tú?</td>
                    <td>Nach íosfaidh tú?</td>
                    <td>Nach dtabharfaidh tú?</td>
                    <td>Nach dtiocfaidh tú?</td>
                    <td>Nach rachaidh tú?</td>
                  </tr>
                </tbody>
              </table>`;

  document.querySelector('#bord').innerHTML = bord;
  document.getElementById('teideal').innerHTML = teideal;
  document.getElementById('teideal').outerHTML;
  document.getElementById('fotheideal').innerHTML = fotheideal;
}

function aimsirFháistineachClear() {
  document.querySelector('#bord').innerHTML = ""; 
  document.getElementById('teideal').innerHTML = "";
  document.getElementById('fotheideal').innerHTML = "";
  document.getElementById('eolas').innerHTML = "";
}