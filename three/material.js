import * as THREE from "three";

// scene 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color("#fff");

// camera 생성
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

// renderer 생성
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry 도형
const geometry = new THREE.TorusGeometry(0.3, 0.15, 16, 40);

// 빛
const pointLight = new THREE.PointLight(0xffffff, 10); // 빛의 색상, 세기
pointLight.position.set(0, 0, 2); //  x,y,z 빛의 위치
scene.add(pointLight); // 씬에 빛 추가

// 재질 입힌 물체
const material1 = new THREE.MeshStandardMaterial({
  color: 0xb0bd00,
  metalness: 0.5,
  roughness: 0.5,
});
const torus1 = new THREE.Mesh(geometry, material1);
torus1.position.x = -2;
scene.add(torus1);

const material2 = new THREE.MeshDepthMaterial({
  color: 0xff8800,
  metalness: 0.5,
  roughness: 0.5,
});
const torus2 = new THREE.Mesh(geometry, material2);
torus2.position.x = -1;
scene.add(torus2);

const material3 = new THREE.MeshPhysicalMaterial({
  color: 0xff8800,
  clearcoat: 1,
});
const torus3 = new THREE.Mesh(geometry, material3);
torus3.position.x = 0;
scene.add(torus3);

const material4 = new THREE.MeshPhongMaterial({
  color: 0xff8800,
  shininess: 120,
});
const torus4 = new THREE.Mesh(geometry, material4);
torus4.position.x = 1;
scene.add(torus4);

const material5 = new THREE.MeshBasicMaterial({ color: 0xff8800 });
const torus5 = new THREE.Mesh(geometry, material5);
torus5.position.x = 2;
scene.add(torus5);

// 애니메이션
function animate() {
  torus1.rotation.y += 0.01;
  torus2.rotation.y += 0.01;
  torus3.rotation.y += 0.01;
  torus4.rotation.y += 0.01;
  torus5.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
