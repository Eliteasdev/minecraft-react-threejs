import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useState } from 'react'

export function Cube ({ position, texture }) {
  const [isHovered, setIsHovered] = useState(false)
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh
    onPointerMove={(e) => {
      e.stopPropagation()
      setIsHovered(true)
    }}
    onPointerOut={(e) => {
      e.stopPropagation()
      setIsHovered(false)
    }}
    ref={ref}>
      <boxGeometry/>
      <meshStandardMaterial
      color={isHovered ? 'grey' : 'white'}
      transparent
      map={activeTexture} />
    </mesh>
  )
}
