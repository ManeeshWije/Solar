import { useState, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const loader = new THREE.TextureLoader();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.setZ(400);
camera.position.setX(200);
camera.position.setY(20);

// set background image
const bg = loader.load(require("../assets/stars.jpg"));
scene.background = bg;

// Lights
const pointLight = new THREE.PointLight(0xffffff, 2, 0, 2);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
pointLight.position.set(0, 0, 0);
scene.add(pointLight, ambientLight);

// Helpers
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(1000, 50);
// scene.add(gridHelper, lightHelper);

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

// Create all planets and add them to the scene
// sun
const sunTexture = loader.load(require("../assets/sun.jpeg"));
const sun = new THREE.Mesh(new THREE.SphereGeometry(40, 32, 32), new THREE.MeshBasicMaterial({ map: sunTexture }));
scene.add(sun);

// mercury
const mercuryGeo = new THREE.SphereGeometry(2, 32, 32);
const mercuryTexture = loader.load(require("../assets/mercury.jpeg"));
const mercuryMaterial = new THREE.MeshStandardMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeo, mercuryMaterial);
mercury.position.set(0, 0, 60);
scene.add(mercury);

// venus
const venusGeo = new THREE.SphereGeometry(4, 32, 32);
const venusTexture = loader.load(require("../assets/venus.jpeg"));
const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeo, venusMaterial);
venus.position.set(0, 0, 80);
scene.add(venus);

// earth
const earthGeo = new THREE.SphereGeometry(4, 32, 32);
const earthTexture = loader.load(require("../assets/earth.jpeg"));
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeo, earthMaterial);
earth.position.set(0, 0, 100);
earth.rotateX(0.2);
scene.add(earth);

// mars
const marsGeo = new THREE.SphereGeometry(3, 32, 32);
const marsTexture = loader.load(require("../assets/mars.jpeg"));
const marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeo, marsMaterial);
mars.position.set(0, 0, 120);
scene.add(mars);

// jupiter
const jupiterGeo = new THREE.SphereGeometry(10, 32, 32);
const jupiterTexture = loader.load(require("../assets/jupiter.jpeg"));
const jupiterMaterial = new THREE.MeshStandardMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeo, jupiterMaterial);
jupiter.position.set(0, 0, 160);
scene.add(jupiter);

// saturn
const saturnGeo = new THREE.SphereGeometry(9.5, 32, 32);
const saturnTexture = loader.load(require("../assets/saturn.jpeg"));
const saturnMaterial = new THREE.MeshStandardMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeo, saturnMaterial);
saturn.position.set(0, 0, 200);
scene.add(saturn);

// uranus
const uranusGeo = new THREE.SphereGeometry(6, 32, 32);
const uranusTexture = loader.load(require("../assets/uranus.jpeg"));
const uranusMaterial = new THREE.MeshStandardMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeo, uranusMaterial);
uranus.position.set(0, 0, 240);
scene.add(uranus);

// neptune
const neptuneGeo = new THREE.SphereGeometry(6, 32, 32);
const neptuneTexture = loader.load(require("../assets/neptune.jpeg"));
const neptuneMaterial = new THREE.MeshStandardMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeo, neptuneMaterial);
neptune.position.set(0, 0, 280);
scene.add(neptune);

// pluto
const plutoGeo = new THREE.SphereGeometry(2, 32, 32);
const plutoTexture = loader.load(require("../assets/pluto.jpeg"));
const plutoMaterial = new THREE.MeshStandardMaterial({ map: plutoTexture });
const pluto = new THREE.Mesh(plutoGeo, plutoMaterial);
pluto.position.set(0, 0, 340);
scene.add(pluto);

// saturn ring
const saturnRingGeo = new THREE.RingGeometry(15, 20, 32);
const saturnRingTexture = loader.load(require("../assets/saturn-ring.png"));
const saturnRingMaterial = new THREE.MeshStandardMaterial({
	map: saturnRingTexture,
	side: THREE.DoubleSide,
	transparent: true,
	opacity: 0.7,
});
const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMaterial);
saturnRing.rotateX(45);
saturnRing.position.set(0, 0, 200);
scene.add(saturnRing);

// all movement stuff done here
function Background() {
	renderer.render(scene, camera);
	const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);
	// relative rotations
	sun.rotation.y += EARTH_YEAR * 0.25;
	mercury.rotation.y += EARTH_YEAR * 0.5;
	venus.rotation.y -= EARTH_YEAR * 0.1;
	earth.rotation.y += EARTH_YEAR;
	mars.rotation.y += EARTH_YEAR * 1.05;
	jupiter.rotation.y += EARTH_YEAR * 4;
	saturn.rotation.y += EARTH_YEAR * 4;
	uranus.rotation.y -= EARTH_YEAR * 3;
	neptune.rotation.y += EARTH_YEAR * 3;
	pluto.rotation.y += EARTH_YEAR * 0.75;

	// relative orbits (need to fix)
	// mercury.position.x = Math.sin(Date.now()) * 60;
	// mercury.position.z = Math.cos(Date.now()) * 60;

	// venus.position.x = Math.sin(Date.now()) * 80;
	// venus.position.z = Math.cos(Date.now()) * 80;

	// earth.position.x = Math.sin(Date.now()) * 100;
	// earth.position.z = Math.cos(Date.now()) * 100;

	// mars.position.x = Math.sin(Date.now()) * 120;
	// mars.position.z = Math.cos(Date.now()) * 120;
	requestAnimationFrame(Background);
}
export default Background;
