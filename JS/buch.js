import * as THREE from '../LIBS/three/three.module.js';
import {FBXLoader} from "../LIBS/three/FBXLoader.js";
import {OrbitControls} from "../LIBS/three/OrbitControls.js";

let scene, camera, renderer, container, loader, lambert;
let w, h;

const sceneContainer = document.querySelector(".mainLand");
function init() {
    w = document.getElementById("buch").offsetWidth;
    h = document.getElementById("buch").offsetHeight;

    container = document.getElementById("buch");
    document.body.appendChild(container)
    scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    //let dirlight = new THREE.DirectionalLight("white", 5);
    let hlight = new THREE.AmbientLight('white', 100);
    scene.add(hlight);
    camera.position.x = 180;
    camera.position.y = 0;
    camera.position.z = 290;


    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(w, h);
    sceneContainer.appendChild(renderer.domElement);

    let orb = new OrbitControls(camera, renderer.domElement);
    orb.update();
    lambert = new THREE.MeshLambertMaterial({reflectivity: 0, aoMapIntensity: 0, color: "white", refractionRatio: 0, emissiveIntensity: 0})

    loader = new FBXLoader();
    loader.load("../LIBS/models/flieger.fbx", function (obj) {
        obj.material = lambert;
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