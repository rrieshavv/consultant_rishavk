
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

function RotatingGlobe() {
  const group = useRef<THREE.Group>(null!)
  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.2
  })
  return (
    <group ref={group}>
      {/* Wireframe globe */}
      <mesh>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshBasicMaterial wireframe />
      </mesh>

      {/* Highlight "Nepal" region with a small glowing point (approximate position) */}
      <mesh position={[ -0.1, 0.5, 1.2 ]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial emissive={'#38bdf8'} emissiveIntensity={2} color={'#38bdf8'} />
      </mesh>
    </group>
  )
}

function TwinkleParticles() {
  const count = 150
  const positions = new Float32Array(count * 3)
  for (let i=0;i<count;i++) {
    positions[i*3+0] = (Math.random()-0.5)*8
    positions[i*3+1] = (Math.random()-0.5)*6
    positions[i*3+2] = (Math.random()-0.5)*8
  }
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} />
    </points>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3,3,3]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <RotatingGlobe />
      </Float>
      <Stars radius={50} depth={20} count={1000} factor={3} saturation={0} fade />
      <TwinkleParticles />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  )
}
