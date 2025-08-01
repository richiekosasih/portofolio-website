import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShapes = () => {
  const sphere1Ref = useRef();
  const sphere2Ref = useRef();
  const boxRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (sphere1Ref.current) {
      sphere1Ref.current.rotation.x = time * 0.5;
      sphere1Ref.current.rotation.y = time * 0.3;
      sphere1Ref.current.position.y = -2 + Math.sin(time) * 0.5;
    }

    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.x = time * 0.3;
      sphere2Ref.current.rotation.y = time * 0.5;
      sphere2Ref.current.position.y = 2 + Math.cos(time * 0.8) * 0.3;
    }

    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.4;
      boxRef.current.rotation.y = time * 0.6;
      boxRef.current.position.y = 0 + Math.sin(time * 1.2) * 0.4;
    }
  });

  return (
    <group>
      <mesh ref={sphere1Ref} position={[-3, -2, -4]} scale={0.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color='#8b5cf6'
          transparent
          opacity={0.6}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      <mesh ref={sphere2Ref} position={[3, 2, -5]} scale={0.4}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color='#06b6d4'
          transparent
          opacity={0.5}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={boxRef} position={[0, 0, -6]} scale={0.3}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color='#f59e0b'
          transparent
          opacity={0.4}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};

export default FloatingShapes;
