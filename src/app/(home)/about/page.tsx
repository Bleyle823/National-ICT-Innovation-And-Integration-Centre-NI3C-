import type { Metadata } from 'next'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'

import { FramerDiv } from '@/components/framer'
import { Header } from '@/components/header'
import { Next, Prisma, React, Tailwind, Typescript } from '@/components/icons'

export const metadata: Metadata = {
  title: 'About me',
  description:
    'The National ICT Innovation and Integration Centre (NI3C) supported by the VVOB Kenya ICT Integration in Education  programme was officially launched on the 10th August 2011 in a colourful ceremony officiated by the then Minister of Education, Prof.  Dr. Sam Ongeri. Speaking during the launch, the Minister reiterated the usefulness of the centre as ‘it will not only provide education and training but it is also an innovative centre with the capacity to address technological gaps in education.Professor Ongeri acknowledged the importance of ICT in education terming it as a language that can be used to teach various subjects in the classroom. He specifically cited examples of successful use of ICT in the classroom in countries such as Rwanda, Malaysia and Singapore.NI3C is established under the Ministry of Education as a hub for effective use of ICT in education and training. Through its work, the pedagogic-didactic aspects of ICT Integration will be demonstrated and tested before use by teachers, students, education managers and the public.Part of its mandate is also to test and evaluate new technological ICT innovations to advise their usability and efficiency, so that educational stakeholders (schools, teachers…) can be guided on the same. This shall ensure that schools and stakeholders get only the best in terms of ICT equipment and software for education and learning.Currently the centre has:A main 40 seat computer laboratoryA 20 seat computer labs (one currently used as a model classroom for the digital literacy programme) A resource centre used for undertaking research and development work A server room. ICT facilities for demonstrating various aspects of ICT integration in lesson plans or content for teachers The Centre is situated on SMASSE grounds, in Kenya Science Campus along Ngong Road, directly opposite the Junction Mall. If using public transport, take matatu number 4WD, which leaves town from KENCOM bus Stage, alight at Kenya science.',
}

const AboutPage = () => {
  return (
    <>
      <Header title='Background' page />
      <FramerDiv
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
        className=' mx-auto max-w-[75ch]'
      >
        <FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <p className='leading-7 md:text-lg [&:not(:first-child)]:mt-6'>
          The National ICT Innovation and Integration Centre (NI3C) supported by the VVOB Kenya ICT Integration in Education  programme was officially launched on the 10th August 2011 in a colourful ceremony officiated by the then Minister of Education, Prof.  Dr. Sam Ongeri. Speaking during the launch, the Minister reiterated the usefulness of the centre as ‘it will not only provide education and training but it is also an innovative centre with the capacity to address technological gaps in education’.

Professor Ongeri acknowledged the importance of ICT in education terming it as a ‘language’ that can be used to teach various subjects in the classroom. He specifically cited examples of successful use of ICT in the classroom in countries such as Rwanda, Malaysia and Singapore.

NI3C is established under the Ministry of Education as a hub for effective use of ICT in education and training. Through its work, the pedagogic-didactic aspects of ICT Integration will be demonstrated and tested before use by teachers, students, education managers and the public.

Part of its mandate is also to test and evaluate new technological ICT innovations to advise their usability and efficiency, so that educational stakeholders (schools, teachers…) can be guided on the same. This shall ensure that schools and stakeholders get only the best in terms of ICT equipment and software for education and learning.

Currently the centre has:

A main 40 seat computer laboratory
A 20 seat computer labs (one currently used as a model classroom for the digital literacy programme)
A resource centre used for undertaking research and development work
A server room.
ICT facilities for demonstrating various aspects of ICT integration in lesson plans or content for teachers
The Centre is situated on SMASSE grounds, in Kenya Science Campus along Ngong Road, directly opposite the Junction Mall. If using public transport, take matatu number 4WD, which leaves town from KENCOM bus Stage, alight at Kenya science.
          </p>
        </FramerDiv>
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='my-10 flex flex-col items-center justify-center'
        >
          <h3 className='text-3xl font-bold '>Mandate</h3>
          <section className='my-5'>
          <p className='leading-7 md:text-lg [&:not(:first-child)]:mt-6'>
1.Develop appropriate ICT educational policies, strategies, standards, guidelines and procedures<br/>

2.The national helpdesk for educational institutions<br/>

3.Capacity building on higher levels of ICT integration<br/>

4.Incubation of ICT in education projects & innovations<br/>

5.Testing and recommending educational software and digital resources<br/>

6.Promote ICT innovation and Integration in learning ,Teaching and management<br/>

7.Test new ICT innovations and integration ideas and experiments for advice to all stakeholders<br/>

8.Research on, design, develop and promote emerging technologies on ICT integration in education<br/>

9.Host the Education portal and facilitate continuous improvements in liaison Subject Moderatory
          </p>
          </section>
        </FramerDiv>
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='flex flex-col items-center justify-center'
        >
          <h3 className='text-3xl font-bold '></h3>
          {/* <div className='my-7 flex flex-wrap items-center justify-center gap-5'>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <React className='size-7' />
              <span>React</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <Next className='size-7' />
              <span>Next</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <Tailwind className='size-7' />
              <span>Tailwind</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <Typescript className='size-7' />
              <span>Typescript</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-1'>
              <Prisma className='size-7' />
              <span>Prisma</span>
            </div>
          </div> */}
        </FramerDiv>
      </FramerDiv>
    </>
  )
}

export default AboutPage
