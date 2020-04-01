$(document).ready(function(){
  // prendo l'elemento bar hamburger da cliccare
  var barHamburger = $(".bar-hamburger");
  // prendo l'elemento su cui eseguire l'azione, menu Hamburger
  var menuHamburger = $(".menu-hambuger")
  // quando lo clicco deve accadere qualcosa
  barHamburger.click( function(){
    menuHamburger.show()
  })
});
