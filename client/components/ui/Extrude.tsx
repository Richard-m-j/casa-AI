"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Corrected import path
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js"; // Corrected import path

const fillMaterial = new THREE.MeshBasicMaterial({ color: "#F3FBFB" });
const stokeMaterial = new THREE.LineBasicMaterial({
  color: "#00A5E6",
});
const renderSVG = (extrusion: number, svg: string) => {
  const loader = new SVGLoader();
  const svgData = loader.parse(svg);
  const svgGroup = new THREE.Group();
  const updateMap: {
    shape: THREE.Shape;
    mesh: THREE.Mesh;
    lines: THREE.LineSegments;
  }[] = [];

  svgGroup.scale.y *= -1;
  svgData.paths.forEach((path) => {
    const shapes = SVGLoader.createShapes(path);

    shapes.forEach((shape) => {
      const meshGeometry = new THREE.ExtrudeGeometry(shape, {
        depth: extrusion,
        bevelEnabled: false,
      });
      const linesGeometry = new THREE.EdgesGeometry(meshGeometry);
      const mesh = new THREE.Mesh(meshGeometry, fillMaterial);
      const lines = new THREE.LineSegments(linesGeometry, stokeMaterial);

      updateMap.push({ shape, mesh, lines });
      svgGroup.add(mesh, lines);
    });
  });

  const box = new THREE.Box3().setFromObject(svgGroup);
  const size = box.getSize(new THREE.Vector3());
  const yOffset = size.y / -2;
  const xOffset = size.x / -2;

  // Offset all of group's elements, to center them
  svgGroup.children.forEach((item) => {
    item.position.x = xOffset;
    item.position.y = yOffset;
  });
  svgGroup.rotateX(-Math.PI / 2);

  return {
    object: svgGroup,
    update(extrusion: number) {
      updateMap.forEach((updateDetails) => {
        const meshGeometry = new THREE.ExtrudeGeometry(updateDetails.shape, {
          depth: extrusion,
          bevelEnabled: false,
        });
        const linesGeometry = new THREE.EdgesGeometry(meshGeometry);

        updateDetails.mesh.geometry.dispose();
        updateDetails.lines.geometry.dispose();
        updateDetails.mesh.geometry = meshGeometry;
        updateDetails.lines.geometry = linesGeometry;
      });
    },
  };
};

// scene.js
const setupScene = (container: HTMLDivElement) => {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.01,
    1e5
  );
  const ambientLight = new THREE.AmbientLight("#888888");
  const pointLight = new THREE.PointLight("#ffffff", 2, 800);
  const controls = new OrbitControls(camera, renderer.domElement);
  const animate = () => {
    renderer.render(scene, camera);
    controls.update();

    requestAnimationFrame(animate);
  };

  renderer.setSize(window.innerWidth, window.innerHeight);
  scene.add(ambientLight, pointLight);
  camera.position.z = 50;
  camera.position.x = 50;
  camera.position.y = 50;
  controls.enablePan = false;

  container.appendChild(renderer.domElement);
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  animate();

  return scene;
};

// svg.js
const svg = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="296.000000pt" viewBox="0 0 300.000000 296.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,296.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M34 2869 c-2 -4 -3 -252 -3 -553 l0 -546 210 0 c205 0 209 0 209 21
0 20 -3 21 -188 17 l-187 -3 0 515 0 515 473 2 472 1 -2 -371 -3 -372 300 3
c165 2 301 5 304 7 2 2 1 11 -2 20 -6 13 -43 15 -285 15 l-278 0 -3 350 -2
350 110 0 111 0 0 -135 c0 -134 0 -135 23 -135 23 0 23 0 19 135 l-4 135 151
0 c114 0 151 -3 151 -12 1 -7 1 -69 1 -138 0 -123 0 -125 22 -126 l23 -2 -4
139 -5 139 107 0 106 0 0 -350 c0 -227 -4 -350 -10 -350 -5 0 -10 -9 -10 -20
0 -11 5 -20 10 -20 6 0 10 -7 10 -15 0 -8 8 -15 18 -15 16 -1 16 -1 0 -11 -16
-9 -18 -26 -18 -130 l0 -120 -417 1 c-230 1 -435 1 -455 1 -31 -1 -38 -5 -38
-21 0 -23 -37 -21 365 -18 160 1 347 2 417 2 l128 1 0 -117 0 -118 540 0 c353
0 540 -3 540 -10 0 -5 9 -10 19 -10 15 0 19 7 19 33 l0 32 -539 -3 -539 -3 0
631 0 630 520 0 520 0 0 -420 c0 -393 1 -420 18 -420 16 0 17 27 15 437 l-2
438 -1467 0 c-806 0 -1468 -3 -1470 -6z"/>
<path d="M2928 1963 c-7 -40 -2 -343 6 -350 3 -4 6 80 6 185 0 106 -2 192 -4
192 -2 0 -6 -12 -8 -27z"/>
<path d="M2977 1963 c-4 -3 -7 -87 -7 -186 0 -99 3 -178 6 -175 4 5 13 368 8
368 0 0 -4 -3 -7 -7z"/>
<path d="M1029 1684 c-1 -10 -1 -64 -1 -119 1 -55 1 -172 2 -259 0 -88 2 -157
5 -154 7 7 8 538 1 545 -3 4 -7 -2 -7 -13z"/>
<path d="M2929 1433 c0 -38 -1 -124 -2 -191 -1 -68 1 -126 6 -129 4 -2 7 84 7
191 0 108 -2 196 -5 196 -3 0 -5 -30 -6 -67z"/>
<path d="M2970 1319 c0 -96 4 -180 9 -187 5 -8 8 64 7 167 -1 99 -5 183 -9
187 -4 4 -7 -71 -7 -167z"/>
<path d="M31 619 c-1 -281 2 -522 5 -535 6 -22 9 -23 140 -26 122 -3 134 -1
134 15 0 15 -12 17 -120 17 l-120 0 -1 217 c0 120 -1 227 -1 238 0 11 2 136 4
278 l3 257 68 0 c65 0 68 1 65 23 -3 21 -8 22 -90 25 l-87 3 0 -512z"/>
<path d="M500 1105 c0 -21 5 -25 30 -25 25 0 30 4 30 25 0 21 -5 25 -30 25
-25 0 -30 -4 -30 -25z"/>
<path d="M880 1105 c0 -26 1 -26 68 -24 l67 2 2 -114 c1 -99 3 -114 18 -114
14 0 16 16 16 135 l0 135 -85 3 -86 3 0 -26z"/>
<path d="M283 1083 c37 -2 97 -2 135 0 37 2 6 3 -68 3 -74 0 -105 -1 -67 -3z"/>
<path d="M653 1083 c43 -2 110 -2 150 0 40 1 5 3 -78 3 -82 0 -115 -2 -72 -3z"/>
<path d="M2945 606 c4 -261 4 -483 0 -495 -6 -20 -13 -21 -156 -21 -138 0
-150 -1 -147 -17 3 -16 20 -18 171 -21 l169 -2 -4 515 c-3 497 -4 515 -22 515
-18 0 -19 -13 -11 -474z"/>
<path d="M1930 75 c0 -18 5 -25 20 -25 15 0 20 7 20 25 0 18 -5 25 -20 25 -15
0 -20 -7 -20 -25z"/>
<path d="M570 70 c0 -20 4 -21 460 -20 447 1 460 2 460 21 0 18 -12 19 -460
19 -456 0 -460 0 -460 -20z"/>
</g>
</svg>`;

const Extrude = () => {
  useEffect(() => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    // Initialize Three.js objects here
    const scene = setupScene(container);
    const { object, update } = renderSVG(20, svg);
    scene.add(object);

    return () => {
      // Clean up Three.js objects here
      scene.remove(object);
      // Clean up the container element
      document.body.removeChild(container);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return null; // This component doesn't render anything directly
};

export default Extrude;
