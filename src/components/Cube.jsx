import { useStore } from '../hooks/useStore'
import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useState } from 'react'

export function Cube ({ id, position, texture }) {
  const [removeCube] = useStore(state => [state.removeCube])

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
    ref={ref}
    onClick={(e) => {
      if (e.altKey) {
        e.stopPropagation()
        const { x, y, z } = ref.current.position
        removeCube(x, y, z)
      }
    }}
    >
      <boxGeometry/>
      <meshStandardMaterial
      map={activeTexture}
      color={isHovered ? 'grey' : 'white'}
      transparent={true}
      opacity={texture === 'glass' ? 0.7 : 1}
       />
    </mesh>
  )
}
