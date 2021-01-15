"use strict"

/*
    erstellt mit Hilfe von https://www.w3schools.com/howto/howto_js_sidenav.asp
 */

window.addEventListener("resize", (e) => {
    if(e.target.innerWidth > 1099) {
        closeNav();
    }
})

function openNav (){
    document.getElementById("topbar").style.width = "25vh";
    document.getElementById("topbar").style.paddingLeft = "2vw";
    document.getElementById("topbar").style.borderLeft = "solid rgba(206, 206, 206, 0.384) 1px";
}

function closeNav (){
    document.getElementById("topbar").style.width = "";
    document.getElementById("topbar").style.paddingLeft = "";
    document.getElementById("topbar").style.borderLeft = "";
}
