function dúnMenu() {
    document.body.style.gridTemplateAreas = '"header header" "main main" "footer footer"';
    document.getElementById('dún').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}


function taispeáinMenu() {
    document.body.style.gridTemplateAreas = '"header header" "sidebar sidebar" "footer footer"';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('dún').style.display = 'block';
    document.getElementById('dún').style.visibility = 'visible ';
  }