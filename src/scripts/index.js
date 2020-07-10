// update the HTML here
function taispeáinGachRud() {
  let header = `&nbsp<h3>An Aimsir Láithreach (The Present Tense)</h3>&nbsp
                &nbsp<h4>Na Briathra Neamhrialta (Irregular Verbs)</h4>&nbsp`
  
  let bord = `<div id="bord" class="table-responsive-sm"></div>`

  
  gachRud = header + bord;
  return gachRud;
}

document.querySelector('main').innerHTML = taispeáinGachRud();
let bordAimsirLáithreach = aimsirLáithreach();
