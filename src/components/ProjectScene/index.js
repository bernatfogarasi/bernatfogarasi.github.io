import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
// import Cube from "./Cube";
import Light from "./Light";
import Phone from "./Phone";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ProjectScene = ({ src }) => {
  return (
    <Wrapper data-aos="fade-in" data-aos-delay="1000" data-aos-duration="400">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Suspense fallback={null}>
          <Phone
            scale={0.8}
            position={[0, 0, 0]}
            rotation={[0, Math.PI - Math.PI / 8, 0]}
            src={src}
          ></Phone>
          <Light position={[0, 0, 5]} intensity={100} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default ProjectScene;
