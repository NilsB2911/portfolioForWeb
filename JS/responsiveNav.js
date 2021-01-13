function openNav (){
    document.getElementById("topbar").style.width = "25vh";
    //document.getElementById("topbar").style.padding-left= "5vw";
    //document.getElementById("topbar").style.border-left = "solid rgba(206, 206, 206, 0.384) 1px";
}
document.getElementById("topbar").addEventListener("resize", function(){
    let w = document.getElementById("topbar").offsetWidth;
    if (w >= 1020){
        document.getElementById("topbar").style.width = "9vh";
    }
})
function closeNav (){
    document.getElementById("topbar").style.width = "0vh";
}