import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Main() {
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

export default Main;
