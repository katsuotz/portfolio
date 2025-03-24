'use client'

import Showcase from "@/components/home/showcase";
import Footer from "@/components/home/footer";
import Link from "next/link";
import {ArrowLeftCircleIcon} from "lucide-react";
import BackToTop from "@/components/home/back-to-top";
import ToggleDarkMode from "@/components/home/toggle-dark-mode";
import {GlobalStateProvider} from "@/context/GlobalStateContext";

export default function Showcases() {
  return (
    <GlobalStateProvider>
      <ToggleDarkMode/>
      <div className="container pt-10">
        <Link href="/" className="flex items-center text-lg">
          <ArrowLeftCircleIcon className="mr-3 w-5 h-5"/>
          Back
        </Link>
      </div>
      <Showcase/>
      <BackToTop/>
      <Footer/>
    </GlobalStateProvider>
  )
}
