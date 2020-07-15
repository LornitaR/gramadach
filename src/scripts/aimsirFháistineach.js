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
                    <td>I</th>
                    <td>Déarfaidh mé</th>
                    <td>Beirim</th>
                    <td>Táim</th>
                    <td>Cloisim</th>
                    <td>Déanaim</th>
                    <td>Faighim</th>
                    <td>Feicim</th>
                    <td>Ithim</th>
                    <td>Tugaim</th>
                    <td>Tagaim</th>
                    <td>Téim</th>
                  </tr>
                  <tr class=" ">
                    <td>You</th>
                    <td>Déarfaidh tú</th>
                    <td>Beireann tú</th>
                    <td>Tá tú</th>
                    <td>Cloiseann tú</th>
                    <td>Déanann tú</th>
                    <td>Faighean tú</th>
                    <td>Feiceann tú</th>
                    <td>Itheann tú</th>
                    <td>Tugann tú</th>
                    <td>Tagann tú</th>
                    <td>Téann tú</th>
                  </tr>
                  <tr class=" ">
                    <td>He / She</th>
                    <td>Déarfaidh sé / sí</th>
                    <td>Beireann sé / sí</th>
                    <td>Tá sé / sí</th>
                    <td>Cloiseann sé / sí</th>
                    <td>Déanann sé / sí</th>
                    <td>Faighean sé / sí</th>
                    <td>Feiceann sé / sí</th>
                    <td>Itheann sé / sí</th>
                    <td>Tugann sé / sí</th>
                    <td>Tagann sé / sí</th>
                    <td>Téann sé / sí</th>
                  </tr>
                  <tr class=" ">
                    <td>We</th>
                    <td>Déarfaimid</th>
                    <td>Beirimid</th>
                    <td>Táimid</th>
                    <td>Cloisimid</th>
                    <td>Déanaimid</th>
                    <td>Faighimid</th>
                    <td>Feicimid</th>
                    <td>Ithimid</th>
                    <td>Tugaimid</th>
                    <td>Tagaimid</th>
                    <td>Téimid</th>
                  </tr>
                  <tr class=" ">
                    <td>Ye / You(plural)</td>
                    <td>Déarfaidh sibh</th>
                    <td>Beireann sibh</th>
                    <td>Tá sibh</th>
                    <td>Cloiseann sibh</th>
                    <td>Déanann sibh</th>
                    <td>Faighean sibh</th>
                    <td>Feiceann sibh</th>
                    <td>Itheann sibh</th>
                    <td>Tugann sibh</th>
                    <td>Tagann sibh</th>
                    <td>Téann sibh</th>
                  </tr>
                  <tr class=" ">
                    <td>They</td>
                    <td>Déarfaidh siad</th>
                    <td>Beireann siad</th>
                    <td>Tá siad</th>
                    <td>Cloiseann siad</th>
                    <td>Déanann siad</th>
                    <td>Faighean siad</th>
                    <td>Feiceann siad</th>
                    <td>Itheann siad</th>
                    <td>Tugann siad</th>
                    <td>Tagann siad</th>
                    <td>Téann siad</th>
                  </tr>
                  <tr class=" ">
                    <td>It is (an briathar saor)</td>
                    <td>Déarfar</th>
                    <td>Beirtar</th>
                    <td>Táthar</th>
                    <td>Cloistear</th>
                    <td>Déantar</th>
                    <td>Faightear</th>
                    <td>Feictear</th>
                    <td>Ithear</th>
                    <td>Tugtar</th>
                    <td>Tagtar</th>
                    <td>Téitear</th>
                  </tr>
                  <tr class="table-info">
                    <td>Ceist / Question</td>
                    <td>An nDéarfaidh tú?</td>
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
                    <td>Ní déarfaidh mé</td>
                    <td>Ní beirim</td>
                    <td>Nílim</td>
                    <td>Ní chloisim</td>
                    <td>Ní dhéanaim</td>
                    <td>Ní fhaighim</td>
                    <td>Ní fheicim?</td>
                    <td>Ní ithim</td>
                    <td>Ní thugaim</td>
                    <td>Ní thagaim</td>
                    <td>Ní théim</td>
                  </tr>
                  <tr class="table-warning">
                    <td>Negative question</td>
                    <td>Nach nDéarfaidh tú?</td>
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

function aimsirFháistineachClear() {
  document.querySelector('#bord').innerHTML = ""; 
  document.getElementById('teideal').innerHTML = "";
  document.getElementById('fotheideal').innerHTML = "";
}