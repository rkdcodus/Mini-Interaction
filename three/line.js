import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100); // 카메라를 뒤로 이동
camera.lookAt(0, 0, 0); // 장면 중심 바라보기

const scene = new THREE.Scene();

// 파란색 선 재질
const material = new THREE.LineBasicMaterial({
  color: 0x0000ff,
  linewidth: 10,
});

const points = [];
points.push(new THREE.Vector3(-8, 0, 0)); // 시작점
points.push(new THREE.Vector3(0, 10, 0)); // 중간점
points.push(new THREE.Vector3(8, 0, 0)); // 끝점
points.push(new THREE.Vector3(-8, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);
