'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  EnvelopeIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react'

export default function SocialMedia() {
  return (
    <>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild={true}>
            <a
              href="https://github.com/katsuotz/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Github</span>
              <GithubLogoIcon className="w-6 h-6" weight="light" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Github</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild={true}>
            <a
              href="https://www.linkedin.com/in/irfan-fakhri/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedinLogoIcon className="w-6 h-6" weight="light" />
            </a>
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild={true}>
            <a
              href="https://www.instagram.com/katsuotz/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <InstagramLogoIcon className="w-6 h-6" weight="light" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Instagram</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild={true}>
            <a
              href="mailto:m.irfan.fakhri66@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Email</span>
              <EnvelopeIcon className="w-6 h-6" weight="light" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Email</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
