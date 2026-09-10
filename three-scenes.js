/**
 * 3D INTERACTIVE VISUALIZATION ENGINE (Three.js r128)
 * Red & White Theme: #ff2a51 (Bright Crimson), #e11d48 (Deep Ruby), #ffffff (Pure White)
 * -----------------------------------------------------------------------------------
 * Module 1: 3D Data Pipeline (7-Stage Energy Stream & Particle Flow)
 * Module 2: The Data Orbit (Interactive Solar System with Core + 5 Tool Satellites)
 */

(function () {
  'use strict';

  if (typeof THREE === 'undefined') {
    console.error('Three.js library is not loaded. Please include three.min.js.');
    return;
  }

  /* ========================================================================= */
  /* UTILITY: VIEWPORT VISIBILITY OBSERVER                                     */
  /* Pauses render loops when canvases are offscreen to conserve CPU / GPU.    */
  /* ========================================================================= */
  function createVisibilityTracker(element, onVisibilityChange) {
    if (!window.IntersectionObserver) {
      onVisibilityChange(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          onVisibilityChange(entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(element);
  }

  /* ========================================================================= */
  /* 1. 3D DATA PIPELINE: 7-STAGE ENERGY STREAM & PARTICLE FLOW                */
  /* ========================================================================= */
  function initDataPipeline() {
    const container = document.getElementById('pipeline-3d-canvas-container');
    if (!container) return;

    // 1. Scene, Camera, and Renderer Setup
    let width = container.clientWidth || 800;
    let height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 4, 30);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const redLight = new THREE.PointLight(0xff2a51, 3.5, 60);
    redLight.position.set(0, 10, 15);
    scene.add(redLight);

    // 3. Define 7 Pipeline Stage Coordinates
    // Raw Data -> Data Cleaning -> SQL/Python -> Analysis -> Power BI/Tableau -> Business Insights -> Decision
    const stageCount = 7;
    const curvePoints = [];
    for (let i = 0; i < stageCount; i++) {
      const progress = i / (stageCount - 1);
      const x = (progress - 0.5) * 32;
      const y = Math.sin(progress * Math.PI) * 2.8 - 1.2;
      const z = Math.cos(progress * Math.PI * 2) * 2.0;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    const spline = new THREE.CatmullRomCurve3(curvePoints);

    // 4. Conduit Tube Structure
    const tubeGeometry = new THREE.TubeGeometry(spline, 120, 0.18, 16, false);
    const tubeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f070e,
      emissive: 0x4a0e1b,
      emissiveIntensity: 0.6,
      roughness: 0.4,
      metalness: 0.8,
      transparent: true,
      opacity: 0.75
    });
    const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    scene.add(tubeMesh);

    // 5. 7 Lifecycle Nodes & Pulse Rings
    const nodeSpheres = [];
    const pulseRings = [];
    const nodeGeometry = new THREE.SphereGeometry(0.75, 24, 24);
    const ringGeometry = new THREE.RingGeometry(0.95, 1.15, 32);

    curvePoints.forEach((pt, idx) => {
      const isTerminal = idx === stageCount - 1;
      const isOrigin = idx === 0;

      const nodeMat = new THREE.MeshStandardMaterial({
        color: isTerminal ? 0xffffff : (isOrigin ? 0xff4d6d : 0xff2a51),
        emissive: isTerminal ? 0xffffff : 0xe11d48,
        emissiveIntensity: isTerminal ? 0.9 : 0.7,
        roughness: 0.2,
        metalness: 0.8
      });

      const sphere = new THREE.Mesh(nodeGeometry, nodeMat);
      sphere.position.copy(pt);
      scene.add(sphere);
      nodeSpheres.push(sphere);

      const ringMat = new THREE.MeshBasicMaterial({
        color: isTerminal ? 0xffffff : 0xff2a51,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ring = new THREE.Mesh(ringGeometry, ringMat);
      ring.position.copy(pt);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);
      pulseRings.push(ring);
    });

    // 6. Lightweight High-Tech Energy Stream (Moving Particle System)
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleOffsets = new Float32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);

    const cWhite = new THREE.Color(0xffffff);
    const cRed = new THREE.Color(0xff2a51);

    for (let i = 0; i < particleCount; i++) {
      particleOffsets[i] = Math.random();
      particleSpeeds[i] = 0.08 + Math.random() * 0.12;

      // Color gradient distribution: Crimson at source transitioning to Pure White at output
      const mixedColor = cRed.clone().lerp(cWhite, particleOffsets[i]);
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.32,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const particleStream = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleStream);

    // 7. Responsive Resizing
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      if (width > 0 && height > 0) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };
    window.addEventListener('resize', handleResize);

    // 8. Render Loop & Viewport Gating
    let isVisible = true;
    let clock = new THREE.Clock();

    createVisibilityTracker(container, (visible) => {
      isVisible = visible;
    });

    function animatePipeline() {
      requestAnimationFrame(animatePipeline);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Update particle stream position along curve
      const positions = particleStream.geometry.attributes.position.array;
      const colors = particleStream.geometry.attributes.color.array;

      for (let i = 0; i < particleCount; i++) {
        particleOffsets[i] += particleSpeeds[i] * delta;
        if (particleOffsets[i] > 1.0) particleOffsets[i] -= 1.0;

        const pos = spline.getPoint(particleOffsets[i]);

        // Jitter packets slightly to mimic plasma dispersion
        const jitterX = (Math.sin(elapsed * 10 + i) * 0.12);
        const jitterY = (Math.cos(elapsed * 10 + i) * 0.12);

        positions[i * 3] = pos.x + jitterX;
        positions[i * 3 + 1] = pos.y + jitterY;
        positions[i * 3 + 2] = pos.z;

        // Shift color along the lifecycle
        const nodeColor = cRed.clone().lerp(cWhite, particleOffsets[i]);
        colors[i * 3] = nodeColor.r;
        colors[i * 3 + 1] = nodeColor.g;
        colors[i * 3 + 2] = nodeColor.b;
      }
      particleStream.geometry.attributes.position.needsUpdate = true;
      particleStream.geometry.attributes.color.needsUpdate = true;

      // Pulse nodes and expansion rings
      nodeSpheres.forEach((sphere, idx) => {
        const pulse = 1 + Math.sin(elapsed * 3.5 + idx * 0.8) * 0.12;
        sphere.scale.set(pulse, pulse, pulse);
      });

      pulseRings.forEach((ring, idx) => {
        const wave = 1 + ((elapsed * 2.0 + idx * 0.6) % 2.0);
        const alpha = Math.max(0, 1 - (wave - 1) / 2.0);
        ring.scale.set(wave, wave, wave);
        ring.material.opacity = alpha * 0.7;
      });

      // Gentle camera sway
      camera.position.x = Math.sin(elapsed * 0.25) * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animatePipeline();
  }

  /* ========================================================================= */
  /* 2. SIGNATURE FEATURE: THE DATA ORBIT (INTERACTIVE SOLAR SYSTEM)           */
  /* ========================================================================= */
  function initDataOrbit() {
    const container = document.getElementById('data-orbit-canvas-container');
    if (!container) return;

    // 1. Scene, Camera, and Renderer Setup
    let width = container.clientWidth || 600;
    let height = container.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 12, 26);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const centralLight = new THREE.PointLight(0xff2a51, 6, 60);
    scene.add(centralLight);

    // 3. Master Pivot Group
    const orbitSystemGroup = new THREE.Group();
    scene.add(orbitSystemGroup);

    // 4. Glowing Core: "Business Insights"
    const coreGroup = new THREE.Group();

    const coreMesh = new THREE.Mesh(
      new THREE.SphereGeometry(3.2, 40, 40),
      new THREE.MeshStandardMaterial({
        color: 0xbe123c,
        emissive: 0xff2a51,
        emissiveIntensity: 0.8,
        wireframe: true,
        roughness: 0.2,
        metalness: 0.8
      })
    );
    coreGroup.add(coreMesh);

    const innerCoreMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.1, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.85
      })
    );
    coreGroup.add(innerCoreMesh);
    orbitSystemGroup.add(coreGroup);

    // 5. 5 Orbiting Tool Satellites (SQL, Python, Power BI, Tableau, Excel)
    const orbitData = [
      { name: "SQL", radius: 6.8, speed: 0.75, tilt: 0.20, color: 0xff2a51, size: 0.95 },
      { name: "Python", radius: 9.2, speed: 0.55, tilt: -0.30, color: 0xffffff, size: 1.05 },
      { name: "Power BI", radius: 11.6, speed: 0.42, tilt: 0.35, color: 0xff2a51, size: 1.15 },
      { name: "Tableau", radius: 14.0, speed: 0.32, tilt: -0.18, color: 0xffffff, size: 1.00 },
      { name: "Excel", radius: 16.4, speed: 0.24, tilt: 0.12, color: 0xff4d6d, size: 0.90 }
    ];

    const satellites = [];

    orbitData.forEach((tool) => {
      // Orbital Track Ring
      const ringGeo = new THREE.RingGeometry(tool.radius - 0.04, tool.radius + 0.04, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: tool.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.28
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2 + tool.tilt;
      ringMesh.rotation.y = tool.tilt * 0.4;
      orbitSystemGroup.add(ringMesh);

      // Satellite Sphere
      const satMesh = new THREE.Mesh(
        new THREE.SphereGeometry(tool.size, 24, 24),
        new THREE.MeshStandardMaterial({
          color: tool.color,
          emissive: tool.color,
          emissiveIntensity: 0.75,
          roughness: 0.25,
          metalness: 0.8
        })
      );

      // Wireframe Aura
      const auraMesh = new THREE.Mesh(
        new THREE.SphereGeometry(tool.size * 1.4, 16, 16),
        new THREE.MeshBasicMaterial({
          color: tool.color,
          wireframe: true,
          transparent: true,
          opacity: 0.35
        })
      );
      satMesh.add(auraMesh);
      orbitSystemGroup.add(satMesh);

      satellites.push({
        mesh: satMesh,
        config: tool,
        angle: Math.random() * Math.PI * 2
      });
    });

    // 6. Interactive Drag-to-Rotate Controls with Smooth Inertia
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0.15;
    let targetRotationY = 0;
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      prevMouseY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      rotationVelocityY = deltaX * 0.007;
      rotationVelocityX = deltaY * 0.007;

      targetRotationY += rotationVelocityY;
      targetRotationX += rotationVelocityX;

      // Limit pitch to prevent scene flipping
      targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX));

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 7. Responsive Resizing
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      if (width > 0 && height > 0) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };
    window.addEventListener('resize', handleResize);

    // 8. Render Loop & Idle Auto-Rotation
    let isVisible = true;
    let clock = new THREE.Clock();

    createVisibilityTracker(container, (visible) => {
      isVisible = visible;
    });

    function animateOrbit() {
      requestAnimationFrame(animateOrbit);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Gentle auto-rotation when user is not dragging
      if (!isDragging) {
        targetRotationY += 0.25 * delta;
      }

      // Smooth damping interpolation (lerp)
      orbitSystemGroup.rotation.y += (targetRotationY - orbitSystemGroup.rotation.y) * 0.08;
      orbitSystemGroup.rotation.x += (targetRotationX - orbitSystemGroup.rotation.x) * 0.08;

      // Rotate central core
      coreMesh.rotation.y = elapsed * 0.45;
      coreMesh.rotation.x = elapsed * 0.25;
      const corePulse = 1 + Math.sin(elapsed * 3.0) * 0.08;
      coreGroup.scale.set(corePulse, corePulse, corePulse);

      // Animate orbiting satellites
      satellites.forEach((sat) => {
        sat.angle += sat.config.speed * delta;
        const x = Math.cos(sat.angle) * sat.config.radius;
        const z = Math.sin(sat.angle) * sat.config.radius;
        const y = Math.sin(elapsed * 2.0 + sat.config.radius) * 0.6 + sat.config.tilt * 2.0;

        sat.mesh.position.set(x, y, z);
        sat.mesh.rotation.y += delta * 1.2;
      });

      renderer.render(scene, camera);
    }

    animateOrbit();
  }

  // Self-initialize once DOM content has loaded
  document.addEventListener('DOMContentLoaded', () => {
    initDataPipeline();
    initDataOrbit();
  });
})();
