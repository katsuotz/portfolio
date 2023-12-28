import Footer from "@/components/home/footer";
import BackToTop from "@/components/home/back-to-top";
import '@/app/log/log.css'
import Link from "next/link";
export default function Log() {
  return (
    <>
      <section className="relative flex flex-col justify-center items-center lg:pt-12 pt-12 lg:pb-20 pb-12">
        <h3
          className="text-3xl sm:text-3xl font-bold mb-8 flex items-center text-blue-500 [text-shadow:_1px_1px_0_rgb(255_255_255_/_100%)]">
          {/*<CableCarIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>*/}
          Katsuotz's Logs
        </h3>

        <div className="container max-w-[600px]">
          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500 mt-4">2023</h4>
            <p>ESL One Kuala Lumpur (2023/12/17): <br/>
              <Link className="text-blue-500" href="/log/2023/esl-one-kuala-lumpur">🔗 https://maps.app.goo.gl/YwBq2zbKQLUCQMyTA</Link>
            </p>
          </div>
        </div>
      </section>

      <BackToTop/>
      <Footer/>
    </>
  )
}
