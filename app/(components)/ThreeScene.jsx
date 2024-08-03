"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    const renderer = new THREE.WebGLRenderer();

    // Append the renderer's canvas to the component's div
    if (canvasRef.current) {
      renderer.setSize(
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight
      );
      canvasRef.current.appendChild(renderer.domElement);
    }

    // Example geometry
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        camera.aspect =
          canvasRef.current.clientWidth / canvasRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          canvasRef.current.clientWidth,
          canvasRef.current.clientHeight
        );
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{ width: "100%", height: "400px", position: "relative" }}
    >
      {/* The Three.js canvas will be appended here */}
    </div>
  );
};

export default ThreeScene;
