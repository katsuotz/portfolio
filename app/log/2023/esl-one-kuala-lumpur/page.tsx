'use client'

import Footer from '@/components/home/footer'
import BackToTop from '@/components/home/back-to-top'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ToggleDarkMode from '@/components/home/toggle-dark-mode'
import { GlobalStateProvider } from '@/context/GlobalStateContext'

export default function EslOneKualaLumpur() {
  return (
    <GlobalStateProvider>
      <ToggleDarkMode />
      <section className="relative flex flex-col justify-center items-center lg:pt-12 pt-12 lg:pb-20 pb-12">
        <div className="container max-w-[900px] flex flex-col gap-4">
          <h1 className="text-3xl sm:text-3xl text-center font-bold flex justify-center items-center text-blue-500 [text-shadow:_1px_1px_0_rgb(255_255_255_/_100%)]">
            {/*<CableCarIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>*/}
            ESL One Kuala Lumpur Experience
          </h1>
          <p className="text-center text-white/80">2023/12/17</p>

          <p>
            A few months ago beore ESL One Kuala Lumpur 2023, my friend and I
            went to the Bali Major to watch a Dota 2 tournament. The Bali Major
            event was decent, but the vibe felt quite chill because the venue
            wasn’t very big. When ESL announced a new event called ESL One Kuala
            Lumpur 2023, with a much larger and more affordable venue than the
            Bali Major, we thought, why not give it a try?
          </p>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500">
              Ticket Comparison
            </h4>
            <p className="font-bold text-sm">
              Bali Major Standard Ticket: ~IDR 7,200,000
            </p>
            <p className="font-bold text-sm">
              ESL One Standard Ticket: ~IDR 630,000
            </p>
            <p>
              You can literally buy more than 10 ESL tickets for the price of
              one Bali Major ticket.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500">
              Place to Stay
            </h4>
            <p>
              I stayed near the venue at an Airbnb called Arte Mont Kiara. It’s
              about a 10-minute walk to the ESL One KL venue at the Malaysia
              International Trade and Exhibition Centre (MITEC).
            </p>
            <p>
              It’s an apartment-style accommodation. The total price was{' '}
              <b>IDR 3,900,000</b> for 7 nights. Since we stayed together (3
              people), it only cost <b>IDR 186,000 per night</b> each.
            </p>
            <p>
              Arte Mont Kiara:{' '}
              <a
                href="https://maps.app.goo.gl/YwBq2zbKQLUCQMyTA"
                target="_blank"
                rel="noreferrer"
              >
                🔗 https://maps.app.goo.gl/YwBq2zbKQLUCQMyTA
              </a>
            </p>
            <p>
              MITEC:{' '}
              <a
                href="https://maps.app.goo.gl/Z5ZdVFfPU9gTVEe1A"
                target="_blank"
                rel="noreferrer"
              >
                🔗 https://maps.app.goo.gl/Z5ZdVFfPU9gTVEe1A
              </a>
            </p>
            <Image
              unoptimized={true}
              width={0}
              height={0}
              src="/log/kuala-lumpur/arte-mitec.jpg"
              alt="Arte Mont Kiara to MITEC"
              className="w-full"
            />
            <p className="text-center">Map from Arte Mont Kiara to MITEC</p>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500">
              Venue
            </h4>
            <p>
              This was my first time attending an e-sports event with such a big
              stage. There were so many things to see live. From my seat, I
              could clearly see the players, hosts, panelists, and casters,
              which made the experience much more immersive.
            </p>
            <p>
              For reference, when I attended the Bali Major, the panelists and
              casters weren’t even at the venue. They cast the event from a
              hotel, which felt very odd.
            </p>
            <div className="px-8 lg:px-0 pt-4">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      unoptimized={true}
                      width={0}
                      height={0}
                      src="/log/kuala-lumpur/esl-one-1.jpg"
                      alt="ESL One KL Venue"
                      className="w-full"
                    />
                    <p className="text-center">ESL One KL Venue</p>
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      unoptimized={true}
                      width={0}
                      height={0}
                      src="/log/kuala-lumpur/esl-one-2.jpg"
                      alt="ESL One KL Venue (Outside)"
                      className="w-full"
                    />
                    <p className="text-center">ESL One KL Venue (Outside)</p>
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      unoptimized={true}
                      width={0}
                      height={0}
                      src="/log/kuala-lumpur/esl-one-3.jpg"
                      alt="ESL One KL Venue (Outside)"
                      className="w-full"
                    />
                    <p className="text-center">ESL One KL Venue (Outside)</p>
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      unoptimized={true}
                      width={0}
                      height={0}
                      src="/log/kuala-lumpur/esl-one-4.jpg"
                      alt="Marci Caninus Drawing"
                      className="w-full"
                    />
                    <p className="text-center">Marci - Caninus Drawing</p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500">
              Watching Experience
            </h4>
            <p>
              This was the best live event I’ve ever attended, with so many cool
              effects for big ultimates. The caster’s enthusiasm was amazing,
              and the overall venue vibe was unbeatable!
            </p>
            <div className="flex">
              <iframe
                width="600"
                height="300"
                src="https://www.youtube.com/embed/_4iuQcMY86I?si=Jo9Eth19YEL-4vE5"
                title="ESL One Kuala Lumpur Watching Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500">
              Booth, Foods, and Merch
            </h4>
            <p>The booths, food, and merchandise were fantastic at ESL One.</p>
            <p>
              The booths offered various activities like airbrush tattoos, Intel
              Solo Mid 1v1, Intel Racing Area, DHL Spin, DHL VR Game, Tarot
              Reading, and more.
            </p>
            <p>
              The food options were plentiful, including Nasi Goreng, Malaysian
              dishes, and Mexican food like tacos. The prices were reasonable
              for such an event, starting at around <b>RM 10 (IDR 34,000)</b>.
              Free Monster Energy drinks were also available.
            </p>
            <p>
              ESL One merchandise included team jerseys, ESL apparel, hero
              T-shirts, plushies, and gacha plushies. By the third day, most
              items were sold out. I managed to buy the last Team Secret jersey
              in XS and some plushies. Jerseys were priced at{' '}
              <b>RM 270–320 (IDR 900,000–1,100,000)</b>, while plushies were
              affordable at RM 20–40 (IDR 69,000–138,000) with a buy-1-get-1
              deal. Hero T-shirts were also on sale with the same deal for only{' '}
              <b>RM 38 (IDR 128,000)</b>.
            </p>
            <div className="flex">
              <iframe
                width="600"
                height="300"
                src="https://www.youtube.com/embed/2pmUzfIVzeo?si=eDKfSQk9MOAgDFGw"
                title="ESL Kuala Lumpur Booth"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold flex items-center text-blue-500">
              Vlog
            </h4>
            <p>
              While in KL, I streamed my walk from the apartment to the venue.
              You can check out the VOD from my stream below. It was a wonderful
              experience for me.
            </p>
            <p>
              ESL One KL Venue Review:
              <a
                href="https://www.twitch.tv/videos/2006148619"
                target="_blank"
                rel="noreferrer"
              >
                🔗 https://www.twitch.tv/videos/2006148619
              </a>
            </p>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </GlobalStateProvider>
  )
}
