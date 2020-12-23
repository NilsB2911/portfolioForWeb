"use strict"

let o = true;

document.addEventListener("DOMContentLoaded", () => {
    const elem = document.getElementById("aboutMe");

    elem.addEventListener("mouseenter", () => {
        let interval = setInterval(changeBlink, 500)

        elem.addEventListener("mouseout", () => {
            console.log("stop")
            clearInterval(interval)
        })
    })
})

function changeBlink() {
    if (o) {
        document.getElementById("c1").style.opacity = 1;
        o = false;
        console.log(o);
    } else {
        document.getElementById("c1").style.opacity = 0;
        o = true;
        console.log(o);
    }

}