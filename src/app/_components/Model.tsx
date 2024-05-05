import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Model = () => {
  const mesh = useRef<Mesh | null>(null);
  const { nodes } = useGLTF("/medias/logo-th.glb");
  const { viewport } = useThree();

  let dividerModel = 3;
  if (viewport.width > 8) {
    dividerModel = 4;
  }
  if (viewport.width > 10) {
    dividerModel = 7;
  }

  useFrame(() => {
    if (mesh.current) {
      (mesh.current as any).rotation.y += 0.01;
    }
  });
  return (
    <group scale={viewport.width / dividerModel}>
      <mesh ref={mesh} {...nodes.Plane}>
        <MeshTransmissionMaterial
          thickness={0.85}
          roughness={0}
          transmission={1}
          ior={1.6}
          chromaticAberration={0.37}
          backside={true}
        />
      </mesh>
    </group>
  );
};

export default Model;
