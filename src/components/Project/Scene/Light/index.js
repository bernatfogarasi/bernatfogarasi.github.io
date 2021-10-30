const Light = ({ position, color, intensity, layers, show }) => {
  return (
    <group>
      <rectAreaLight
        layers={layers}
        position={position}
        width={3}
        height={3}
        color={color}
        intensity={intensity}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
      {show && (
        <group>
          <mesh position={[position[0], position[1], position[2] + 0.1]}>
            <boxBufferGeometry
              layers={31}
              args={[0.1, 0.1, 0.1]}
              color="white"
            />
            <meshStandardMaterial layers={31} />
          </mesh>
          <directionalLight
            layers={31}
            position={[position[0], position[1], position[2] + 2]}
            color="red"
            intensity={1}
            lookAt={position}
            castShadow
          />
        </group>
      )}
    </group>
  );
};

export default Light;
