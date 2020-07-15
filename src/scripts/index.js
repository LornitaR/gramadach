// update the HTML here
function taispeáinGachRud() {
  let header = `&nbsp<h3 id='teideal'></h3>&nbsp
                &nbsp<h4 id='fotheideal'></h4>&nbsp`
  
  let bord = `<div id="bord" class="table-responsive-sm"></div>`

  
  gachRud = header + bord;
  return gachRud;
}

document.querySelector('main').innerHTML = taispeáinGachRud();
// let bordAimsirLáithreach = aimsirLáithreach();
