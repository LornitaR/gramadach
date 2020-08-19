// update the HTML here
function taispeáinGachRud() {

  let header = `<h3 id='teideal'>
  <label id='privacy-policy' class='privacy-policy'>
    This site uses cookies to help understand how our site is being used. 
    By continuing to browse, you agree to the use of cookies. 
    For more information, or to opt out, see our <a href='privacy-policy.html'>Privacy Policy</a> 
    and <a href='cookies-policy.html'>Cookies Policy</a>.</label>
  </h3><h4 id='fotheideal'></h4>`

  
  let bord = `<div id="bord" class="table-responsive-sm bord"></div>`

  let eolas = `<div id="eolas"><h3>Welcome!</h3>&nbsp
  <p>This site was created to make Irish grammar easier to learn,
  by compiling a list of important things to know.</p>&nbsp&nbsp

  <p>Please send any feedback, corrections, suggestions, or comments to gramadach.le.lorna@gmail.com</p>
  </div>`;

  
  gachRud =  header + bord + eolas;
  document.getElementById('content').innerHTML = gachRud;
  return gachRud;
}

document.getElementById('content').innerHTML = taispeáinGachRud();

function taispeáinMenu() {
  document.getElementsByTagName("BODY")[0].style.gridTemplateAreas = '"header header" "sidebar sidebar" "footer footer"';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('dún').style.visibility = 'visible';
}