import * as THREE from '../LIBS/three/three.module.js';
import {OBJLoader} from "../LIBS/three/OBJLoader.js";
import {OrbitControls} from "../LIBS/three/OrbitControls.js";

let scene, camera, renderer, container, loader, harrie;
let w, h;
let wp = new THREE.Vector3();

/**
 * teils entnommen von https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene, https://www.youtube.com/watch?v=1TeMXIWRrqE&t=4s und https://threejs.org/docs/#examples/en/controls/OrbitControls
 */

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
    let directionalLight = new THREE.DirectionalLight("white", 2);
    scene.add(directionalLight);
    camera.position.x = 600;
    camera.position.y = 100;
    camera.position.z = 600;


    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(w, h);
    renderer.domElement.id = "harrieCanvas";
    sceneContainer.appendChild(renderer.domElement);

    let orb = new OrbitControls(camera, renderer.domElement);
    orb.update();


    loader = new OBJLoader();
    loader.load("../LIBS/models/harrie.obj", function (obj) {
        harrie = obj;
        obj.scale.multiplyScalar(15);
        obj.translateX(80);
        obj.translateY(-150);
        scene.add(obj);
        obj.getWorldPosition(wp);
        renderer.render(scene, camera);
    });

    animate();

    function animate() {

        requestAnimationFrame(animate);

        // required if controls.enableDamping or controls.autoRotate are set to true
        orb.update();
        document.getElementById("harrieCanvas").addEventListener("mouseover", function () {
            document.getElementById("harrieCanvas").style.outline = "black solid 2px";
        });
        document.getElementById("harrieCanvas").addEventListener("mouseout", function () {
            document.getElementById("harrieCanvas").style.outline = "none";
        });
        renderer.render(scene, camera);
    }
}
init();