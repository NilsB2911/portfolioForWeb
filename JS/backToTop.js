document.getElementById("backToTop").onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

window.addEventListener('scroll', function() {
    if(window.scrollY < 399) {
    document.getElementById("backToTop").style.opacity = 0;
    } else {
        document.getElementById("backToTop").style.opacity = 100;
    }
});