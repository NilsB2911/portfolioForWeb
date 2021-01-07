let dr;
let zoom = 1;
let steps = 0.01;

function preload () {
    dr = loadModel('../p5/harrie.obj')
}

function setup() {
    let w = document.getElementById('scene').offsetWidth;
    let h = document.getElementById('scene').offsetHeight;
    console.log(w);
    console.log(h);
    var p5canvas = createCanvas(w, h, WEBGL);
    p5canvas.parent('scene');
}

function draw() {
    background('white');
    model(dr);
}

function mouseWheel (event) {
    zoom += steps * event.delta;
}