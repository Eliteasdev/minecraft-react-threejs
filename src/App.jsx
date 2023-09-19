import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV as Fpv } from './components/FPV'
import { Player } from './components/Player'

function App () {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]}/>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Fpv/>
      <Physics>
        <Player/>
        <Ground/>
      </Physics>
    </Canvas>
  )
}

export default App
