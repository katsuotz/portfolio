import Image from 'next/image'
import { ExternalLinkIcon, XSquareIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export interface ProjectType {
  logo: string
  name: string
  year: string
  description: string
  image: string
  url?: string
  highlight?: boolean
}

export default function ProjectItem({
  project,
  index = 0,
}: {
  project: ProjectType
  index?: number
}) {
  const bgColors = [
    'bg-pink-300 dark:bg-pink-800',
    'bg-cyan-300 dark:bg-cyan-800',
    'bg-orange-300 dark:bg-orange-700',
    'bg-lime-300 dark:bg-lime-700',
    'bg-fuchsia-300 dark:bg-fuchsia-800',
  ]
  const bgColor = bgColors[index % bgColors.length]

  return (
    <Dialog>
      <DialogTrigger className="col col-span-12 sm:col-span-6 lg:col-span-4 group text-left">
        <span className="sr-only">{project.name}</span>
        <div
          className={`w-full h-[280px] sm:h-[350px] flex flex-col justify-between border-4 border-black dark:border-white p-6 ${bgColor} shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] transition-transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-none dark:hover:shadow-none cursor-pointer relative overflow-hidden`}
        >
          <div className="absolute top-4 right-4 bg-white dark:bg-black border-2 border-black dark:border-white p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <ExternalLinkIcon className="w-5 h-5 text-black dark:text-white" />
          </div>

          <div className="flex justify-between items-start z-10">
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-3 group-hover:scale-110 transition-transform origin-top-left">
              <Image
                loading="lazy"
                src={project.logo}
                alt={project.name}
                width={80}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          <div className="z-10 bg-white/90 dark:bg-black/90 p-4 border-2 border-black dark:border-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <p className="font-black text-xl md:text-2xl uppercase tracking-tighter text-black dark:text-white leading-none line-clamp-1 mb-2">
              {project.name}
            </p>
            <p className="font-bold text-sm uppercase text-black dark:text-white border-b-2 border-black dark:border-white pb-2 mb-2 inline-block">
              {project.year}
            </p>
            <p className="font-medium text-sm text-black dark:text-white line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="border-4 border-black dark:border-white bg-white dark:bg-zinc-950 p-6 sm:p-8 max-w-4xl rounded-none shadow-[16px_16px_0_0_#000] dark:shadow-[16px_16px_0_0_#fff]">
        <DialogHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b-4 border-black dark:border-white">
            <div className="flex items-center gap-4">
              <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-2">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={64}
                  height={64}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <DialogTitle className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-black dark:text-white leading-none">
                  {project.name}
                </DialogTitle>
                <div className="inline-flex bg-black dark:bg-white text-white dark:text-black font-bold px-3 py-1 mt-2 uppercase text-sm">
                  {project.year}
                </div>
              </div>
            </div>

            <DialogClose
              aria-label="Close"
              className="absolute right-6 top-6 md:relative md:right-0 md:top-0 border-2 border-black dark:border-white p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              <XSquareIcon className="w-6 h-6" />
            </DialogClose>
          </div>

          <div className="border-4 border-black dark:border-white mb-6 relative">
            <Image
              loading="lazy"
              src={project.image}
              alt={project.name}
              width="1200"
              height="800"
              className="w-full h-auto object-cover"
            />
          </div>

          <DialogDescription className="text-base md:text-lg font-medium text-black dark:text-white mb-8 border-l-4 border-black dark:border-white pl-4">
            {project.description}
          </DialogDescription>

          <div className="flex justify-end pt-6 border-t-4 border-black dark:border-white">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border-4 border-black dark:border-white bg-blue-400 dark:bg-blue-600 px-6 py-3 font-black uppercase text-black dark:text-white shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all"
              >
                Visit Project
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
