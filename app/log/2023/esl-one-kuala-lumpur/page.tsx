'use client'

import Footer from "@/components/home/footer";
import BackToTop from "@/components/home/back-to-top";
import Image from "next/image";
import '@/app/log/log.css'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function EslOneKualaLumpur() {
  return (
    <>
      <section className="relative flex flex-col justify-center items-center lg:pt-12 pt-12 lg:pb-20 pb-12">
        <h3
          className="text-3xl sm:text-3xl font-bold mb-8 flex items-center text-blue-500 [text-shadow:_1px_1px_0_rgb(255_255_255_/_100%)]">
          {/*<CableCarIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>*/}
          ESL One Kuala Lumpur Experience
        </h3>

        <div className="container max-w-[900px]">
          <p>Few months ago, my friend and I went to Bali Major to watch Dota 2 Tournament. The Bali Major event was
            kinda okay but I think the vibe was really chill because the venue wasn't that big. When ESL announced that
            they will make new event called ESL One Kuala Lumpur 2023 and the venue is much more bigger and much cheaper
            than Bali Major, so why don't we give it a try.</p>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500 mt-4">Ticket Comparison</h4>
            <p className="font-bold text-sm">Bali Major Standard Ticket: ~IDR 7.200.000</p>
            <p className="font-bold text-sm">ESL One Standard Ticket: ~IDR 630.000</p>
            <p>You can literally buy more than 10 ESL tickets for a single ticket in Bali Major.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500 mt-4">Place to Stay</h4>
            <p>I stay near the venue at Airbnb called Arte Mont Kiara, it's about 10 minutes walk to ESL One KL venue at
              Malaysia International Trade and Exhibition Centre (MITEC).</p>
            <p>It's like an apart. The price was <b>IDR 3.900.000</b> for 7 nights and because we stayed together (3
              people) it's only <b>IDR 186.000 a night</b>.</p>
            <p>Arte Mont Kiara: <a href="https://maps.app.goo.gl/YwBq2zbKQLUCQMyTA"
                                   target="_blank">🔗 https://maps.app.goo.gl/YwBq2zbKQLUCQMyTA</a></p>
            <p>MITEC: <a href="https://maps.app.goo.gl/Z5ZdVFfPU9gTVEe1A" target="_blank">🔗
              https://maps.app.goo.gl/Z5ZdVFfPU9gTVEe1A</a></p>
            <Image unoptimized={true} width={0} height={0} src="/log/kuala-lumpur/arte-mitec.jpg"
                   alt="Arte Mont Kiara to MITEC" className="w-full"/>
            <p className="text-center">Maps from Arte Mont Kiara to MITEC</p>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500 mt-4">Venue</h4>
            <p>This is the first time I came to e-sport event with this big stage. There are so many things I can see
              live. From above, I can see players, host, panel, and caster clearly, so I can feel the vibe much better
              here.</p>
            <p>For reference: When I came to Bali Major, the panel and caster aren't even in the venue. They cast the
              event from hotel which is very weird.</p>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image unoptimized={true} width={0} height={0} src="/log/kuala-lumpur/esl-one-1.jpg"
                         alt="Arte Mont Kiara to MITEC" className="w-full"/>
                  <p className="text-center">ESL One KL Venue</p>
                </CarouselItem>
                <CarouselItem>
                  <Image unoptimized={true} width={0} height={0} src="/log/kuala-lumpur/esl-one-2.jpg"
                         alt="Malaysia International Trade and Exhibition Centre" className="w-full"/>
                  <p className="text-center">ESL One KL Venue (Outside)</p>
                </CarouselItem>
                <CarouselItem>
                  <Image unoptimized={true} width={0} height={0} src="/log/kuala-lumpur/esl-one-3.jpg"
                         alt="Malaysia International Trade and Exhibition Centre" className="w-full"/>
                  <p className="text-center">ESL One KL Venue (Outside)</p>
                </CarouselItem>
                <CarouselItem>
                  <Image unoptimized={true} width={0} height={0} src="/log/kuala-lumpur/esl-one-4.jpg"
                         alt="Caninus Marci" className="w-full"/>
                  <p className="text-center">Marci - Caninus Drawing</p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext/>
            </Carousel>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500 mt-4">Watching Experience</h4>
            <p>I think this was the best live event with so many cool effects that I ever watch. There are so many different vfx for a big ultimate. The caster hype was also really amazing! And the venue vibe? Couldn't be any better.</p>
            <div className="flex">
              <iframe width="600" height="300" src="https://www.youtube.com/embed/_4iuQcMY86I?si=Jo9Eth19YEL-4vE5"
                      title="ESL One Kuala Lumpur Watching Experience" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500 mt-4">Booth, Foods, and Merch</h4>
            <p>Booth? Foods? Merch? ESL just nailed it.</p>
            <p>There are a lot of things you can do in the booth, there are Airbrush Tattoo, Intel Solo Mid 1v1, Intel
              Racing Area, DHL spin, DHL VR Game, Tarot Reading, etc.</p>
            <p>There are so many food you can choose to, you can get Nasi Goreng, Malaysian Food, and Mexican Food like
              Taco. The foods are pretty cheap for this kind of event, it was start from around <b>RM 10 (IDR
                34.000)</b>. You can also get free Monster Energy drink.</p>
            <p>ESL One merch has various variations. There are Team Jerseys, ESL Apparels, Hero T-Shirts, Plushies,
              Gacha Plushies, etc. I came at the third day so it was almost sold out. I bought the last Team Secret
              jersey for XS size and some plushies. For the price, jerseys are pretty expensive as usual <b>RM 270 - 320 (IDR 900.000 - 1.100.000)</b>,
              plushies was pretty cheap because it was buy 1 free 1 and it was only RM 20 - 40 (RM 69.000 - 138.000). Same with Hero T-Shirts it was very cheap and it was also buy 1 free 1 for only <b>RM 38 (IDR 128.000)</b>
            </p>
            <div className="flex">
              <iframe width="600" height="300" src="https://www.youtube.com/embed/2pmUzfIVzeo?si=eDKfSQk9MOAgDFGw"
                      title="ESL Kuala Lumpur Booth" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500 mt-4">Vlog</h4>
            <p>When I was in KL, I streamed while walking from my apart to the venue. You can check it out the VOD from
              my stream below, it was a new wonderful experience for me.</p>
            <p>ESL One KL Venue Review:
              <a href="https://www.twitch.tv/videos/2006148619" target="_blank">🔗 https://www.twitch.tv/videos/2006148619</a>
            </p>
          </div>
        </div>
      </section>

      <BackToTop/>
      <Footer/>
    </>
  )
}
