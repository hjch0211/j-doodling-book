import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// [Temp] Three.js 강좌보고 완성 짓기
function Three() {
  return (
    <Canvas>
      <mesh>
        <ambientLight intensity={1} />
        <boxGeometry />
        <OrbitControls autoRotate={true} />
      </mesh>
    </Canvas>
  );
}

export default Three;
