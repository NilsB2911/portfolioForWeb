let dr;
let zoom = 1;
let steps = 0.01;
let w;
let h;

function preload () {
    dr = loadModel('../LIBS/p5/harrie.obj')
}

function setup() {
    w = document.getElementById('scene').offsetWidth;
    h = document.getElementById('scene').offsetHeight;
    console.log(w);
    console.log(h);
    var p5canvas = createCanvas(w, h, WEBGL);
    p5canvas.parent('scene');
}

function draw() {
    background('white');
    ambientLight(100);
    directionalLight(255, 255, 255, 0, 0, 1);
    model(dr);
    dr.position(w/2, h/2);
}