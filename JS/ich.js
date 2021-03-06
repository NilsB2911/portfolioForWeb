import * as THREE from '../LIBS/three/three.module.js';
import {FBXLoader} from "../LIBS/three/FBXLoader.js";
import {OrbitControls} from "../LIBS/three/OrbitControls.js";

let scene, camera, renderer, container, loader, buch;
let w, h;

/**
 * teils entnommen von https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene, https://www.youtube.com/watch?v=1TeMXIWRrqE&t=4s und https://threejs.org/docs/#examples/en/controls/OrbitControls
 */

const sceneContainer = document.querySelector(".mainLand");
function init() {
    w = document.getElementById("ich").offsetWidth;
    h = document.getElementById("ich").offsetHeight;

    container = document.getElementById("ich");
    document.body.appendChild(container)
    scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    let directionalLight = new THREE.DirectionalLight("white", 1);
    scene.add(directionalLight);
    camera.position.x = 100;
    camera.position.y = 0;
    camera.position.z = 100;


    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(w, h);
    renderer.domElement.id = "buchCanvas";
    sceneContainer.appendChild(renderer.domElement);

    let orb = new OrbitControls(camera, renderer.domElement);
    orb.update();


    loader = new FBXLoader();
    loader.load("../LIBS/models/buch.fbx", function (obj) {
        buch = obj;
        obj.scale.multiplyScalar(14);
        obj.position.y = -20;
        scene.add(obj);
        console.log(loader);
        console.log(renderer);
        console.log(container);
        renderer.render(scene, camera);
    });

    animate();

    function animate() {

        requestAnimationFrame(animate);
        // required if controls.enableDamping or controls.autoRotate are set to true
        orb.update();
        renderer.render(scene, camera);
    }
    document.getElementById("buchCanvas").addEventListener("mouseover", function () {
        document.getElementById("buchCanvas").style.outline = "black solid 2px";
    });
    document.getElementById("buchCanvas").addEventListener("mouseout", function () {
        document.getElementById("buchCanvas").style.outline = "none";
    });
}
init();