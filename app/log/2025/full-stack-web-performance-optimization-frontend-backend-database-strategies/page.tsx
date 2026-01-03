'use client'

import Footer from '@/components/home/footer'
import BackToTop from '@/components/home/back-to-top'
import Image from 'next/image'
import ToggleDarkMode from '@/components/home/toggle-dark-mode'
import { GlobalStateProvider } from '@/context/GlobalStateContext'

export default function TwoWeeksNewZealand() {
  return (
    <GlobalStateProvider>
      <ToggleDarkMode />
      <div className="relative flex flex-col justify-center items-center lg:pt-12 pt-12 lg:pb-20 pb-12">
        <div className="container max-w-[900px] flex flex-col gap-4">
          <h1 className="text-3xl sm:text-3xl text-center font-bold flex justify-center items-center text-blue-500 [text-shadow:_1px_1px_0_rgb(255_255_255_/_100%)]">
            🚀 Full-Stack Web Performance Optimization: Frontend, Backend, and
            Database Strategies
          </h1>
          <p className="text-center text-white/80">2025/07/14</p>
          <section>
            <h2>Introduction</h2>
            <p>
              In this post, I’ll walk you through the web optimization work I
              did on one of my recent projects this year. As a full-stack
              developer, I’ll focus mainly on code-level optimizations from a
              developer’s perspective — covering both frontend and backend.
              While server infrastructure isn’t the main focus, I’ll also
              highlight a few key server-side improvements worth noting.
            </p>

            <p>
              For context, the project is called <b>SPMB Jawa Barat</b>{' '}
              (previously known as <b>PPDB Jawa Barat</b>). It’s a web-based
              registration system used by junior high school students in the
              West Java region to apply to senior high schools (SMA) or
              vocational schools (SMK).
            </p>

            <p>
              According to Google Analytics, the website received around 1.5
              million visitors between June 1st and July 11th. The official
              registration was split into two phases: the first from June 10th
              to June 17th, and the second from June 24th to July 1st. As a
              result, you’ll notice significant traffic spikes during those
              periods on the Analytics graph. Outside of those dates, the site
              still saw activity from users preparing for registration, taking
              offline exams, and from schools verifying applicant data.
            </p>

            <p>
              According to our database, there are 1.189.900 junior high school
              student records, and out of those, 570.874 students successfully
              completed their registration through the SPMB system.
            </p>

            <Image
              unoptimized={true}
              width={0}
              height={0}
              src="/log/spmb-jabar/google-analytics.webp"
              alt="Google Analytics SPMB Jawa Barat 2025"
              className="h-[320px] lg:h-[400px] w-auto object-contain"
            />
          </section>

          <section>
            <h2>Tech Stack</h2>
            <table>
              <tbody>
                <tr>
                  <td>📦 Infra</td>
                  <td>
                    Docker, Kubernetes, Nginx, Varnish, Cloudflare CDN, MinIO
                  </td>
                </tr>
                <tr>
                  <td>⚙️ Backend</td>
                  <td>
                    Golang, go-chi, PostgreSQL with Replication, PGBouncer,
                    Redis
                  </td>
                </tr>
                <tr>
                  <td>🧠 Frontend</td>
                  <td>Vue.js, TailwindCSS, Vite</td>
                </tr>
              </tbody>
            </table>

            <article>
              <h3>Server Optimization</h3>
              <p>
                I'm not an expert in this area, but I’ll do my best to explain
                what I’ve learned — this part of the system was actually handled
                by a friend, and I asked as many questions as I could to
                understand it 😁.
              </p>
              <p>
                If you're a DevOps engineer or software developer, you're
                probably already familiar with{' '}
                <b>Docker, Kubernetes, and Nginx</b>. What stood out to me — and
                was completely new — were <b>Varnish</b> and <b>Cloudflare</b>.
                I also encountered <b>MinIO</b> for the first time, which turned
                out to be quite straightforward — it's essentially a self-hosted
                alternative to Amazon S3.
              </p>

              <p>
                <b>Varnish</b> is used to cache API responses at the server
                level. However, not all responses are cacheable, so we mainly
                used Varnish to cache static or rarely changing data.
              </p>
              <p>
                As for <b>Cloudflare</b>, we utilized its <b>CDN features</b> to
                serve the frontend assets. This helps reduce server load by
                delivering static files from the nearest edge location, so users
                don’t hit our servers directly every time they visit the site.
              </p>
            </article>

            <article>
              <h3>Backend Optimization</h3>
              <p>
                For the backend, we chose <b>Golang</b> for this web app because
                it offers significantly better performance and lower memory
                usage compared to our previous stack — <b>Express.js</b>, which
                we used in <b>PPDB Jawa Barat (2020–2023)</b>.
              </p>
              <p>
                We use <b>PostgreSQL</b> as our main database, with{' '}
                <b>four read replicas</b> distributed across backend services to
                handle high read traffic. To manage database connections
                efficiently, we also implemented <b>PgBouncer</b> for connection
                pooling.
              </p>
              <p>
                For caching, we use <b>Redis</b> at the backend level. Unlike
                Varnish (which caches mostly static API responses at the edge),
                Redis helps us cache both <b>dynamic data</b> — like registrant
                details — and <b>static data</b> that’s accessed frequently,
                such as web configuration settings. Redis caching isn’t limited
                to API responses; we also use it to offload frequently queried
                metadata and improve response times across the app.
              </p>
            </article>

            <article>
              <h3>Frontend Optimization</h3>
              <p>
                You might wonder — why didn’t we choose React, especially when
                it’s everywhere? For this project, we went with <b>Vue.js</b>{' '}
                because it offers comparable (or slightly better) performance
                with a faster and more efficient development experience —
                especially helpful under a tight deadline.
              </p>
              <p>
                Another common question: why not use SSR (Server-Side
                Rendering)? We've been using Vue (without Nuxt.js or SSR) since
                2019. Back then, we had limited server capacity, and Vue as an
                SPA framework was lightweight and reliable. That setup has
                served us well, so we’ve continued with it ever since.
              </p>
              <p>
                We also implemented frontend-level caching for backend
                configuration data. When a user requests config data, we first
                check <b>localStorage</b>. If it's available and not expired, we
                use it; otherwise, we fetch it from the backend API. This helps
                reduce unnecessary network requests and speeds up load time.
              </p>
              <p>
                For the build tool, we used <b>Vite</b> — now the standard for
                Vue 3 projects. Personally, I really love the Vue + Vite combo.
                Our CI/CD pipeline takes just ~50 seconds to complete a
                deployment. In contrast, our old Vue + Webpack setup took around
                3 minutes, and some of my SSR projects (like those built with
                Nuxt.js or Next.js) can take 5–15 minutes — although those
                aren’t under my direct control, so I can’t fully verify the
                CI/CD optimizations there.
              </p>
            </article>
          </section>

          <section>
            <h2>Obstacles</h2>
            <p>
              The registration process ran smoothly overall thanks to our chosen
              tech stack — though we did face issues during the{' '}
              <b>first and second days</b> of registration. The main problem
              occurred with the <b>MinIO service</b>, which experienced failures
              when attempting to write data. Interestingly, the issue wasn’t
              caused by our code, but rather by unusually slow{' '}
              <b>internet performance on the server’s ISP</b> during the first
              day.
            </p>
            <p>
              As developers, there wasn’t much we could do about the network
              conditions themselves. However, we responded by{' '}
              <em>optimizing the logic around the storage service</em> to reduce
              resource usage and minimize the impact during those critical
              periods.
            </p>
          </section>

          <footer>
            <h2>Final Thoughts</h2>
            <p>
              Optimizing a high-traffic web application like SPMB Jawa Barat
              required careful consideration at every level — from frontend
              efficiency to backend performance and database scalability. While
              no system is perfect, and some challenges (like network issues)
              were out of our control, choosing the right tools and making
              intentional design decisions helped us handle millions of users
              with confidence.
            </p>
            <p>
              Every layer — whether it's using Vue + Vite for fast frontend
              builds, Golang and PostgreSQL for high-performance backend
              processing, or Redis and Varnish for caching — played a critical
              role in the overall success of the project.
            </p>
            <p>
              I’m still learning, and this project gave me the opportunity to
              dive deeper into areas like infrastructure, caching strategies,
              and performance tuning. Hopefully, sharing this experience gives
              you some insight or ideas for your own projects.
            </p>
            <p>
              Thanks for reading — feel free to reach out if you want to discuss
              or ask about any part of this post!
            </p>
          </footer>
        </div>
      </div>

      <BackToTop />
      <Footer showGradient={false} />
    </GlobalStateProvider>
  )
}
