import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import { Flex, Box } from '@react-three/flex'

const EyePopVisuals = ({ className, resultCanvasRef, videoRef }) =>
{
    const sharedClass = 'absolute top-0 left-0 w-full h-full object-contain';

    const cameraRef = useRef();
    const layoutRef = useRef();

    useEffect(() =>
    {

        if (!cameraRef.current) return;
        if (!layoutRef.current) return;

        cameraRef.current.fitToBox(layoutRef.current, true, { paddingLeft: 0.5, paddingRight: 0.5, paddingBottom: 0.5, paddingTop: 0.5 });

    }, [ cameraRef.current, layoutRef.current ]);


    return (
        <div
            className={`${className} w-full h-full`} >

            <canvas
                id="result-overlay"
                ref={resultCanvasRef}
                className={`${sharedClass}`}
            ></canvas>

            <video
                ref={videoRef}
                className={`${sharedClass} hidden`}
                autoPlay
                playsInline
                muted
            ></video>

        </div >
    );
};

export default EyePopVisuals;
