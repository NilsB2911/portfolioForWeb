window.onload = function () {
    let o = true;
    var intId = setInterval(changeBlink, 500);

    document.getElementById('aboutMe').addEventListener("mouseenter", startBlink);
    document.getElementById('aboutMe').addEventListener("mouseleave", stopBlink);

    function startBlink() {
        intId;
        console.log(o);
    }

    function changeBlink() {
        if (o) {
            document.getElementById('c1').style.opacity = 1;
            o = false;
            console.log(o);
        } else {
            document.getElementById('c1').style.opacity = 0;
            o = true;
            console.log(o);
        }
    };

    function stopBlink() {
        clearInterval(intId);
    };
}



