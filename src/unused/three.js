import React, { useRef } from 'react';
import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { ExecuteCodeAction } from '@babylonjs/core/Actions';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import BabylonScene from 'babylonjs-hook';
// import './scene.css';
import GlobalStyle from '@styles/global-style';
import styled from 'styled-components';
import { DynamicTexture } from 'babylonjs';

let box;
let babylonLink;

const onSceneReady = (scene) => {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox('box', { size: 2 }, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Register click event on box mesh
  box.actionManager = new ActionManager(scene);
  box.actionManager.registerAction(
    new ExecuteCodeAction(ActionManager.OnPickTrigger, () => {
      babylonLink.current.click();
    })
  );

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);
  
  // var textureResolution = 512;
  // var textureGround = DynamicTexture("dynamic texture", {width: 512, height: 256}, scene);
  // var textureContext = textureGRound.getContext();

  // var materialGround = StandardMaterial("Mat", scene);
  // materialGround.diffuseTexture = textureGround;
  // ground.material = materialGround;

  // var font = "bold 44px monospace";
  // textureGround.drawText("Grass", 75, 135, font, "green", "white", true, true);
  
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

const FullContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default () => {
  return (
    <>
      <GlobalStyle />
      <FullContainer>
        <BabylonScene
          antialias
          onSceneReady={onSceneReady}
          onRender={onRender}
          style={{width: "100vw", height: "100vh"}}
        />
      </FullContainer>
    </>
  );
};
