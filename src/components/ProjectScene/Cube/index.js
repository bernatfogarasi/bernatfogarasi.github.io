import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const Cube = ({ position, size, color, layers, children, fontSize, side }) => {
  const animationIndexes = [0, 1];

  const [animation, setAnimation] = useState(animationIndexes[0]);
  const { spring } = useSpring({
    spring: animation,
    config: { mass: 5, tension: 400, friction: 80, precision: 0.001 },
  });

  const animations = {
    color: spring.to(animationIndexes, ["orange", color ? color : "red"]),

    position: {
      x: spring.to(
        animationIndexes,
        [0, 0].map((item) => item + position[0])
      ),
      y: spring.to(
        animationIndexes,
        [0, 0].map((item) => item + position[1])
      ),
      z: spring.to(
        animationIndexes,
        [0, 0].map((item) => item + position[2])
      ),
    },
    rotation: {
      x: spring.to([0, 1], [0, 0]),
      y: spring.to([0, 1], [0, 0]),
      z: spring.to([0, 1], [0, 0]),
    },
  };

  const preformAnimations = () => {
    setTimeout(() => {
      setAnimation(1);
    }, 1000);
  };

  useEffect(() => {
    preformAnimations();
  }, []);

  return (
    <a.mesh
      scale={size}
      position-x={animations.position.x}
      position-y={animations.position.y}
      position-z={animations.position.z}
      rotation-x={animations.rotation.x}
      rotation-y={animations.rotation.y}
      rotation-z={animations.rotation.z}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <a.meshStandardMaterial
        color="turquoise"
        metalness={0.5}
        roughness={0.2}
      />
      <Html
        className="content"
        transform
        occlude
        position={[0, 0, 0.5 + 0.001]}
      >
        <div
          style={{
            width: 40,
            height: 40,
            fontSize: fontSize,
          }}
        >
          {children}
        </div>
      </Html>
    </a.mesh>
  );
};

export default Cube;
