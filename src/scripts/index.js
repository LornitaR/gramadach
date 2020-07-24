// update the HTML here
function taispeáinGachRud() {
  let header = `&nbsp<h3 id='teideal'></h3>&nbsp
  &nbsp<h4 id='fotheideal'></h4>&nbsp`

  let privacyPolicy = `&nbsp<p id='privacy-policy' class='privacy-policy'>This site uses cookies to help understand how our site is being used.  By continuing to browse, you agree to the use of cookies. For more information, or to opt out, see our <a href='privacy-policy.html'>Privacy Policy</a> and <a href='cookies-policy.html'>Cookies Policy</a>.</p>`

  let bord = `<div id="bord" class="table-responsive-sm bord"></div>`

  let eolas = `<div id="eolas"><h4>Welcome!</h4>&nbsp
  <p>This site was created to make Irish grammar easier to learn,
  by compiling a list of important things to know. 
  You can click the menu button (<i class="fa fa-bars" aria-hidden="true"></i>) on the top right
  from any page to see a full list of what this site covers.</p>&nbsp&nbsp

  <p>Please send any feedback, corrections, suggestions, or comments to gramadach.le.lorna@gmail.com</p>
  </div>`;

  
  gachRud = privacyPolicy + header + bord + eolas;
  return gachRud;
}

document.querySelector('main').innerHTML = taispeáinGachRud();
// let bordAimsirLáithreach = aimsirLáithreach();
