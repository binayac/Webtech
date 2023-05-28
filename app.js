const menuBtn = document.getElementById('menuBtn')
    const sideNav = document.getElementById('sideNav')
    const menu = document.getElementById('menu')

    sideNav.style.right = "-250px"

    menuBtn.onclick = function () {
      if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "images/close icon.png";
      }
      else{
        sideNav.style.right = "-250px"
        menu.src = "images/hamburger-icon.png";
      }
    }

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });