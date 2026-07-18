import ShowcaseItem, { ShowcaseType } from '@/components/home/showcase-item'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export default function Showcase() {
  const showcases: ShowcaseType[] = [
    {
      name: 'Middle Space - Mobile Web Game',
      image: '/code/middle-space.jpg',
      url: 'https://middle-space.katsuotz.com/',
      src: 'https://github.com/katsuotz/middle-space',
      cardClassName: 'h-full',
      className: 'col-span-12 md:col-span-6',
      highlight: true,
      livePreview: false,
    },
    {
      name: 'Loader CSS',
      src: [
        {
          type: 'html',
          src: '/code/loader.html',
        },
      ],
      className: 'col-span-12 md:col-span-6 h-full',
      cardClassName: 'h-full',
      iframeClassName: 'w-full grow',
      highlight: true,
      livePreview: true,
    },
    {
      name: 'Rotary Cube CSS',
      src: [
        {
          type: 'html',
          src: '/code/cube.html',
        },
      ],
      className: 'col-span-12',
      iframeClassName: 'w-full min-h-[400px]',
      highlight: true,
      livePreview: true,
    },
    {
      name: 'Clock',
      src: [
        {
          type: 'html',
          src: '/code/clock/index.html',
        },
      ],
      className: 'col-span-12 md:col-span-6',
      iframeClassName: 'w-full aspect-square',
      highlight: true,
      livePreview: true,
    },
    {
      name: 'Drawing canvas',
      src: [
        {
          type: 'html',
          src: '/code/drawing-canvas/index.html',
        },
        {
          type: 'css',
          src: '/code/drawing-canvas/style.css',
        },
        {
          type: 'js',
          src: '/code/drawing-canvas/app.js',
        },
      ],
      className: 'col-span-12 md:col-span-6',
      cardClassName: 'h-full',
      iframeClassName: 'w-full h-full min-h-[700px]',
      highlight: true,
      livePreview: true,
    },
  ]

  return (
    <section
      id="showcase"
      className="mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mb-12 grid max-w-[72rem] gap-5 border-b border-[var(--home-line)] pb-8">
        <div>
          <p
            className={cn(
              'font-[family-name:var(--font-home-mono)] uppercase tracking-[0.18em] text-[var(--home-accent)]',
              editorialType.micro
            )}
          >
            Interface studies
          </p>
          <h1 className="mt-4 text-balance font-[family-name:var(--font-home-display)] text-[clamp(3.4rem,8vw,8rem)] leading-[0.86] tracking-[-0.05em] text-[var(--home-ink)]">
            Showcases.
          </h1>
        </div>
        <p
          className={cn(
            'max-w-[52ch] text-[var(--home-muted)]',
            editorialType.body
          )}
        >
          Welcome to my showcase — a collection of projects I crafted from
          scratch during my competitive journey between 2018 and 2020.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {showcases.map((showcase, key) => {
            return <ShowcaseItem showcase={showcase} key={key} />
          })}
        </div>
      </div>
    </section>
  )
}
