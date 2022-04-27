import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";

// Setup
THREE.ImageUtils.crossOrigin = "";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.setZ(30);
camera.position.setX(-3);

//renderer.autoClear = false;

// Sun
const sunTexture = new THREE.TextureLoader().load();
const sun = new THREE.Mesh(new THREE.SphereGeometry(40, 32, 32), new THREE.MeshStandardMaterial({ map: sunTexture }));
scene.add(sun);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(1000, 50);
scene.add(lightHelper, gridHelper);

// Mouse controls
const controls = new OrbitControls(camera, renderer.domElement);

// Gonna use this later for asteriod belt and stuff
//const stars = () => {
//const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//const star = new THREE.Mesh(geometry, material);

//const [x, y, z] = Array(3)
//.fill()
//.map(() => THREE.MathUtils.randFloatSpread(100));

//star.position.set(x, y, z);
//scene.add(star);
//};
//Array(200).fill().forEach(stars);

// Background
//const loader = new THREE.TextureLoader();
//const background = loader.load("../assets/stars.jpg");
//scene.background = background;

// Create all planets and add them to the scene
function createPlanets() {
	// mercury
	const mercuryGeo = new THREE.SphereGeometry(2, 32, 32);
	const mercuryMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const mercury = new THREE.Mesh(mercuryGeo, mercuryMaterial);
	mercury.position.set(0, 0, 60);
	scene.add(mercury);

	// venus
	const venusGeo = new THREE.SphereGeometry(4, 32, 32);
	const venusMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const venus = new THREE.Mesh(venusGeo, venusMaterial);
	venus.position.set(0, 0, 80);
	scene.add(venus);

	// earth
	const earthGeo = new THREE.SphereGeometry(4, 32, 32);
	const earthMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const earth = new THREE.Mesh(earthGeo, earthMaterial);
	earth.position.set(0, 0, 100);
	scene.add(earth);

	// mars
	const marsGeo = new THREE.SphereGeometry(3, 32, 32);
	const marsMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const mars = new THREE.Mesh(marsGeo, marsMaterial);
	mars.position.set(0, 0, 120);
	scene.add(mars);

	// jupiter
	const jupiterGeo = new THREE.SphereGeometry(10, 32, 32);
	const jupiterMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const jupiter = new THREE.Mesh(jupiterGeo, jupiterMaterial);
	jupiter.position.set(0, 0, 160);
	scene.add(jupiter);

	// saturn
	const saturnGeo = new THREE.SphereGeometry(9.5, 32, 32);
	const saturnMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const saturn = new THREE.Mesh(saturnGeo, saturnMaterial);
	saturn.position.set(0, 0, 200);
	scene.add(saturn);

	// uranus
	const uranusGeo = new THREE.SphereGeometry(6, 32, 32);
	const uranusMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const uranus = new THREE.Mesh(uranusGeo, uranusMaterial);
	uranus.position.set(0, 0, 240);
	scene.add(uranus);

	// neptune
	const neptuneGeo = new THREE.SphereGeometry(6, 32, 32);
	const neptuneMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const neptune = new THREE.Mesh(neptuneGeo, neptuneMaterial);
	neptune.position.set(0, 0, 280);
	scene.add(neptune);

	// pluto
	const plutoGeo = new THREE.SphereGeometry(2, 32, 32);
	const plutoMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
	const pluto = new THREE.Mesh(plutoGeo, plutoMaterial);
	pluto.position.set(0, 0, 340);
	scene.add(pluto);

	// saturn ring
	const saturnRingGeo = new THREE.RingGeometry(15, 20, 32);
	const saturnRingMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
	const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMaterial);
	saturnRing.rotateX(45);
	saturnRing.position.set(0, 0, 200);
	scene.add(saturnRing);

	// uranus ring
	const uranusRingGeo = new THREE.RingGeometry(10, 8, 32);
	const uranusRingMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
	const uranusRing = new THREE.Mesh(uranusRingGeo, uranusRingMaterial);
	uranusRing.position.set(0, 0, 240);
	scene.add(uranusRing);
}
createPlanets();

const animate = () => {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
};

function Background() {
	animate();
}

export default Background;
