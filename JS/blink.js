"use strict"

let o = true;
let content;
let span;

//Rückgabe der ID über der man hovert und jeweils passender span
document.addEventListener("mouseover", function (hover) {
    let targetHover = hover.target;
    content = targetHover.id;

    switch (content) {
        case "aboutMe":
            span = "c1";
            console.log(content);
            console.log(span);
            break;
        case "work":
            span = "c2";
            console.log(content);
            console.log(span);
            break;
        case "connect":
            span = "c3";
            console.log(content);
            console.log(span);
            break;
        default:
            span = null;
            break;
    }
    if(span != null) {
        init();
    }
})

function init() {
        let elem = document.getElementById(content);

        elem.addEventListener("mouseenter", () => {
            let interval = setInterval(changeBlink, 500);

            elem.addEventListener("mouseout", () => {
                console.log("stop");
                clearInterval(interval);
                document.getElementById(span).style.color = "white";
            })
        })

    function changeBlink() {
        if (o) {
            document.getElementById(span).style.color = "black";
            o = false;
        } else {
            document.getElementById(span).style.color = "white";
            o = true;
        }

    }
}

