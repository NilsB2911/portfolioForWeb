import * as THREE from '../LIBS/three/three.module.js';
import {OBJLoader} from "../LIBS/three/OBJLoader.js";
import {OrbitControls} from "../LIBS/three/OrbitControls.js";

let scene, camera, renderer, container, loader, harrie;
let w, h;
let wp = new THREE.Vector3();

document.getElementById("scene").addEventListener("resize", function () {
    w = document.getElementById("scene").offsetWidth;
    h = document.getElementById("scene").offsetHeight;
})

const sceneContainer = document.querySelector("#threejsview");
function init() {
    w = document.getElementById("scene").offsetWidth;
    h = document.getElementById("scene").offsetHeight;

    container = document.getElementById("scene");
    document.body.appendChild(container)
    scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 1000);
    let dirlight = new THREE.DirectionalLight("white", 2);
    //let hlight = new THREE.AmbientLight('white', 100);
    scene.add(dirlight);
    //camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 600;
    camera.position.y = 100;
    camera.position.z = 600;


    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(w, h);
    sceneContainer.appendChild(renderer.domElement);

    let orb = new OrbitControls(camera, renderer.domElement);
    orb.update();


    loader = new OBJLoader();
    loader.load("../LIBS/models/harrie.obj", function (obj) {
        harrie = obj;
        obj.scale.multiplyScalar(15);
        obj.translateY(-150);
        scene.add(obj);
        obj.getWorldPosition(wp);
        renderer.render(scene, camera);
    });

    animate();

    function animate() {
        /**
         * Entnommen der Dokumentation von three js
         */
        requestAnimationFrame(animate);

        // required if controls.enableDamping or controls.autoRotate are set to true
        orb.update();

        renderer.render(scene, camera);
    }
}
init();