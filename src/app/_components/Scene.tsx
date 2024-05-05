import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="scene">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <directionalLight intensity={1000} />
        <Environment files="/hdr/studio.hdr" />
        <Model />
      </Canvas>
    </div>
  );
};

export default Scene;
