import {OrbitControls, Stage} from "@react-three/drei"
import {Canvas} from '@react-three/fiber'
import React from "react";
import Design from './Design';

const ProductDesign = () => {
  return (
    <Canvas>
    <Stage environment='city' intensity={0.6}>
     <Design />
    </Stage>
     <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default ProductDesign
