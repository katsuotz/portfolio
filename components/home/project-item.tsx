import Image from "next/image";
import {ExternalLinkIcon, XSquareIcon} from "lucide-react";
import Atropos from "atropos/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export interface ProjectType {
  logo: string
  name: string
  year: string
  description: string
  image: string
  url?: string
  highlight?: boolean
}

export default function ProjectItem({project}: { project:ProjectType }) {
  return (
    <Dialog>
      <DialogTrigger className="col col-span-3 rounded-3xl group/project intro-y">
        <Atropos className="atropos-project">
          <div
            className="px-4 h-[350px] bg-background-gradient rounded-3xl flex flex-col justify-center cursor-pointer relative">
            <ExternalLinkIcon className="absolute top-6 right-6 group-hover/project:opacity-100 opacity-0 transition-all duration-500"/>
            <div className="flex flex-col items-center relative">
              <Image src={project.logo} alt="" width={80} height={80} className="h-20 w-auto mb-8 group-hover/project:scale-110 group-hover/project:-translate-y-10 transition-all duration-300"/>
              <div className="text-center group-hover/project:-translate-y-14 group-hover/project:scale-105 transition-all duration-300">
                <p className="font-bold text-xl">{project.name}</p>
                <p className="font-bold text-xl">{project.year}</p>
              </div>
              <p className="absolute text-center px-4 bottom-0 opacity-0 translate-y-[100%] group-hover/project:opacity-100 group-hover/project:bottom-12 transition-all duration-300">
                {project.description}
              </p>
            </div>
          </div>
        </Atropos>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.name}</DialogTitle>
          <DialogDescription className="pb-2 text-white text-[1rem]">
            {project.description}
          </DialogDescription>
          <Image src={project.image} alt="" width="1000" height="900" className="rounded-lg"/>
          <div className="flex gap-2 justify-end mt-4">
            <DialogClose aria-label="Close">
              <Button variant="ghost">
                <XSquareIcon className="w-4 h-4 mr-2"/>
                Close
              </Button>
            </DialogClose>
            {
              project.url ?
                <Link href={project.url} target="_blank" className={buttonVariants({ variant: "default" })}>
                  <ExternalLinkIcon className="w-4 h-4 mr-2"/>
                  Visit
                </Link>
                : ''
            }
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
