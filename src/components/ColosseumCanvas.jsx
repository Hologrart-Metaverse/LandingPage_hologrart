import React from 'react';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Model from "./FashionGenesis";

const ColosseumCanvas = ({ isMobile }) => {
  return (
    <div className='w-full h-full max-w-full max-h-full'>
        <Canvas camera={{ position: [0, 150, -150]}}>
            <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <ambientLight />
            <Model />
        </Canvas>
    </div>
  )
}

export default ColosseumCanvas