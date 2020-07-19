// update the HTML here
function taispeáinGachRud() {
  let header = `&nbsp<h3 id='teideal'></h3>&nbsp
                &nbsp<h4 id='fotheideal'></h4>&nbsp`
  
  let bord = `<div id="bord" class="table-responsive-sm bord"></div>`

  let eolas = `<div id="eolas"><h4>Welcome!</h4>&nbsp
  <p>This site was created to make Irish grammar easier to learn,
  by compiling a list of important things to know. 
  You can click the menu button (<i class="fa fa-bars" aria-hidden="true"></i>) on the top right
  from any page to see a full list of what this site covers.</p>&nbsp&nbsp

  <p>Please send any feedback, corrections, suggestions, or comments to gramadach.le.lorna@gmail.com</p>
  </div>`;

  
  gachRud = header + bord + eolas;
  return gachRud;
}

document.querySelector('main').innerHTML = taispeáinGachRud();
// let bordAimsirLáithreach = aimsirLáithreach();
