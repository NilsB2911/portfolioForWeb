window.onload = function () {
    let o = true;

    document.getElementById('aboutMe').onmouseover = function () {
        o = true;
        setInterval(changeBlink, 500);
        console.log(o)
    };

    /*document.getElementById("work").onmouseover = function () {
        o = true;
        setInterval(changeBlink, 500);
        console.log(o)
    };

    document.getElementById("connect").onmouseover =  function () {
        o = true;
        setInterval(changeBlink, 500);
        console.log(o);
    };*/

    function changeBlink() {
        if (o) {
            document.getElementById('c1').style.opacity = 1;
            o = false;
            console.log(o)
        } else {
            document.getElementById('c1').style.opacity = 0;
            o = true;
            console.log(o)
        }
    };
};


