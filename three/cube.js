import * as THREE from "three";

// Three.js의 기본 구성 요소: scene, camera, renderer
const scene = new THREE.Scene(); // 장면, 무대
const camera = new THREE.PerspectiveCamera(
  75, // 시야각 Fov
  window.innerWidth / window.innerHeight, // 종횡비 (Aspect Ratio)
  0.1, // 가까운 클리핑 면
  1000 // 먼 클리핑 면
); // 장면을 어떤 시점에서 볼것인지

const renderer = new THREE.WebGLRenderer(); // 장면을 <canvas>에 그려줌
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff);
scene.background = new THREE.Color(0xffffff);
document.body.appendChild(renderer.domElement);

// 큐브 만들기
const geometry = new THREE.BoxGeometry(1, 1, 1); // 큐브의 형태
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 큐브의 재질 (초록색)
const material = new THREE.MeshStandardMaterial({
  color: 0xfffa9e,
  roughness: 0.3,
  metalness: 0.1,
});
const cube = new THREE.Mesh(geometry, material); // geometry + material 합쳐서 메쉬 생성
scene.add(cube);

//조명 추가
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

camera.position.z = 5; // 카메라 뒤로 빼기

// 장면 렌더링 (애니메이션 루프)
function animate() {
  cube.rotation.x += 0.01; // x축 회전
  cube.rotation.y += 0.01; // y축 회전

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate); // 새로고침될 때마다 실행
