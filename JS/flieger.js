import * as THREE from '../LIBS/three/three.module.js';
import {FBXLoader} from "../LIBS/three/FBXLoader.js";
import {OrbitControls} from "../LIBS/three/OrbitControls.js";

let scene, camera, renderer, container, loader, flieger;
let w, h;

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
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 180;
    camera.position.y = 0;
    camera.position.z = 290;


    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(w, h);
    sceneContainer.appendChild(renderer.domElement);

    let orb = new OrbitControls(camera, renderer.domElement);
    orb.update();


    loader = new FBXLoader();
    loader.load("../LIBS/models/flieger.fbx", function (obj) {
        flieger = obj;
        obj.position.y = -15;
        obj.position.x = 60;
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

}
init();