'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Tilt } from 'react-tilt'
import { MapPin, Star, Download, Clock, ArrowDownIcon } from 'lucide-react'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import WorkSection from './components/Work'
import SkillsSection from './components/Skills'
import { Button } from '@/components/ui/button'


interface Project {
  name: string
  users: string
  stars: number
  image: string
  link: string
}

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState({ wat: '', gmt: '' })
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime({
        wat: now.toLocaleTimeString('en-NG', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' }),
        gmt: now.toLocaleTimeString('en-GB', { timeZone: 'GMT', hour: '2-digit', minute: '2-digit' })
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])


    async function fetchJoke() {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
        const data = await response.json();
  
        if (data.type === 'twopart') {
          setJoke(data.setup + ' ' + data.delivery);
        } else {
          setJoke(data.joke);
        }
      } catch (error) {
        setJoke('Error loading joke, but hey, at least there\'s no error 404! 😅');
      }
    }

  

  useEffect(() => {
    fetchJoke(); // Fetch a joke when the component mounts
  }, []); 
  
  const featuredProjects: Project[] = [
    {
      name: 'Nuwell',
      users: '100+/month',
      stars: 1,
      image: '/WhatsApp Image 2024-10-10 at 5.27.22 AM.jpeg',
      link: 'https://nuwellx.vercel.app/'
    },
    {
      name: 'Drops Tracker',
      users: '20+/month',
      stars: 1,
      image: '/dashboard-preview.webp',
      link: 'https://drops-tracker.vercel.app/home'
    },
    {
      name: 'Evento',
      users: 'NaN/month',
      stars: NaN,
      image: '/evento.png',
      link: 'https://evento-one.vercel.app/'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center">

<div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

{/* Map Image */}
<div className="relative h-64 md:ml-8 mb-8 rounded-lg overflow-visible">
  <Image
    src="/image.png"
    alt="Nigerian Map"
    layout="fill"
    objectFit="cover"
    className="opacity-20"
  />

  {/* Time div */}
  <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded">
    <div className="flex items-center mb-2">
      <Clock className="w-4 h-4 mr-2" />
      <p className="text-xl font-bold">{currentTime.wat} WAT</p>
    </div>
  </div>

  {/* User image */}
  <div className="absolute top-3/4 overflow-visible transform -translate-y-1/2 z-10 right-4 bg-opacity-50 p-2">
    <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
      <Image
        src="/b16fcff9-a4dc-48d0-b9c5-5e29ac1eb32f.webp"
        alt="Profile"
        width={200}
        height={200}
        className="rounded-lg      w-32 h-32    
                     sm:w-40 sm:h-40 
                     md:w-48 md:h-48 
                     lg:w-52 lg:h-52 
                     xl:w-56 xl:h-56 "
      />
    </Tilt>
  </div>
</div>


       

        {/* Profile Section */}
        <div className="flex flex-row md:flex-row items-center mb-12">
          
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold mb-2">Hello,</h1>
            <h2 className="text-5xl font-bold mb-4">I'm ENIGMA.</h2>
            <p className="text-sm md:text-xl text-gray-300 max-w-2xl">
              I'm a software developer specialized in developing modern frontend infrastructures, I am content writer who writes mostly blockchain related stuff, A student food technologist who doesn't Cook!'
               My passion is building stuff that makes life easier for everyone. I also have interests in AI tech!
            </p>
          </div>
         
        </div>

      

    
        <div className="mb-12">
          <h3 className="text-base font-bold mb-4 mt-9 p-12"> keep scrolling <ArrowDownIcon className='inline animate-pulse'/></h3>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Featured projects</h3>

          <Carousel>
  <CarouselContent className="flex space-x-2">
    {featuredProjects.map((project) => (
      <CarouselItem key={project.name} className="flex-shrink-0 w-full">
        <Tilt options={{ max: 25, scale: 0.25 }}>
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4">
                <h4 className="text-2xl font-bold mb-2">{project.name}</h4>
                <div className="flex items-center mb-2">
                  <Download className="w-4 h-4 mr-2" />
                  <span>{project.users}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  <span>{project.stars}</span>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


<div className="pt-12">
<div className="mt-12">
        <h3 className="text-sm text-foreground text-gray-100 mb-2">😂😂</h3>
        <p className="text-xl text-gray-300">"{joke}"</p>

        <Button
        className="bg-sky-500 text-white my-2 px-4 py-2 rounded"
        onClick={fetchJoke}
      >
        Get New Joke
      </Button>
      </div>
</div>

</div>
<div className='max-w-4xl overflow-hidden '>
<WorkSection />
<SkillsSection />
</div>

        </div>
        

      </div>
   
  )
}