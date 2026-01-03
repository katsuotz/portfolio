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

export default function TwoWeeksNewZealand() {
  return (
    <GlobalStateProvider>
      <ToggleDarkMode />
      <div className="relative flex flex-col justify-center items-center lg:pt-12 pt-12 lg:pb-20 pb-12">
        <div className="container max-w-[900px] flex flex-col gap-4">
          <h1 className="text-3xl sm:text-3xl text-center font-bold flex justify-center items-center text-blue-500 [text-shadow:_1px_1px_0_rgb(255_255_255_/_100%)]">
            {/*<CableCarIcon className="w-8 h-8 sm:w-10 sm:h-10 mr-4"/>*/}
            Exploring New Zealand's South Island in 2 Weeks
          </h1>
          <p className="text-center text-white/80">2024/11/30</p>
          <section>
            <div className="px-8 lg:px-0">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/mt cook.jpg"
                        alt="Mt. Cook"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Mt. Cook</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/lake tekapo - the church of the good shepherd.jpg"
                        alt="Lake Tekapo"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Lake Tekapo</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/the church of the good shepherd.jpg"
                        alt="The Church of The Good Shepherd"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">
                        The Church of The Good Shepherd
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/christchurch - tram.jpg"
                        alt="Christchurch - Tram"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Christchurch - Tram</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/countryside.jpg"
                        alt="Central Otago Countryside"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Central Otago Countryside</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/lindis pass viewpoint.jpg"
                        alt="Lindis Pass Viewpoint"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Lindis Pass Viewpoint</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/campsite.jpg"
                        alt="Campsite"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Campsite</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/hitchhikers.jpg"
                        alt="Campervan"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">
                        Me and My Friend met Manon, Hitchiker from French
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/lake tekapo - lavender.jpg"
                        alt="Campervan"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Lavender</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/sheep.jpg"
                        alt="Campervan"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Farmer's Sheep</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <div>
                      <Image
                        unoptimized={true}
                        width={0}
                        height={0}
                        src="/log/new-zealand/penguin.jpg"
                        alt="Penguin at Oamaru"
                        className="h-[320px] lg:h-[400px] w-auto object-contain"
                      />
                      <p className="text-center">Penguin at Oamaru</p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <h2 className="text-lg font-bold flex items-center text-blue-500">
              Itinerary Overview
            </h2>
            <p>Here’s my two weeks itinerary plan:</p>
            <ul className="pl-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li>
                <strong>Day 1:</strong> Flight from Jakarta to Christchurch.
              </li>
              <li>
                <strong>Day 2-4:</strong> Exploring Tekapo, Lake Pukaki, and
                Mount Cook.
              </li>
              <li>
                <strong>Day 5-6:</strong> Adventuring in Wanaka, including the
                famous Roys Peak hike.
              </li>
              <li>
                <strong>Day 7-10:</strong> Visiting Milford Sound via Te Anau
                and enjoying Queenstown’s vibrant energy.
              </li>
              <li>
                <strong>Day 11-12:</strong> Exploring Franz Josef and its
                stunning glaciers.
              </li>
              <li>
                <strong>Day 13-14:</strong> Scenic stops at Arthur’s Pass.
              </li>
              <li>
                <strong>Day 15-16:</strong> Wrapping up in Christchurch with
                city explorations.
              </li>
            </ul>

            <p className="italic mt-4">
              NB: If the weather is good, you can try to reverse the itinerary
              by going to Franz Josef first. I was a little bit unlucky and I
              couldn't go to Franz Josef from Queenstown because the road was
              closed due to slippery and I changed my itinerary by going back to
              Christchurch via Oamaru.
            </p>
          </section>

          <section>
            <div className="flex justify-center mb-4">
              <div>
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/iv6lTzOAGEs?si=0PKW9G_-6dMCULxp"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="text-center mt-2">
                  Mt. Cook Skydiving (13.000 ft)
                </p>
              </div>
            </div>

            <h2 className="text-lg font-bold flex items-center text-blue-500">
              Budget Breakdown
            </h2>

            <span className="italic text-gray-600 dark:text-gray-300">
              Rate: 1 NZD = IDR 9.700
            </span>

            <h3 className="font-bold">1. Flights (Round Trip)</h3>
            <p>
              <strong>Cost:</strong> IDR 11.500.000
            </p>
            <p>
              I booked my round-trip flight from Jakarta to Christchurch with a
              transit in Melbourne. Early booking helped me secure this price.
            </p>

            <h3 className="font-bold">2. Campervan Rental</h3>
            <p>
              <strong>Daily Rate:</strong> IDR 700.000–1.400.000
              <br />
              <strong>Duration:</strong> 14 days
              <br />
              <strong>Total:</strong> IDR 9.800.000–19.600.000
            </p>
            <p>
              The campervan was my home on wheels, saving money on
              accommodations while providing the flexibility to travel at my own
              pace. You can saved a lot of money if you travel by more than 2
              persons.
            </p>

            <h3 className="font-bold">3. Fuel</h3>
            <p>
              <strong>Total Cost:</strong> IDR 1.000.000
            </p>
            <p>
              Driving a campervan across the South Island involved long
              distances, but efficient route planning helped keep fuel costs
              reasonable.
            </p>

            <h3 className="font-bold">4. Food</h3>
            <p>
              <strong>Daily Budget:</strong> IDR 71.000–107.000
              <br />
              <strong>Total for 14 Days:</strong> IDR 1.000.000–1.500.000
            </p>
            <p>
              Most meals were prepared in the campervan’s kitchen, with
              occasional indulgences in local eateries.
            </p>

            <h3 className="font-bold">5. Campsites</h3>
            <p>
              While many campsites in New Zealand are free, I occasionally opted
              for paid sites with better facilities or stunning views.
            </p>
            <p>
              <strong>Cost:</strong> IDR 0–485.000 per night (Free–50 NZD)
              <br />
            </p>

            <h3 className="font-bold">6. Activities</h3>
            <p>
              One of the highlights of the South Island is the range of free
              activities, such as hiking. However, I also splurged on a few
              iconic paid activities:
            </p>
            <ul className="pl-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li>
                <strong>Milford Sound Cruise:</strong> IDR 776.000–1.746.000
                (80–180 NZD)
              </li>
              <li>
                <strong>Skydiving:</strong> IDR 2.910.000–5.335.000 (300–550
                NZD) + optional photo/video package for IDR 2.415.300–4.355.300
                (249–449 NZD)
              </li>
              <li>
                <strong>Bungee Jumping:</strong> IDR 3.104.000–3.783.000
                (320–390 NZD)
              </li>
              <li>
                <strong>Franz Josef Helicopter Ride:</strong> IDR
                2.425.000–4.850.000 (250–500 NZD)
              </li>
              <li>
                <strong>Akaroa Dolphin/Penguin Viewing:</strong> IDR 1.164.000
                (120 NZD)
              </li>
              <li>
                <strong>Penguin Viewing in Oamaru:</strong> IDR 194.000 (20 NZD)
              </li>
              <li>
                <strong>Miscellaneous Activities:</strong> IDR 97.000–485.000
                (10–50 NZD)
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold mb-2">Grand Total</h3>
            <table className="[&_th]:border [&_th]:border-white [&_td]:border [&_td]:border-white [&_td]:px-2">
              <tbody>
                <tr>
                  <th>Expense</th>
                  <th>Cost (IDR)</th>
                </tr>
                <tr>
                  <td>Flights</td>
                  <td>11.500.000</td>
                </tr>
                <tr>
                  <td>Campervan</td>
                  <td>9.800.000–19.600.000</td>
                </tr>
                <tr>
                  <td>Fuel</td>
                  <td>1.000.000</td>
                </tr>
                <tr>
                  <td>Food</td>
                  <td>1.000.000–1.500.000</td>
                </tr>
                <tr>
                  <td>Activities and others</td>
                  <td>5.000.000~20.000.000</td>
                </tr>
              </tbody>
            </table>
            <p className="italic mt-2">
              In total, I spent around IDR 50.000.000 more or less. I would say
              that IDR 40.000.000 is enough if have a tight budget. I also
              visited New Zealand on November which is almost summer and it's
              almost the peak season. You can try to visit before November or
              after February for much cheaper price.
            </p>
          </section>

          <section>
            <div className="flex justify-center mb-8">
              <iframe
                width="600"
                height="300"
                src="https://www.youtube.com/embed/R5MXCXK6RSQ?si=z8HF5ynee3Eq4Dm7"
                title="ESL One Kuala Lumpur Watching Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <h2 className="text-lg font-bold flex items-center text-blue-500">
              Highlights of the Journey
            </h2>
            <h3 className="font-bold">Free Activities</h3>
            <ul>
              <li>
                Hiking: The Hooker Valley Track, trails in Arthur’s Pass, etc.
              </li>
              <li>Scenic Views: Lake Pukaki, Tekapo, and Wanaka</li>
            </ul>

            <h3 className="font-bold mt-5">Paid Adventures</h3>
            <ul>
              <li>
                Skydiving and Helicopter Rides: These offered unparalleled views
                of New Zealand’s dramatic landscapes.
              </li>
              <li>
                Milford Sound Cruise: A must-do for its majestic fjords and
                cascading waterfalls.
              </li>
              <li>
                Wildlife Viewing: Dolphin and penguin watching in Akaroa and
                Oamaru was a delight.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold flex items-center text-blue-500">
              Tips
            </h2>
            <ul className="pl-6 text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li>
                <strong>Mix Free and Paid Activities:</strong> Enjoy hiking and
                scenic views while splurging on one or two premium adventures.
              </li>
              <li>
                <strong>Book Early:</strong> Flights, campervans, and activities
                often offer discounts for early reservations.
              </li>
              <li>
                <strong>Use Free Campsites:</strong> Apps like Campermate can
                help you find free or affordable camping spots.
              </li>
              <li>
                <strong>Cook Your Own Meals:</strong> Preparing meals in the
                campervan saves significantly on food costs.
              </li>
              <li>
                <strong>Be Fuel-Efficient:</strong> Plan routes to minimize
                unnecessary driving.
              </li>
              <li>
                <strong>Always Check the Weather and Road Conditions.</strong>
              </li>
            </ul>
          </section>

          <footer>
            <h2 className="text-lg font-bold flex items-center text-blue-500">
              Final Thoughts
            </h2>
            <p>
              Traveling to New Zealand’s South Island is a dream come true, and
              with proper planning, it’s achievable even on a budget. Whether
              you’re hiking through picturesque trails, cruising in Milford
              Sound, or soaring above glaciers in a helicopter, the memories
              made here will stay with you forever.
            </p>
          </footer>

          <div className="flex justify-center">
            <div>
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/kWu_dpsIgPs?si=vlVYRR-yXD3rzqtd"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="text-center mt-2">
                Penguin Crossing the Road at Oamaru
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
      <Footer showGradient={false} />
    </GlobalStateProvider>
  )
}
