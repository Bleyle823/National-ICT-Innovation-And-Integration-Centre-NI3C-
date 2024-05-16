/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client' 

import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import { Canvas } from '@react-three/fiber'
// import Overlay from './Overlay'
import Scene from '../scenes/Scene'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'

import { FramerDiv } from '@/components/framer'

export default function App() {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])
  return (
    <><FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS}>
      <p className='leading-7 md:text-lg [&:not(:first-child)]:mt-6'>
      Professor Ongeri acknowledged the importance of ICT in education terming it as a ‘language’ that can be used to teach various subjects in the classroom. He specifically cited examples of successful use of ICT in the classroom in countries such as Rwanda, Malaysia and Singapore.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className="h-32 rounded-lg "><h3 className='mb-5 text-center text-2xl font-bold '>	
ICT Emerging Technologies integration in Education</h3>There are great advances in the development of educational technologies that encourage exploration and bring about new opportunities in teaching and learning.</div>
  <div className="h-32 rounded-lg "><h3 className='mb-5 text-center text-2xl font-bold '>	
Research & Development on ICT Integration in Education</h3>The center is mandated to evaluate various solutions and technologies in Education to determine their suitability on delivery of curriculum objectives, and compatibility</div>
  <div className="h-32 rounded-lg "><h3 className='mb-5 text-center text-2xl font-bold '>Research Areas on ICT integration</h3>The center shall be undertaking research on key areas on ICT integration in Education categorized into four areas as envisaged in the Holistic Model (4-in-1 balance)</div>
</div>

<div className="mt-20 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className="h-32 rounded-lg "><h3 className='mb-5 text-center text-2xl font-bold '>Calls for ICT Innovations on Education</h3>The innovation team shall participate at regional and national Kenya Schools Engineering and Science Fair to identify innovations that are viable for incubation.</div>
  <div className="h-32 rounded-lg "><h3 className='mb-5 text-center text-2xl font-bold '>	
Tested and Approved ICT Solution for Education</h3>The many tools and resources and internet based instruction provide a wide spectrum from which to identify the technology to use from</div>
  <div className="h-32 rounded-lg "><h3 className='mb-5 text-center text-2xl font-bold '>Incubated ICT Innovations on Education</h3>The center has not received any ICT integration innovations for incubation at the moment. However once an idea has been identified and evaluated, the next stage will be incubation.</div>
</div>
    </FramerDiv><Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <Scene setBg={set} />
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </mesh>
      </Canvas></>
  )
}
