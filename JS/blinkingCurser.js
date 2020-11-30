blinkCurser();

function blinkCurser() {

    var curser;
    var blinkSpeed = 300;

    if (document.getElementById('curser1').style.opacity == 1) {
        curser = true;
    } else {
        curser = false
    }


    setInterval(() => {
        if (curser) {
            document.getElementById('curser1').style.opacity = 0;
            curser = false;
        } else {
            document.getElementById('curser1').style.opacity = 1;
            curser = false;
        }
    }, blinkSpeed);
}