'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { domAnimation, LazyMotion, m } from 'framer-motion'

import { cn } from '@/lib/utils'
import { GitHub, LinkedIn } from '@/components/icons'

import { buttonVariants } from './ui/button'
// import { OrbitControls } from '@react-three/drei'
// import { useSpring } from '@react-spring/core'
// import { a } from '@react-spring/web'
// import { Canvas } from '@react-three/fiber'
// // import Overlay from './Overlay'
// import Scene from '../scenes/Scene'

const HomeScene = dynamic(() => import('@/scenes/home-scene'), {
  ssr: false,
})



const Hero = () => {
  // This spring controls the background and the svg fill (text color)
// const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])
  return (
    <LazyMotion features={domAnimation}>
      <m.div
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
        className='my-14 flex items-center justify-between '
      >
        <div className='w-[37rem]'>
          
          <m.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='text-2xl font-bold md:text-6xl'
          >
            
            National ICT Innovation & Integration Centre (NI3C)
            
          </m.h1>
          
          <m.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className=' my-1 text-xl font-semibold text-primary md:text-3xl'
          >
            Innovate, Create and Transform Education.
          </m.h2>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='mt-3 text-base text-muted-foreground md:text-md'
          >
            The National ICT Innovation and Integration Centre (NI3C) supported by the VVOB Kenya ICT Integration in Education programme was officially launched on the 10th August 2011 in a colourful ceremony officiated by the then Minister of Education, Prof. Dr. Sam Ongeri.
             Speaking during the launch, the Minister reiterated the usefulness of the centre as ‘it will not only provide education and training but it is also an innovative centre with the capacity to address technological gaps in education’.


          </m.p>
          <m.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='mt-5 flex gap-5'
          >
            <Link
              arial-label='GitHub'
              href='https://github.com/JorgeAssaf'
              target='_blank'
              rel='noopener noreferrer'
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              <GitHub className='size-6' />
              <span className='sr-only'>GitHub</span>
            </Link>

            <Link
              arial-label='LinkedIn'
              href='https://www.linkedin.com/in/jorge-enrique-assaf/'
              target='_blank'
              rel='noopener noreferrer'
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              <LinkedIn className='size-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              arial-label='Download Resume'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.innovationcentre.go.ke/'
              className={cn(
                buttonVariants({
                  variant: 'outline',
                }),
              )}
            >
              READ MORE
            </Link>
          </m.div>
        </div>
        <m.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='hidden size-[500px] items-center justify-center lg:flex'
        >
          
          <HomeScene />
        </m.div>
      </m.div>
  {/* <Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
  <mesh>
  <Scene setBg={set} />
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
  </mesh>
  </Canvas> */}
    </LazyMotion>
  )
}

export default Hero
