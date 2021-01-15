import * as THREE from '../LIBS/three/three.module.js';
import {FBXLoader} from "../LIBS/three/FBXLoader.js";
import {OrbitControls} from "../LIBS/three/OrbitControls.js";

let scene, camera, renderer, container, loader, flieger;
let w, h;

/**
 * teils entnommen von https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene, https://www.youtube.com/watch?v=1TeMXIWRrqE&t=4s und https://threejs.org/docs/#examples/en/controls/OrbitControls
 */

const sceneContainer = document.querySelector(".mainLand");
function init() {

    w = document.getElementById("papierflieger").offsetWidth;
    h = document.getElementById("papierflieger").offsetHeight;

    container = document.getElementById("papierflieger");
    document.body.appendChild(container);
    scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    let directionalLight = new THREE.DirectionalLight("white", 1);
    scene.add(directionalLight);
    camera.position.x = 180;
    camera.position.y = 100;
    camera.position.z = 100;
    camera.rotation.x = -0.83;
    camera.rotation.y = -0.48;
    camera.rotation.z = -0.48;


    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(w, h);
    renderer.domElement.id = "fliegerCanvas";
    sceneContainer.appendChild(renderer.domElement);


    let orb = new OrbitControls(camera, renderer.domElement);
    orb.update();


    loader = new FBXLoader();
    loader.load("../LIBS/models/flieger.fbx", function (obj) {
        flieger = obj;
        obj.position.y = -10;
        obj.scale.multiplyScalar(14);
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
    document.getElementById("fliegerCanvas").addEventListener("mouseover", function () {
        document.getElementById("fliegerCanvas").style.outline = "black solid 2px";
    });
    document.getElementById("fliegerCanvas").addEventListener("mouseout", function () {
        document.getElementById("fliegerCanvas").style.outline = "none";
    });
}
init();