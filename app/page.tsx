import Banner from "@/components/home/banner";
import WorkExperience from "@/components/home/work-experience";
import Education from "@/components/home/education";
import Achievement from "@/components/home/achievement";
import Skills from "@/components/home/skills";
import Footer from "@/components/home/footer";
import BackToTop from "@/components/home/back-to-top";

export default function Home() {
  return (
    <div>
      <Banner/>
      <WorkExperience/>
      <Education/>
      <Achievement/>
      <Skills/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}
