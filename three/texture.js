import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 0, 10);

// orbit controls 추가
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 빛 -> 빛보다 물체가 너무 크면 빛이 적용이 안됨.
const pointLight = new THREE.PointLight(0xffffff, 500); // 1이 아니라 150으로 세팅
pointLight.position.set(10, 10, 3);
scene.add(pointLight);

// 빛 위치 헬퍼
const helper = new THREE.PointLightHelper(pointLight);
scene.add(helper);

// 환경광
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // 기본 조명
scene.add(ambientLight);

// 텍스터 추가
const textureLoader = new THREE.TextureLoader();
const textureBaseColor = textureLoader.load(
  "./asset/Pebbles_025_BaseColor.jpg"
);
const textureNormalMap = textureLoader.load("./asset/Pebbles_025_Normal.jpg");
const textureHeightMap = textureLoader.load("./asset/Pebbles_025_Height.png");
const textureRoughnessMap = textureLoader.load(
  "./asset/Pebbles_025_Roughness.jpg"
);

// 물체 추가
const geometry = new THREE.SphereGeometry(1, 32, 32);

const material1 = new THREE.MeshStandardMaterial({
  map: textureBaseColor,
});
const mesh2 = new THREE.Mesh(geometry, material1);
mesh2.position.x = -3;
scene.add(mesh2);

const material2 = new THREE.MeshStandardMaterial({
  map: textureBaseColor,
  normalMap: textureNormalMap,
});
const mesh = new THREE.Mesh(geometry, material2);
scene.add(mesh);

const material3 = new THREE.MeshStandardMaterial({
  map: textureBaseColor,
  normalMap: textureNormalMap,
  displacementMap: textureHeightMap,
  displacementScale: 0.1,
});
const mesh3 = new THREE.Mesh(geometry, material3);
mesh3.position.x = 3;
scene.add(mesh3);

const material4 = new THREE.MeshStandardMaterial({
  map: textureBaseColor,
  normalMap: textureNormalMap,
  displacementMap: textureHeightMap,
  displacementScale: 0.1,
  roughnessMap: textureRoughnessMap,
  roughness: 0.8,
});
const mesh4 = new THREE.Mesh(geometry, material4);
mesh4.position.x = 6;
scene.add(mesh4);

function animate() {
  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

renderer.setAnimationLoop(animate);
