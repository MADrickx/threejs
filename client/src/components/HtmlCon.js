import React from "react";
import {Model} from "./Model";

const HtmlCon = () => {
    return (
        <>
            <mesh visible position={[0, -1, 0]} scale={[6, 6, 6]}>
                <Model />
            </mesh>
        </>
    );
};

export default HtmlCon;
