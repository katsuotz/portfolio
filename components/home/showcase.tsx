'use client'

import { TvMinimalPlayIcon } from 'lucide-react'
import ShowcaseItem, { ShowcaseType } from '@/components/home/showcase-item'

export default function Showcase() {
  const showcases: ShowcaseType[] = [
    {
      name: 'Middle Space - Mobile Web Game',
      image: '/code/middle-space.jpg',
      url: 'https://middle-space.katsuotz.com/',
      src: 'https://github.com/katsuotz/middle-space',
      cardClassName: 'h-full',
      className: 'col-span-12 md:col-span-6',
      highlight: true,
      livePreview: false,
    },
    {
      name: 'Loader CSS',
      src: [
        {
          type: 'html',
          src: '/code/loader.html',
        },
      ],
      className: 'col-span-12 md:col-span-6 h-full',
      cardClassName: 'h-full',
      iframeClassName: 'w-full grow',
      highlight: true,
      livePreview: true,
    },
    {
      name: 'Rotary Cube CSS',
      src: [
        {
          type: 'html',
          src: '/code/cube.html',
        },
      ],
      className: 'col-span-12',
      iframeClassName: 'w-full min-h-[400px]',
      highlight: true,
      livePreview: true,
    },
    {
      name: 'Clock',
      src: [
        {
          type: 'html',
          src: '/code/clock/index.html',
        },
      ],
      className: 'col-span-12 md:col-span-6',
      iframeClassName: 'w-full aspect-square',
      highlight: true,
      livePreview: true,
    },
    {
      name: 'Drawing canvas',
      src: [
        {
          type: 'html',
          src: '/code/drawing-canvas/index.html',
        },
        {
          type: 'css',
          src: '/code/drawing-canvas/style.css',
        },
        {
          type: 'js',
          src: '/code/drawing-canvas/app.js',
        },
      ],
      className: 'col-span-12 md:col-span-6',
      cardClassName: 'h-full',
      iframeClassName: 'w-full h-full min-h-[700px]',
      highlight: true,
      livePreview: true,
    },
  ]

  return (
    <section className="relative flex flex-col justify-center items-center lg:pt-20 pt-12 lg:pb-20 pb-12">
      <h3 className="text-3xl sm:text-5xl font-bold mb-4 md:mb-12 flex items-center">
        <TvMinimalPlayIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4" />
        Showcases
      </h3>

      <div className="container">
        <p className="text-center mb-6 md:text-lg">
          Welcome to my showcase — a collection of projects I crafted from
          scratch during my competitive journey between 2018 and 2020.
        </p>
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {showcases.map((showcase, key) => {
            return <ShowcaseItem showcase={showcase} key={key} />
          })}
        </div>
      </div>
    </section>
  )
}
