import {useGLTF} from "@react-three/drei";
import React from "react";
import threeD from "../assets/3D-Audric.gltf";
export const Model = () => {
    const gltf = useGLTF(threeD);

    return (
        <>
            <primitive object={gltf.scene} dispose={null} />
        </>
    );
};
