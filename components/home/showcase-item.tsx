import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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
      loadCode()
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
          'flex flex-col justify-center relative overflow-hidden rounded-3xl border  dark:border-0 border-gray-950/[.1] bg-gray-950/[.01] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]',
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
          <p className="font-bold text-sm sm:text-xl mt-4 text-center whitespace-nowrap">
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
                <Button
                  as={Link}
                  href={showcase.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full"
                  variant="default"
                >
                  Try it now!
                </Button>
                <Button
                  as={Link}
                  href={showcase.src}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full"
                  variant="default"
                >
                  Source Code
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
