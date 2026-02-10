import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import CodeBlock from '@/components/ui/code-block'

export interface ShowcaseType {
  name: string
  image?: string
  url?: string
  src?: any
  highlight?: boolean
  livePreview?: boolean
  className?: string
  cardClassName?: string
  iframeClassName?: string
}

export default function ShowcaseItem({ showcase }: { showcase: ShowcaseType }) {
  const [showCode, setShowCode] = useState(false)
  const [indexCode, setIndexCode] = useState(0)
  const [code, setCode] = useState({
    code: '',
    type: 'html',
  })

  const loadCode = async (index: number = 0) => {
    const res = await fetch(showcase.src[index].src)
    const text = await res.text()
    setIndexCode(index)
    setCode({
      code: text,
      type: showcase.src[index].type,
    })
  }

  useEffect(() => {
    if (showCode) {
      void loadCode()
    }
  }, [showCode])

  return (
    <div
      className={cn(
        'col col-span-12 rounded-3xl group/showcase intro-y cursor-auto',
        showcase.className
      )}
    >
      <div
        className={cn(
          'flex flex-col justify-center relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg',
          showcase.cardClassName
        )}
      >
        {showcase.src &&
          showcase.livePreview &&
          (showCode ? (
            <div className="px-4 w-full py-4">
              <div className="flex gap-2">
                {showcase.src.length > 1 &&
                  showcase.src.map((src: any, index: number) => (
                    <Button
                      key={index}
                      className="grow rounded-full mb-4"
                      variant={indexCode === index ? 'default' : 'outline'}
                      onClick={() => loadCode(index)}
                    >
                      {src.type}
                    </Button>
                  ))}
              </div>
              <CodeBlock code={code.code} language={code.type} />
            </div>
          ) : (
            <iframe
              src={showcase.src[0].src}
              className={showcase.iframeClassName}
            />
          ))}
        {!showcase.livePreview && showcase.image && (
          <Image
            loading="lazy"
            src={showcase.image}
            alt={showcase.name}
            width={480}
            height={480}
            unoptimized={true}
            className="w-full h-full object-cover brightness-75 group-hover/showcase:brightness-90 md:group-hover/showcase:scale-110 transition-all duration-300"
          />
        )}

        <div
          className={cn(
            showcase.image
              ? 'absolute bottom-5 left-1/2 -translate-x-1/2'
              : 'w-full'
          )}
        >
          <p className="font-bold text-sm sm:text-xl mt-4 text-center whitespace-nowrap text-slate-800 dark:text-slate-100">
            {showcase.name}
          </p>
          <div className="flex justify-center w-full gap-4 px-4 pt-4">
            {showcase.livePreview && (
              <>
                <Button
                  className="grow rounded-full mb-4"
                  variant={showCode ? 'outline' : 'default'}
                  onClick={() => setShowCode(!showCode)}
                >
                  Preview
                </Button>
                <Button
                  className="grow rounded-full mb-4"
                  variant={showCode ? 'default' : 'outline'}
                  onClick={() => setShowCode(!showCode)}
                >
                  Code
                </Button>
              </>
            )}
            {showcase.url && (
              <>
                <a href={showcase.url} target="_blank" rel="noreferrer">
                  <Button
                    href={showcase.url}
                    className="rounded-full"
                    variant="default"
                  >
                    Try it now!
                  </Button>
                </a>
                <a href={showcase.src} target="_blank" rel="noreferrer">
                  <Button className="rounded-full" variant="default">
                    Source Code
                  </Button>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
