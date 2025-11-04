import { useEffect, useRef } from "react";

const HeroScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let renderer: any | null = null;
    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;
    let cleanup = false;

    const targetRotation = { x: 0, y: 0 };

    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      targetRotation.y = (event.clientX / innerWidth - 0.5) * 0.9;
      targetRotation.x = (event.clientY / innerHeight - 0.5) * 0.6;
    };

    const init = async () => {
      const THREE: any = await import("https://esm.sh/three@0.161.0?bundle");
      if (!containerRef.current || cleanup) {
        return;
      }

      const { clientWidth, clientHeight } = containerRef.current;
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        52,
        clientWidth / clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 0, 10);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(clientWidth, clientHeight, false);
      renderer.setClearColor(0x000000, 0);

      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0x93c5fd, 1.2);
      directionalLight.position.set(4, 6, 8);
      scene.add(directionalLight);

      const rimLight = new THREE.PointLight(0x4f46e5, 1.8, 30);
      rimLight.position.set(-6, -4, -8);
      scene.add(rimLight);

      const coreGeometry = new THREE.IcosahedronGeometry(2.4, 1);
      const coreMaterial = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        emissive: 0x312e81,
        emissiveIntensity: 0.8,
        metalness: 0.7,
        roughness: 0.2,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
      });
      const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
      scene.add(coreMesh);

      const shellGeometry = new THREE.IcosahedronGeometry(3.1, 2);
      const shellMaterial = new THREE.MeshStandardMaterial({
        color: 0xa5b4fc,
        emissive: 0x1e3a8a,
        emissiveIntensity: 0.5,
        metalness: 0.2,
        roughness: 0.6,
        transparent: true,
        opacity: 0.18,
      });
      const shellMesh = new THREE.Mesh(shellGeometry, shellMaterial);
      scene.add(shellMesh);

      const particleCount = 600;
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const basePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const radius = 4.5 + Math.random() * 2.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        positions.set([x, y, z], i * 3);
        basePositions.set([x, y, z], i * 3);
      }

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        color: 0x93c5fd,
        size: 0.08,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      const clock = new THREE.Clock();

      const animate = () => {
        if (cleanup) {
          return;
        }

        animationFrameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        coreMesh.rotation.x += 0.0025;
        coreMesh.rotation.y += 0.0035;

        shellMesh.rotation.x += 0.0006;
        shellMesh.rotation.y -= 0.0009;

        shellMesh.rotation.x += (targetRotation.x - shellMesh.rotation.x) * 0.02;
        shellMesh.rotation.y += (targetRotation.y - shellMesh.rotation.y) * 0.02;

        const attr = particleGeometry.getAttribute("position");
        for (let i = 0; i < particleCount; i++) {
          const ix = i * 3;
          const bx = basePositions[ix];
          const by = basePositions[ix + 1];
          const bz = basePositions[ix + 2];

          const offset = Math.sin(elapsed * 0.6 + i * 0.15) * 0.22;
          attr.array[ix] = bx + bx * 0.02 * offset;
          attr.array[ix + 1] = by + by * 0.02 * offset;
          attr.array[ix + 2] = bz + bz * 0.02 * offset;
        }
        attr.needsUpdate = true;

        particles.rotation.y -= 0.0008;

        renderer!.render(scene, camera);
      };

      const handleResize = () => {
        if (!containerRef.current || !renderer) {
          return;
        }
        const { clientWidth: width, clientHeight: height } = containerRef.current;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };

      handleResize();
      animate();

      window.addEventListener("pointermove", handlePointerMove);

      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(containerRef.current);
    };

    void init();

    return () => {
      cleanup = true;
      window.removeEventListener("pointermove", handlePointerMove);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement?.parentElement) {
          renderer.domElement.parentElement.removeChild(renderer.domElement);
        }
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none opacity-90"
      aria-hidden="true"
    />
  );
};

export default HeroScene;
