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

export default function ProjectItem({ project }: { project: ProjectType }) {
  return (
    <Dialog>
      <DialogTrigger className="col col-span-12 sm:col-span-6 md:col-span-3 rounded-3xl group/project intro-y">
        <span className="sr-only">{project.name}</span>
        <div className="px-4 sm:h-[350px] h-[240px] flex flex-col justify-center relative cursor-pointer overflow-hidden rounded-3xl glass-card-enhanced hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300">
          <ExternalLinkIcon className="absolute top-6 right-6 md:group-hover/project:opacity-100 opacity-0 transition-all duration-500 text-blue-500 dark:text-blue-400" />
          <div className="flex flex-col items-center relative">
            <Image
              loading="lazy"
              src={project.logo}
              alt={project.name}
              width={80}
              height={80}
              className="h-20 w-auto mb-8 md:group-hover/project:scale-110 md:group-hover/project:-translate-y-10 transition-all duration-300"
            />
            <div className="text-center md:group-hover/project:-translate-y-14 md:group-hover/project:scale-105 transition-all duration-300">
              <p className="font-bold text-xl text-slate-800 dark:text-slate-100">
                {project.name}
              </p>
              <p className="font-bold text-xl text-blue-600 dark:text-blue-400 mt-1">
                {project.year}
              </p>
            </div>
            <p className="absolute text-center px-4 bottom-0 opacity-0 translate-y-[100%] md:group-hover/project:opacity-100 group-hover/project:bottom-12 transition-all duration-300 text-slate-600 dark:text-slate-300 font-medium">
              {project.description}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.name}</DialogTitle>
          <DialogDescription className="pb-2 text-white text-[1rem]">
            {project.description}
          </DialogDescription>
          <div className="flex justify-center">
            <Image
              loading="lazy"
              src={project.image}
              alt={project.name}
              width="1000"
              height="600"
              className="rounded-lg"
            />
          </div>
          <div className="flex gap-2 justify-end mt-4">
            <DialogClose aria-label="Close">
              <Button variant="ghost">
                <XSquareIcon className="w-4 h-4 mr-2" />
                Close
              </Button>
            </DialogClose>
            {project.url ? (
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: 'default' })}
              >
                <ExternalLinkIcon className="w-4 h-4 mr-2" />
                Visit
              </Link>
            ) : (
              ''
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
