'use client'
import { motion } from 'framer-motion'
import { ArrowDown } from '@/components/icons'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import { Canvas } from '@react-three/fiber'
// import Overlay from './Overlay'
import Scene from '../scenes/Scene'

const Scroll = () => {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])
  return (
    <motion.div
      initial='hidden'
      animate='show'
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className='my-10 flex items-center justify-center'
    >
      <div className='my-10 flex animate-pulse flex-col items-center justify-center md:my-20'>
      <Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
  <mesh>
  <Scene setBg={set} />
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
  </mesh>
</Canvas>
        <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>Scroll</motion.p>
        <motion.span variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <ArrowDown className='mt-2 size-5 animate-bounce ' />
        </motion.span>
      </div>
    </motion.div>
  )
}
export default Scroll
