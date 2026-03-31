import Image from 'next/image'
import {
  ArrowSquareOutIcon,
  XSquareIcon,
  ArrowRightIcon,
} from '@phosphor-icons/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
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

export default function ProjectItem({ project }: { project: ProjectType }) {
  return (
    <Dialog>
      <DialogTrigger className="w-full text-left group/project block h-full cursor-pointer">
        <span className="sr-only">{project.name}</span>
        <div className="h-full min-h-[350px] p-8 flex flex-col relative overflow-hidden rounded-2xl bg-white/2 backdrop-blur-xl border border-white/5 hover:bg-white/4 hover:border-violet-500/30 transition-all duration-500 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
          {/* Subtle hover gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-transparent opacity-0 group-hover/project:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex justify-between items-start mb-12 relative z-10">
            <div className="w-16 h-16 rounded-xl bg-white/3 flex items-center justify-center border border-white/5 group-hover/project:border-violet-500/20 group-hover/project:scale-105 transition-all duration-500 shadow-lg p-2">
              <Image
                loading="lazy"
                src={project.logo}
                alt={project.name}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-10 h-10 rounded-full bg-white/3 flex items-center justify-center border border-white/5 text-gray-500 group-hover/project:bg-violet-600 group-hover/project:text-white group-hover/project:border-violet-500 transition-all duration-300">
              <ArrowRightIcon
                className="w-4 h-4 -rotate-45 group-hover/project:rotate-0 transition-transform duration-300"
                weight="light"
              />
            </div>
          </div>

          <div className="mt-auto relative z-10">
            <p className="text-violet-400 font-mono text-xs tracking-wider mb-2">
              {project.year}
            </p>
            <h3 className="font-serif font-bold text-2xl text-[#FAFAFA] mb-3 group-hover/project:text-white transition-colors">
              {project.name}
            </h3>

            {/* Description - visible on mobile, hover-reveal on desktop */}
            <div className="hidden md:block h-0 group-hover/project:h-[70px] opacity-0 group-hover/project:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
              <p className="text-gray-400 text-sm font-light line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="md:hidden mt-2">
              <p className="text-gray-400 text-sm font-light line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#050505] border-white/10 text-[#FAFAFA] sm:max-w-3xl">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/3 flex items-center justify-center border border-white/5 p-2">
              <Image
                src={project.logo}
                alt={project.name}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <DialogTitle className="text-3xl font-serif font-bold text-white tracking-tight">
                {project.name}
              </DialogTitle>
              <p className="text-violet-400 font-mono text-sm">
                {project.year}
              </p>
            </div>
          </div>

          <DialogDescription className="pb-4 text-gray-400 text-base leading-relaxed">
            {project.description}
          </DialogDescription>

          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              loading="lazy"
              src={project.image}
              alt={project.name}
              width="1000"
              height="600"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </div>

          <div className="flex gap-3 justify-end mt-6">
            <DialogClose aria-label="Close" asChild>
              <Button
                variant="ghost"
                className="hover:bg-white/5 hover:text-white text-gray-400"
              >
                <XSquareIcon className="w-4 h-4 mr-2" weight="light" />
                Close
              </Button>
            </DialogClose>
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-violet-600 text-white hover:bg-violet-500 h-9 px-4 py-2 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                <ArrowSquareOutIcon className="w-4 h-4 mr-2" weight="light" />
                Visit Project
              </Link>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
