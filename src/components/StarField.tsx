import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    
    // Camera setup
    const aspectRatio = window.innerWidth / window.innerHeight;
    cameraRef.current = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    cameraRef.current.position.z = 5;

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ 
      alpha: true,
      powerPreference: 'high-performance',
      antialias: false
    });
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = Math.min(10000, window.innerWidth < 768 ? 5000 : 10000);
    const positions = new Float32Array(starCount * 3);
    const velocities = new Float32Array(starCount);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
      velocities[i / 3] = Math.random() * 0.1;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: window.innerWidth < 768 ? 0.15 : 0.1,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    starsRef.current = new THREE.Points(starsGeometry, starsMaterial);
    sceneRef.current.add(starsRef.current);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      if (!starsRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

      animationFrameId = requestAnimationFrame(animate);

      // Rotate stars
      starsRef.current.rotation.y += 0.0002;
      starsRef.current.rotation.x += 0.0001;

      // Update star positions
      const positions = starsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += velocities[i / 3];
        if (positions[i + 2] > 50) {
          positions[i + 2] = -50;
        }
      }
      starsRef.current.geometry.attributes.position.needsUpdate = true;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ 
        background: 'linear-gradient(to bottom, #0f0f23, #1a1a3a)',
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden'
      }}
    />
  );
}