function aimsirCaite() {
  this.aimsirCaiteClear();
  let teideal = `An Aimsir Caite (The Past Tense)`;
  let fotheideal = `Na Briathra Neamhrialta (Irregular Verbs)`;
  let bord = `
                <table id="briathra" class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Briathar</th>
                    <th scope="col">Abair</th>
                    <th scope="col">Rug</th>
                    <th scope="col">Bí</th>
                    <th scope="col">Chuala</th>
                    <th scope="col">Déan</th>
                    <th scope="col">Fuair</th>
                    <th scope="col">Chonaic</th>
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
                    <td>Dúirt mé</td>
                    <td>Rug mé</td>
                    <td>Bhí mé</td>
                    <td>Chuala mé</td>
                    <td>Rinne mé</td>
                    <td>Fuair mé</td>
                    <td>Chonaic mé</td>
                    <td>D'ith mé</td>
                    <td>Thug mé</td>
                    <td>Tháinig mé</td>
                    <td>Chuaigh mé</td>
                  </tr>
                  <tr class=" ">
                    <td>You</td>
                    <td>Dúirt tú</td>
                    <td>Rug tú</td>
                    <td>Bhí tú</td>
                    <td>Chuala tú</td>
                    <td>Rinne tú</td>
                    <td>Fuair tú</td>
                    <td>Chonaic tú</td>
                    <td>D'ith tú</td>
                    <td>Thug tú</td>
                    <td>Tháinig tú</td>
                    <td>Chuaigh tú</td>
                  </tr>
                  <tr class=" ">
                    <td>He / She</td>
                    <td>Dúirt sé / sí</td>
                    <td>Rug sé / sí</td>
                    <td>Bhí sé / sí</td>
                    <td>Chuala sé / sí</td>
                    <td>Rinne sé / sí</td>
                    <td>Fuair sé / sí</td>
                    <td>Chonaic sé / sí</td>
                    <td>D'ith sé / sí</td>
                    <td>Thug sé / sí</td>
                    <td>Tháinig sé / sí</td>
                    <td>Chuaigh sé / sí</td>
                  </tr>
                  <tr class=" ">
                    <td>We</td>
                    <td>Dúramar</td>
                    <td>Rugamar</td>
                    <td>Bhíomar</td>
                    <td>Chualamar</td>
                    <td>Rinneamar</td>
                    <td>Fuaireamar</td>
                    <td>Chonaiceamar</td>
                    <td>D'itheamar</td>
                    <td>Thugamar</td>
                    <td>Thángamar</td>
                    <td>Chuamar</td>
                  </tr>
                  <tr class=" ">
                    <td>Ye / You(plural)</td>
                    <td>Dúirt sibh</td>
                    <td>Rug sibh</td>
                    <td>Bhí sibh</td>
                    <td>Chuala sibh</td>
                    <td>Rinne sibh</td>
                    <td>Fuair sibh</td>
                    <td>Chonaic sibh</td>
                    <td>D'ith sibh</td>
                    <td>Thug sibh</td>
                    <td>Tháinig sibh</td>
                    <td>Chuaigh sibh</td>
                  </tr>
                  <tr class=" ">
                    <td>They</td>
                    <td>Dúirt siad</td>
                    <td>Rug siad</td>
                    <td>Bhí siad</td>
                    <td>Chuala siad</td>
                    <td>Rinne siad</td>
                    <td>Fuair siad</td>
                    <td>Chonaic siad</td>
                    <td>D'ith siad</td>
                    <td>Thug siad</td>
                    <td>Tháinig siad</td>
                    <td>Chuaigh siad</td>
                  </tr>
                  <tr class=" ">
                    <td>Passive (an briathar saor)</td>
                    <td>Dúradh</td>
                    <td>Rugadh</td>
                    <td>Bhíothas</td>
                    <td>Chualathas</td>
                    <td>Rinneadh</td>
                    <td>Fuarthas</td>
                    <td>Chonacthas</td>
                    <td>Itheadh</td>
                    <td>Tugadh</td>
                    <td>Thángthas</td>
                    <td>Chuathas</td>
                  </tr>
                  <tr class="table-info">
                    <td>Ceist / Question</td>
                    <td>An ndúirt tú?</td>
                    <td>Ar rug tú?</td>
                    <td>An raibh tú?</td>
                    <td>Ar chuala tú?</td>
                    <td>An ndearna tú?</td>
                    <td>An bhfuair tú?</td>
                    <td>An bhfaca tú?</td>
                    <td>Ar ith tú?</td>
                    <td>Ar thug tú?</td>
                    <td>Ar tháinig tú?</td>
                    <td>An ndeachaigh tú?</td>
                  </tr>
                  <tr class="table-danger">
                    <td>Negative / Diúltach</td>
                    <td>Ní dúirt mé</td>
                    <td>Níor rug mé</td>
                    <td>Ní raibh mé</td>
                    <td>Níor chuala mé</td>
                    <td>Ní dhearna mé</td>
                    <td>Ní bhfuair mé</td>
                    <td>Ní fhaca mé</td>
                    <td>Níor ith mé</td>
                    <td>Níor thug mé</td>
                    <td>Níor tháinig mé</td>
                    <td>Ní dheachaigh mé</td>
                  </tr>
                  <tr class="table-warning">
                    <td>Negative question</td>
                    <td>Nach ndúirt tú?</td>
                    <td>Nár rug tú?</td>
                    <td>Nach raibh tú?</td>
                    <td>Nár chuala tú?</td>
                    <td>Nach ndearna tú?</td>
                    <td>Nach bhfuair tú?</td>
                    <td>Nach bhfaca tú?</td>
                    <td>Nár ith tú?</td>
                    <td>Nár thug tú?</td>
                    <td>Nár tháinig tú?</td>
                    <td>Nach ndeachaigh tú?</td>
                  </tr>
                </tbody>
              </table>`;

  document.querySelector('#bord').innerHTML = bord;
  document.getElementById('teideal').innerHTML = teideal;
  document.getElementById('fotheideal').innerHTML = fotheideal;
}

function aimsirCaiteClear() {
  document.querySelector('#bord').innerHTML = ""; 
  document.getElementById('teideal').innerHTML = "";
  document.getElementById('fotheideal').innerHTML = "";
  document.getElementById('eolas').innerHTML = "";
  document.getElementById('privacy-policy').innerHTML = "";
}