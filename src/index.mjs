import * as THREE from "three";

// 1️⃣ Crear la escena
const scene = new THREE.Scene();

// 2️⃣ Crear la cámara (Perspectiva)
const camera = new THREE.PerspectiveCamera(
  75, // Campo de visión
  window.innerWidth / window.innerHeight, // Aspecto
  0.1, // Cerca
  1000 // Lejos
);

// 3️⃣ Crear el renderizador y agregarlo al HTML
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4️⃣ Crear un cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Verde
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5️⃣ Posicionar la cámara
camera.position.z = 5;

// 6️⃣ Crear una función de animación
function animate() {
  requestAnimationFrame(animate);

  // Rotación del cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// 7️⃣ Ejecutar la animación
animate();
