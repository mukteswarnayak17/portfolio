/**
 * 3D INTERACTIVE VISUALIZATION ENGINE (Three.js)
 * Red & White Theme | High-Fidelity Cyber Analytics
 * ----------------------------------------------------
 * Powers:
 * 1. Home 3D Background (Ruby cubes, white constellation particles, floating chart prisms)
 * 2. Data Orbit (Central pulsing crimson core + 5 orbiting satellites with trails)
 * 3. 3D Pipeline (Glowing spline with energy packets & expanding radar rings)
 * 4. 3D GitHub Voxel Matrix (Crimson-to-white activity landscape)
 */

class Portfolio3DEngine {
  constructor() {
    this.isThreeAvailable = typeof THREE !== 'undefined';
    this.scenes = {};
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.orbitRotation = { x: 0.15, y: 0 };
    this.orbitDragging = false;
    this.orbitPrevX = 0;
    this.orbitPrevY = 0;
    
    this.initMouseTracking();

    if (this.isThreeAvailable) {
      this.initHeroScene();
      this.initDataOrbitScene();
      this.initPipelineScene();
      this.initGithub3DScene();
    }
  }

  initMouseTracking() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    const orbitContainer = document.getElementById('data-orbit-canvas-container');
    if (orbitContainer) {
      orbitContainer.addEventListener('mousedown', (e) => {
        this.orbitDragging = true;
        this.orbitPrevX = e.clientX;
        this.orbitPrevY = e.clientY;
      });

      window.addEventListener('mousemove', (e) => {
        if (this.orbitDragging) {
          const deltaX = e.clientX - this.orbitPrevX;
          const deltaY = e.clientY - this.orbitPrevY;
          this.orbitRotation.y += deltaX * 0.008;
          this.orbitRotation.x += deltaY * 0.008;
          this.orbitPrevX = e.clientX;
          this.orbitPrevY = e.clientY;
        }
      });

      window.addEventListener('mouseup', () => {
        this.orbitDragging = false;
      });
    }

    window.addEventListener('resize', () => {
      this.onWindowResize();
    });
  }

  onWindowResize() {
    Object.values(this.scenes).forEach(s => {
      if (s.renderer && s.camera && s.container) {
        const width = s.container.clientWidth;
        const height = s.container.clientHeight;
        if (width > 0 && height > 0) {
          s.camera.aspect = width / height;
          s.camera.updateProjectionMatrix();
          s.renderer.setSize(width, height);
        }
      }
    });
  }

  /* -------------------------------------------------------
   * 1. HOME 3D BACKGROUND
   * ------------------------------------------------------- */
  initHeroScene() {
    const container = document.getElementById('hero-3d-canvas-container');
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 34;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x2a0812, 2.8);
    scene.add(ambientLight);

    const redLight = new THREE.PointLight(0xff2a51, 4, 70);
    redLight.position.set(16, 12, 18);
    scene.add(redLight);

    const whiteLight = new THREE.PointLight(0xffffff, 2.5, 60);
    whiteLight.position.set(-18, -12, 15);
    scene.add(whiteLight);

    const heroGroup = new THREE.Group();
    scene.add(heroGroup);

    const cubes = [];
    const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const innerGeo = new THREE.BoxGeometry(0.85, 0.85, 0.85);

    for (let i = 0; i < 18; i++) {
      const isCrimson = i % 2 === 0;
      const wireMat = new THREE.MeshStandardMaterial({
        color: isCrimson ? 0xff2a51 : 0xffffff,
        wireframe: true,
        roughness: 0.15,
        metalness: 0.9,
        transparent: true,
        opacity: isCrimson ? 0.8 : 0.6
      });
      const wireCube = new THREE.Mesh(cubeGeo, wireMat);

      const innerMat = new THREE.MeshBasicMaterial({
        color: isCrimson ? 0xe11d48 : 0xffffff,
        transparent: true,
        opacity: 0.55
      });
      const innerCube = new THREE.Mesh(innerGeo, innerMat);
      wireCube.add(innerCube);

      wireCube.position.set(
        (Math.random() - 0.5) * 46,
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 20 - 4
      );

      wireCube.userData = {
        rotX: (Math.random() - 0.5) * 0.02,
        rotY: (Math.random() - 0.5) * 0.02,
        floatSpeed: 0.8 + Math.random() * 1.4,
        baseY: wireCube.position.y
      };

      heroGroup.add(wireCube);
      cubes.push(wireCube);
    }

    const chartBars = [];
    const barValues = [2.8, 5.2, 3.6, 6.8, 4.4, 7.8, 5.9, 8.6];
    const chartGroup = new THREE.Group();
    chartGroup.position.set(10, -5, -2);

    barValues.forEach((val, idx) => {
      const barGeo = new THREE.BoxGeometry(0.8, val, 0.8);
      const isRed = idx % 2 === 0;
      const barMat = new THREE.MeshStandardMaterial({
        color: isRed ? 0xff2a51 : 0xffffff,
        emissive: isRed ? 0x9f1239 : 0x475569,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.85
      });
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set(idx * 1.2 - 4.5, val / 2, 0);
      chartGroup.add(bar);
      chartBars.push(bar);
    });
    heroGroup.add(chartGroup);

    const particleCount = 85;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 34;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 24;

      const isWhite = Math.random() > 0.45;
      particleColors[i * 3] = 1.0;
      particleColors[i * 3 + 1] = isWhite ? 1.0 : 0.16;
      particleColors[i * 3 + 2] = isWhite ? 1.0 : 0.32;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015
      });
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.42,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    heroGroup.add(particles);

    const lineGeo = new THREE.BufferGeometry();
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xff2a51,
      transparent: true,
      opacity: 0.22
    });
    const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
    heroGroup.add(linesMesh);

    this.scenes.hero = {
      container,
      renderer,
      scene,
      camera,
      update: (time) => {
        this.mouse.targetX += (this.mouse.x - this.mouse.targetX) * 0.04;
        this.mouse.targetY += (this.mouse.y - this.mouse.targetY) * 0.04;

        heroGroup.rotation.y = this.mouse.targetX * 0.25 + time * 0.04;
        heroGroup.rotation.x = -this.mouse.targetY * 0.18;

        cubes.forEach(c => {
          c.rotation.x += c.userData.rotX;
          c.rotation.y += c.userData.rotY;
          c.position.y = c.userData.baseY + Math.sin(time * c.userData.floatSpeed) * 0.7;
        });

        chartBars.forEach((bar, idx) => {
          const wave = 1 + Math.sin(time * 2.5 + idx * 0.6) * 0.18;
          bar.scale.set(1, Math.max(0.15, wave), 1);
        });

        const pos = particles.geometry.attributes.position.array;
        const linePos = [];

        for (let i = 0; i < particleCount; i++) {
          pos[i * 3] += particleVelocities[i].x;
          pos[i * 3 + 1] += particleVelocities[i].y;
          pos[i * 3 + 2] += particleVelocities[i].z;

          if (Math.abs(pos[i * 3]) > 25) particleVelocities[i].x *= -1;
          if (Math.abs(pos[i * 3 + 1]) > 17) particleVelocities[i].y *= -1;
          if (Math.abs(pos[i * 3 + 2]) > 12) particleVelocities[i].z *= -1;

          for (let j = i + 1; j < particleCount; j++) {
            const dx = pos[i * 3] - pos[j * 3];
            const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            const distSq = dx * dx + dy * dy + dz * dz;
            if (distSq < 32) {
              linePos.push(
                pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
                pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
              );
            }
          }
        }
        particles.geometry.attributes.position.needsUpdate = true;
        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));

        renderer.render(scene, camera);
      }
    };
  }

  /* -------------------------------------------------------
   * 2. DATA ORBIT SCENE
   * ------------------------------------------------------- */
  initDataOrbitScene() {
    const container = document.getElementById('data-orbit-canvas-container');
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 10, 24);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0xff2a51, 5, 50);
    scene.add(coreLight);

    const orbitMaster = new THREE.Group();
    scene.add(orbitMaster);

    const coreGeo = new THREE.SphereGeometry(3.4, 48, 48);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xbe123c,
      emissive: 0xff2a51,
      emissiveIntensity: 0.7,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8
    });
    const coreSphere = new THREE.Mesh(coreGeo, coreMat);
    orbitMaster.add(coreSphere);

    const innerGeo = new THREE.SphereGeometry(2.3, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreSphere.add(innerCore);

    const orbitData = [
      { name: "SQL", radius: 7.2, speed: 0.65, tilt: 0.25, color: 0xff2a51, size: 1.0 },
      { name: "Python", radius: 9.4, speed: 0.50, tilt: -0.35, color: 0xffffff, size: 1.1 },
      { name: "Power BI", radius: 11.8, speed: 0.38, tilt: 0.40, color: 0xff2a51, size: 1.15 },
      { name: "Tableau", radius: 14.0, speed: 0.30, tilt: -0.20, color: 0xffffff, size: 1.0 },
      { name: "Excel", radius: 16.2, speed: 0.22, tilt: 0.15, color: 0xff4d6d, size: 0.95 }
    ];

    const satellites = [];

    orbitData.forEach(item => {
      const ringGeo = new THREE.RingGeometry(item.radius - 0.05, item.radius + 0.05, 72);
      const ringMat = new THREE.MeshBasicMaterial({
        color: item.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.28
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + item.tilt;
      ring.rotation.y = item.tilt * 0.4;
      orbitMaster.add(ring);

      const satGeo = new THREE.SphereGeometry(item.size, 24, 24);
      const satMat = new THREE.MeshStandardMaterial({
        color: item.color,
        emissive: item.color,
        emissiveIntensity: 0.75,
        roughness: 0.2,
        metalness: 0.8
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);

      const haloGeo = new THREE.SphereGeometry(item.size * 1.45, 16, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: item.color,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      satMesh.add(halo);

      orbitMaster.add(satMesh);

      satellites.push({
        mesh: satMesh,
        data: item,
        angle: Math.random() * Math.PI * 2
      });
    });

    this.scenes.orbit = {
      container,
      renderer,
      scene,
      camera,
      update: (time) => {
        coreSphere.rotation.y = time * 0.4;
        coreSphere.rotation.x = time * 0.2;

        satellites.forEach(sat => {
          sat.angle += sat.data.speed * 0.015;
          const x = Math.cos(sat.angle) * sat.data.radius;
          const z = Math.sin(sat.angle) * sat.data.radius;
          const y = Math.sin(time * 1.8 + sat.data.radius) * 0.7 + (sat.data.tilt * 2);
          sat.mesh.position.set(x, y, z);
          sat.mesh.rotation.y += 0.02;
        });

        orbitMaster.rotation.y = this.orbitRotation.y;
        orbitMaster.rotation.x = this.orbitRotation.x;

        renderer.render(scene, camera);
      }
    };
  }

  /* -------------------------------------------------------
   * 3. 3D PIPELINE SCENE
   * ------------------------------------------------------- */
  initPipelineScene() {
    const container = document.getElementById('pipeline-3d-canvas-container');
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 8, 28);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pLight = new THREE.PointLight(0xff2a51, 4, 60);
    pLight.position.set(0, 12, 15);
    scene.add(pLight);

    const stageCount = 7;
    const points = [];
    for (let i = 0; i < stageCount; i++) {
      const progress = i / (stageCount - 1);
      const x = (progress - 0.5) * 34;
      const y = Math.sin(progress * Math.PI) * 3.2 - 1.2;
      const z = Math.cos(progress * Math.PI * 2) * 2.2;
      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);

    const tubeGeo = new THREE.TubeGeometry(curve, 120, 0.24, 16, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x2b0d14,
      emissive: 0x4a0e1b,
      roughness: 0.3,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(tubeMesh);

    const stageNodes = [];
    const radarRings = [];

    points.forEach((pt, idx) => {
      const isDecision = idx === stageCount - 1;
      const isStart = idx === 0;

      const nodeGeo = new THREE.SphereGeometry(isDecision ? 1.2 : 0.85, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: isDecision ? 0xffffff : (isStart ? 0xff4d6d : 0xff2a51),
        emissive: isDecision ? 0xffffff : 0xe11d48,
        emissiveIntensity: 0.85,
        roughness: 0.15,
        metalness: 0.9
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pt);
      scene.add(nodeMesh);
      stageNodes.push(nodeMesh);

      const ringGeo = new THREE.RingGeometry(1.2, 1.35, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xff2a51,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pt);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);
      radarRings.push({ mesh: ring, baseScale: 1.0 });
    });

    const packetCount = 28;
    const packets = [];
    const packetGeo = new THREE.SphereGeometry(0.36, 16, 16);

    for (let i = 0; i < packetCount; i++) {
      const isWhite = i % 3 === 0;
      const packetMat = new THREE.MeshBasicMaterial({
        color: isWhite ? 0xffffff : 0xff2a51,
        transparent: true,
        opacity: 0.95
      });
      const packet = new THREE.Mesh(packetGeo, packetMat);
      scene.add(packet);
      packets.push({
        mesh: packet,
        offset: i / packetCount,
        speed: 0.14
      });
    }

    this.scenes.pipeline = {
      container,
      renderer,
      scene,
      camera,
      curve,
      stageNodes,
      update: (time) => {
        packets.forEach(p => {
          p.offset += p.speed * 0.01;
          if (p.offset > 1.0) p.offset -= 1.0;
          const pos = curve.getPoint(p.offset);
          p.mesh.position.copy(pos);

          if (p.offset > 0.88) {
            p.mesh.material.color.setHex(0xffffff);
          } else {
            p.mesh.material.color.setHex(p.mesh.id % 2 === 0 ? 0xff2a51 : 0xff4d6d);
          }
        });

        stageNodes.forEach((node, idx) => {
          const pulse = 1 + Math.sin(time * 3 + idx * 0.8) * 0.14;
          node.scale.set(pulse, pulse, pulse);
        });

        radarRings.forEach((r, idx) => {
          const ringScale = 1 + ((time * 2 + idx * 0.5) % 2.0);
          const ringAlpha = Math.max(0, 1 - (ringScale - 1) / 2.0);
          r.mesh.scale.set(ringScale, ringScale, ringScale);
          r.mesh.material.opacity = ringAlpha * 0.6;
        });

        renderer.render(scene, camera);
      }
    };
  }

  /* -------------------------------------------------------
   * 4. 3D GITHUB CONTRIBUTION VOXEL MATRIX
   * ------------------------------------------------------- */
  initGithub3DScene() {
    const container = document.getElementById('github-3d-canvas-container');
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(16, 18, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xff2a51, 2.5);
    dirLight.position.set(12, 22, 16);
    scene.add(dirLight);

    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    const cols = 16;
    const rows = 7;
    const spacing = 1.15;
    const voxels = [];

    const palette = [
      0x1a0b10,
      0x4c0519,
      0x9f1239,
      0xe11d48,
      0xffffff
    ];

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const isCommit = (c * 7 + r) % 3 !== 0;
        const level = isCommit ? Math.min(4, Math.floor(Math.sin(c * 0.8 + r) * 2 + 2.5)) : 0;
        const h = Math.max(0.25, level * 0.75);

        const geo = new THREE.BoxGeometry(0.9, h, 0.9);
        const mat = new THREE.MeshStandardMaterial({
          color: palette[level],
          emissive: palette[level],
          emissiveIntensity: level > 2 ? 0.5 : 0.1,
          roughness: 0.3,
          metalness: 0.7
        });

        const voxel = new THREE.Mesh(geo, mat);
        voxel.position.set(
          (c - cols / 2) * spacing,
          h / 2,
          (r - rows / 2) * spacing
        );

        gridGroup.add(voxel);
        voxels.push({ mesh: voxel, level });
      }
    }

    this.scenes.github = {
      container,
      renderer,
      scene,
      camera,
      update: (time) => {
        gridGroup.rotation.y = time * 0.14 + (this.mouse.x * 0.2);
        gridGroup.rotation.x = -this.mouse.y * 0.1;

        voxels.forEach((v, idx) => {
          if (v.level > 0) {
            const wave = Math.sin(time * 2.2 + idx * 0.1) * 0.12;
            v.mesh.scale.set(1, 1 + wave, 1);
          }
        });

        renderer.render(scene, camera);
      }
    };
  }

  /* -------------------------------------------------------
   * MAIN ANIMATION LOOP
   * ------------------------------------------------------- */
  startLoop() {
    let startTime = performance.now();

    const animate = (now) => {
      const time = (now - startTime) * 0.001;

      Object.values(this.scenes).forEach(s => {
        if (s.update && this.isElementInViewport(s.container)) {
          s.update(time);
        }
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.portfolio3D = new Portfolio3DEngine();
  if (window.portfolio3D.isThreeAvailable) {
    window.portfolio3D.startLoop();
  }
});
