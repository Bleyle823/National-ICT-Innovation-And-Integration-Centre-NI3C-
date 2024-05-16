import { projectsQuery } from '@/utils/querys'

import { client } from '@/lib/sanity'
import { Header } from '@/components/header'
import Hero from '@/components/hero'
// import Projects from '@/components/projects'
import Hero2 from '@/components/hero2'
import Scroll from '@/components/scroll'

import { type Projects as ProjectsType } from '../types/sanity'

export default async function Home() {
  const projects = (await client.fetch<ProjectsType[]>(projectsQuery)) ?? []

  return (
    <main>
      <Hero />
      <Scroll />
      <Header title='Features' />
       < Hero2 />
      {/* <Projects projects={projects} /> */}
    </main>
  )
}
