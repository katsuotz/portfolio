import Project from "@/components/home/project";
import Footer from "@/components/home/footer";
import Link from "next/link";
import {ArrowLeftCircleIcon} from "lucide-react";
import BackToTop from "@/components/home/back-to-top";

export default function Home() {
  return (
    <>
      <div className="container mt-10">
        <Link href="/" className="flex items-center text-lg">
          <ArrowLeftCircleIcon className="mr-3 w-5 h-5"/>
          Back
        </Link>
      </div>
      <Project showAllProjects={true}/>
      <BackToTop/>
      <Footer/>
    </>
  )
}
