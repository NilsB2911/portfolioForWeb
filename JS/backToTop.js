window.onload = function () {
    document.getElementById("backToTop").style.opacity = 0;
}

document.getElementById("backToTop").onclick = function () {
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'})
};

window.addEventListener('scroll', function() {
    if(window.scrollY < 399) {
    document.getElementById("backToTop").style.opacity = 0;
    } else {
        document.getElementById("backToTop").style.opacity = 100;
    }
});