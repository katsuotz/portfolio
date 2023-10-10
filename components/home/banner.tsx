import Id from "@/components/home/id";
import {ArrowDownCircle, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, MapIcon} from "lucide-react";

export default function Banner() {
  const year = new Date().getFullYear()
  const startYear = 2018

  return (
    <section className="h-screen w-full relative flex justify-center items-center">
      <Id className="absolute -z-10 opacity-20 w-[1000px]"/>

      <div>
        <h1 className="text-[190px] font-black leading-[160px] shadow tracking-wider">
          <span className="text-white/[0.5]">Irfan</span>
          <span className="block">Fakhri</span>
        </h1>
        <p className="text-3xl mt-8">
          <span className="block">Full-stack engineer</span>
          <span className="block">Frontend engineer</span>
          <span className="block">{year - startYear}+ years experience</span>
        </p>
        <div className="flex gap-4 mt-6">
          <a href="https://github.com/katsuotz/" target="_blank">
            <GithubIcon className="w-6 h-6"/>
          </a>
          <a href="https://www.linkedin.com/in/irfan-fakhri/" target="_blank">
            <LinkedinIcon className="w-6 h-6"/>
          </a>
          <a href="https://www.instagram.com/katsuotz/" target="_blank">
            <InstagramIcon className="w-6 h-6"/>
          </a>
        </div>
        <div className="flex justify-center mt-14">
          <div className="relative w-8-h-8 flex justify-center items-center cursor-pointer motion-reduce:animate-bounce">
            <ArrowDownCircle className="w-8 h-8"/>
          </div>
        </div>

        <div className="absolute top-0 left-0 pl-10 pt-10">
          <p className="flex items-center"><MailIcon className="w-4 h-4 mr-2"/> m.irfan.fakhri66@gmail.com</p>
          <p className="flex items-center"><MapIcon className="w-4 h-4 mr-2"/> Indonesia</p>
        </div>
      </div>
    </section>
  )
}
