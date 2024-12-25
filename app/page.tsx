'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Tilt } from 'react-tilt'
import { MapPin, Star, Download, Clock, ArrowDownIcon, Users, ArrowDown, CodeXmlIcon, RefreshCcw } from 'lucide-react'
import Link from 'next/link'
import WorkSection from './components/Work'
import SkillsSection from './components/Skills'
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardContent, CardTitle, CardHeader } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'


interface Project {
  name: string
  users: string
  stars: number
  image: string
  link: string
  download: string
}

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState({ wat: '', gmt: '' })
  const [joke, setJoke] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [scrollY, setScrollY] = useState(0)

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
      stars: 3,
      image: '/WhatsApp Image 2024-10-10 at 5.27.22 AM.jpeg',
      link: 'https://nuwellx.vercel.app/',
      download: "100+"
    },
    {
      name: 'Solar Bridge',
      link: "https://solarbridge.vercel.app/",
      image: '/solar.png',
      stars: 2,
      download: "2",
      users: '12/M'
    },
    {
      name: 'Drops Tracker',
      users: '20+/M',
      stars: 1,
      image: '/drops.png',
      link: 'https://drops-tracker.vercel.app/home',
      download: "80"
    },
    {
      name: 'Ai Article Summarizer',
      link: 'https://enigmaaisummarizer.vercel.app/',
      image: '/summ.png',
      stars: 1,
      download: "24",
      users: "56/M"
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.clientWidth
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
    }
  }

  const router = useRouter()

  useEffect(() => {
    const handleScrollY = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScrollY)
    return () => {
      window.removeEventListener('scroll', handleScrollY)
    }
  }, [])
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
        <div className="flex flex-row md:flex-row items-center mt-24 mb-12">

          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold mb-2">Hello,</h1>
            <h2 className="text-5xl font-bold mb-4">I'm <span className='animate-pulse'>ENIGMA.</span></h2>
            <p className="text-sm md:text-xl text-gray-300 max-w-2xl">
              I am a software developer specialized in developing modern frontend infrastructures, I am content writer who writes mostly blockchain related stuff, A student food technologist who doesn't Cook!'
              My passion is building stuff that makes life easier for everyone. I also have interests in AI and ML tech!
            </p>
          </div>

        </div>



        {/* Featured Projects */}
        <div className=" my-24">
          <h3 className="text-xl font-bold mb-6">Featured Projects</h3>
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-6 pb-1 scrollbar-hide"
              onScroll={handleScroll}
              
            >
              {featuredProjects.map((project) => (
               <Card key={project.name} onClick={() => router.push(`${project.link}`)} className="flex-shrink-0 w-72 h-56 cursor-pointer bg-gray-900 text-white">
               <CardHeader className="p-0">
                 <div className="relative h-56">
                   <Image
                     src={project.image}
                     alt={project.name}
                     layout="fill"
                     objectFit="cover"
                   />
                   {/* Dark overlay for text visibility */}
                   <div className="absolute inset-0 bg-black opacity-50"></div>
             
                   {/* Project Name and Users */}
                   <div className="absolute bottom-4 left-4 z-10">
                     <p className="text-xl mb-1">{project.name}</p>
                     <div className="flex items-center text-sm">
                       <Users className="w-4 h-4 mr-2 text-white" />
                       <p className="text-white">{project.users}</p>
                     </div>
                   </div>
             
                   {/* Download icon at top-left */}
                   <div className="absolute top-2 left-4 z-10 flex items-center">
                     <Download className="w-4 h-4 mr-2 text-white" />
                     <span className="text-sm text-white">{project.download}</span>
                   </div>
             
                   {/* Star icon at top-right */}
                   <div className="absolute top-2 right-4 z-10 flex items-center">
                     <Star className="w-4 h-4 mr-2 text-white" />
                     <span className="text-sm text-white">{project.stars}</span>
                   </div>
                 </div>
               </CardHeader>
               <CardContent className="px-4 py-1 "></CardContent>
               <CardFooter className="flex justify-between items-center"></CardFooter>
             </Card>
             
             
              ))}
            </div>
            {canScrollLeft && (
              <Button 
                onClick={() => scroll('left')} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-2"
                variant="secondary"
                size="icon"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            )}
            {canScrollRight && (
              <Button 
                onClick={() => scroll('right')} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2"
                variant="secondary"
                size="icon"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            )}
          </div>
         

          </div>

          {/* <div className="min-h-screen mt-12 text-white opacity-60 inset-0 bg-cover bg-center" 
           style={{
            backgroundImage: "url('/omo.jpg')",
          
          }}> */}
      {/* Hero section with parallax effect */}
      {/* <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/omo.jpg')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center"><CodeXmlIcon /></h1>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-4">
            <h3 className="text-base font-bold">
              keep scrolling <ArrowDown className="inline animate-bounce" />
            </h3>
          </div>
        </div> */}
        {/* </div> */}
        {/* </div> */}

        
        
        <div className='max-w-4xl overflow-hidden '>
          <WorkSection />
          <SkillsSection />
        </div>
        <div className="">
            <div className="mt-4">
              <h3 className="text-sm text-foreground text-gray-100 mb-2">--</h3>
              <p className="text-xl text-gray-300">"{joke}"</p>

              <Button
                className=" text-white my-2 px-4 py-2 rounded" variant="link"
                onClick={fetchJoke}
              >
                <RefreshCcw className='ml-2 h-4 w-4' />
              </Button>
            </div>

        </div>
      </div>

</div>


  )
}