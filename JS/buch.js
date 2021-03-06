import * as THREE from '../LIBS/three/three.module.js';
import {FBXLoader} from "../LIBS/three/FBXLoader.js";
import {OrbitControls} from "../LIBS/three/OrbitControls.js";

let scene, camera, renderer, container, loader, bleistift;
let w, h;

/**
 * teils entnommen von https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene, https://www.youtube.com/watch?v=1TeMXIWRrqE&t=4s und https://threejs.org/docs/#examples/en/controls/OrbitControls
 */

const sceneContainer = document.querySelector(".mainLand");
function init() {
    w = document.getElementById("buch").offsetWidth;
    h = document.getElementById("buch").offsetHeight;

    container = document.getElementById("buch");
    document.body.appendChild(container)
    scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    let directionalLight = new THREE.DirectionalLight("white", 1);
    scene.add(directionalLight);
    camera.position.x = 300;
    camera.position.y = 0;
    camera.position.z = 300;


    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(w, h);
    renderer.domElement.id = "bleistiftCanvas";
    sceneContainer.appendChild(renderer.domElement);

    let orb = new OrbitControls(camera, renderer.domElement);
    orb.update();

    loader = new FBXLoader();
    loader.load("../LIBS/models/bleistift.fbx", function (obj) {
        bleistift = obj;
        obj.position.y = -180;
        obj.position.x = -20
        obj.rotation.y = 45;
        obj.scale.multiplyScalar(45);
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
    document.getElementById("bleistiftCanvas").addEventListener("mouseover", function () {
        document.getElementById("bleistiftCanvas").style.outline = "black solid 2px";
    });
    document.getElementById("bleistiftCanvas").addEventListener("mouseout", function () {
        document.getElementById("bleistiftCanvas").style.outline = "none";
    });
}
init();