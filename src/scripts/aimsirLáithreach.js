function aimsirLáithreach() {
  this.aimsirLáithreachClear();
  let teideal = `An Aimsir Láithreach (The Present Tense)`;
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
                    <td>Deirim</td>
                    <td>Beirim</td>
                    <td>Táim</td>
                    <td>Cloisim</td>
                    <td>Déanaim</td>
                    <td>Faighim</td>
                    <td>Feicim</td>
                    <td>Ithim</td>
                    <td>Tugaim</td>
                    <td>Tagaim</td>
                    <td>Téim</td>
                  </tr>
                  <tr class=" ">
                    <td>You</td>
                    <td>Deir tú</td>
                    <td>Beireann tú</td>
                    <td>Tá tú</td>
                    <td>Cloiseann tú</td>
                    <td>Déanann tú</td>
                    <td>Faigheann tú</td>
                    <td>Feiceann tú</td>
                    <td>Itheann tú</td>
                    <td>Tugann tú</td>
                    <td>Tagann tú</td>
                    <td>Téann tú</td>
                  </tr>
                  <tr class=" ">
                    <td>He / She</td>
                    <td>Deir sé / sí</td>
                    <td>Beireann sé / sí</td>
                    <td>Tá sé / sí</td>
                    <td>Cloiseann sé / sí</td>
                    <td>Déanann sé / sí</td>
                    <td>Faigheann sé / sí</td>
                    <td>Feiceann sé / sí</td>
                    <td>Itheann sé / sí</td>
                    <td>Tugann sé / sí</td>
                    <td>Tagann sé / sí</td>
                    <td>Téann sé / sí</td>
                  </tr>
                  <tr class=" ">
                    <td>We</td>
                    <td>Deirimid</td>
                    <td>Beirimid</td>
                    <td>Táimid</td>
                    <td>Cloisimid</td>
                    <td>Déanaimid</td>
                    <td>Faighimid</td>
                    <td>Feicimid</td>
                    <td>Ithimid</td>
                    <td>Tugaimid</td>
                    <td>Tagaimid</td>
                    <td>Téimid</td>
                  </tr>
                  <tr class=" ">
                    <td>Ye / You(plural)</td>
                    <td>Deir sibh</td>
                    <td>Beireann sibh</td>
                    <td>Tá sibh</td>
                    <td>Cloiseann sibh</td>
                    <td>Déanann sibh</td>
                    <td>Faigheann sibh</td>
                    <td>Feiceann sibh</td>
                    <td>Itheann sibh</td>
                    <td>Tugann sibh</td>
                    <td>Tagann sibh</td>
                    <td>Téann sibh</td>
                  </tr>
                  <tr class=" ">
                    <td>They</td>
                    <td>Deir siad</td>
                    <td>Beireann siad</td>
                    <td>Tá siad</td>
                    <td>Cloiseann siad</td>
                    <td>Déanann siad</td>
                    <td>Faigheann siad</td>
                    <td>Feiceann siad</td>
                    <td>Itheann siad</td>
                    <td>Tugann siad</td>
                    <td>Tagann siad</td>
                    <td>Téann siad</td>
                  </tr>
                  <tr class=" ">
                    <td>Passive (an briathar saor)</td>
                    <td>Deirtear</td>
                    <td>Beirtear</td>
                    <td>Táthar</td>
                    <td>Cloistear</td>
                    <td>Déantar</td>
                    <td>Faightear</td>
                    <td>Feictear</td>
                    <td>Ithear</td>
                    <td>Tugtar</td>
                    <td>Tagtar</td>
                    <td>Téitear</td>
                  </tr>
                  <tr class="table-info">
                    <td>Ceist / Question</td>
                    <td>An ndeir tú?</td>
                    <td>An mbeireann tú?</td>
                    <td>An bhfuil tú?</td>
                    <td>An gcloiseann tú?</td>
                    <td>An ndéanann tú?</td>
                    <td>An bhfaigheann tú?</td>
                    <td>An bhfeiceann tú?</td>
                    <td>An itheann tú?</td>
                    <td>An dtugann tú?</td>
                    <td>An dtagann tú?</td>
                    <td>An dtéann tú?</td>
                  </tr>
                  <tr class="table-danger">
                    <td>Negative / Diúltach</td>
                    <td>Ní deirim</td>
                    <td>Ní beirim</td>
                    <td>Nílim</td>
                    <td>Ní chloisim</td>
                    <td>Ní dhéanaim</td>
                    <td>Ní fhaighim</td>
                    <td>Ní fheicim</td>
                    <td>Ní ithim</td>
                    <td>Ní thugaim</td>
                    <td>Ní thagaim</td>
                    <td>Ní théim</td>
                  </tr>
                  <tr class="table-warning">
                    <td>Negative question</td>
                    <td>Nach ndeir tú?</td>
                    <td>Nach mbeireann tú?</td>
                    <td>Nach bhfuil tú?</td>
                    <td>Nach gcloiseann tú?</td>
                    <td>Nach ndéanann tú?</td>
                    <td>Nach bhfaigheann tú?</td>
                    <td>Nach bhfeiceann tú?</td>
                    <td>Nach itheann tú?</td>
                    <td>Nach thugann tú?</td>
                    <td>Nach dtagann tú?</td>
                    <td>Nach dtéann tú?</td>
                  </tr>
                </tbody>
              </table>`;

  document.querySelector('#bord').innerHTML = bord;
  document.getElementById('teideal').innerHTML = teideal;
  document.getElementById('fotheideal').innerHTML = fotheideal;
}

function aimsirLáithreachClear() {
  document.querySelector('#bord').innerHTML = ""; 
  document.getElementById('teideal').innerHTML = "";
  document.getElementById('fotheideal').innerHTML = "";
  document.getElementById('eolas').innerHTML = "";
}