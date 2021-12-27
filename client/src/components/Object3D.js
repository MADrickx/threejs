import React, {Suspense} from "react";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import HtmlCon from "./HtmlCon";
import Light from "./Light";
import {OrbitControls} from "@react-three/drei";

const CanvasContainer = styled.div`
    width: 350px;
    height: 350px;
    background-color: lightcyan;
    border-radius: 5px;
    overflow: hidden;
`;

function Object3D() {
    return (
        <CanvasContainer>
            <Canvas camera={{position: [0, 0, 5], fov: 50, translateY: -5}}>
                <OrbitControls minDistance={3} maxDistance={10} />
                <Light />
                <Suspense fallback={null}>
                    <HtmlCon />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    );
}

export default Object3D;
