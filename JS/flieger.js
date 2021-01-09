import * as THREE from '../LIBS/three/three.module.js';
import {FBXLoader} from "../LIBS/three/FBXLoader.js";
import {OrbitControls} from "../LIBS/three/OrbitControls.js";

let scene, camera, renderer, container, loader;
let w, h;

const sceneContainer = document.querySelector(".mainLand");
function init() {
    w = document.getElementById("papierflieger").offsetWidth;
    h = document.getElementById("papierflieger").offsetHeight;

    container = document.getElementById("papierflieger");
    document.body.appendChild(container)
    scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //let dirlight = new THREE.DirectionalLight("white", 5);
    let hlight = new THREE.AmbientLight('white', 100);
    scene.add(hlight);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 800;
    camera.position.y = 60;
    camera.position.z = 1000;


    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(w, h);
    sceneContainer.appendChild(renderer.domElement);

    let orb = new OrbitControls(camera, renderer.domElement);
    orb.update();


    loader = new FBXLoader();
    loader.load("../LIBS/models/flieger.fbx", function (obj) {
        obj.scale.multiplyScalar(20);
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

}
init();