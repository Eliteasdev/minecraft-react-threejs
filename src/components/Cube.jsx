import { useStore } from '../hooks/useStore'
import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useState } from 'react'

export function Cube ({ id, position, texture }) {
  const [addCube, removeCube] = useStore(state => [state.addCube, state.removeCube])

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
      } else {
        e.stopPropagation()
        const clickedFace = Math.floor(e.faceIndex / 2)
        const { x, y, z } = ref.current.position

        if (clickedFace === 0) {
          addCube(x + 1, y, z)
        }
        if (clickedFace === 1) {
          addCube(x - 1, y, z)
        }
        if (clickedFace === 2) {
          addCube(x, y + 1, z)
        }
        if (clickedFace === 3) {
          addCube(x, y - 1, z)
        }
        if (clickedFace === 4) {
          addCube(x, y, z + 1)
        }
        if (clickedFace === 5) {
          addCube(x, y, z - 1)
        }
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
