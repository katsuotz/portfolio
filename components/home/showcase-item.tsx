'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import CodeBlock from '@/components/ui/code-block'
import { editorialType } from '@/lib/editorial-typography'

export interface ShowcaseType {
  name: string
  image?: string
  url?: string
  src?: string | ShowcaseSource[]
  highlight?: boolean
  livePreview?: boolean
  className?: string
  cardClassName?: string
  iframeClassName?: string
}

interface ShowcaseSource {
  type: string
  src: string
}

const controlClassName = `inline-flex min-h-11 items-center justify-center border border-[var(--home-line)] bg-[var(--home-surface-raised)] px-4 font-[family-name:var(--font-home-mono)] uppercase tracking-[0.11em] text-[var(--home-ink)] transition-colors hover:border-[var(--home-accent)] hover:text-[var(--home-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none ${editorialType.micro}`

const activeControlClassName =
  'border-[var(--home-accent)] bg-[var(--home-accent)] text-[var(--home-on-accent)] hover:bg-[var(--home-accent-hover)] hover:text-[var(--home-on-accent)]'

export default function ShowcaseItem({ showcase }: { showcase: ShowcaseType }) {
  const [showCode, setShowCode] = useState(false)
  const [indexCode, setIndexCode] = useState(0)
  const [code, setCode] = useState({
    code: '',
    type: 'html',
  })

  const loadCode = async (index: number = 0) => {
    if (!Array.isArray(showcase.src)) return
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
        'group/showcase col col-span-12 min-w-0 cursor-auto',
        showcase.className
      )}
    >
      <div
        className={cn(
          'relative flex flex-col justify-center overflow-hidden border border-[var(--home-line)] bg-[var(--home-surface-raised)] transition-[border-color,background-color] duration-200 hover:border-[var(--home-accent)] motion-reduce:transition-none',
          showcase.cardClassName
        )}
      >
        {Array.isArray(showcase.src) &&
          showcase.livePreview &&
          (showCode ? (
            <div className="w-full p-4 sm:p-5">
              <div className="mb-4 flex gap-2">
                {showcase.src.length > 1 &&
                  showcase.src.map((src, index) => (
                    <button
                      type="button"
                      key={src.src}
                      className={cn(
                        controlClassName,
                        'grow',
                        indexCode === index && activeControlClassName
                      )}
                      onClick={() => loadCode(index)}
                    >
                      {src.type}
                    </button>
                  ))}
              </div>
              <CodeBlock code={code.code} language={code.type} />
            </div>
          ) : (
            <iframe
              src={showcase.src[0].src}
              title={`${showcase.name} interactive preview`}
              loading="lazy"
              className={cn(
                'border-0 bg-white focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--home-accent)]',
                showcase.iframeClassName
              )}
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
            className="h-full w-full object-cover brightness-75 transition-[filter,transform] duration-500 group-hover/showcase:brightness-90 md:group-hover/showcase:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
          />
        )}

        <div
          className={cn(
            showcase.image
              ? 'absolute inset-x-0 bottom-0 bg-black/75 px-5 pb-5 pt-8 text-white'
              : 'w-full border-t border-[var(--home-line)] bg-[var(--home-surface)] p-4 sm:p-5'
          )}
        >
          <p
            className={cn(
              'text-balance text-center font-[family-name:var(--font-home-display)] text-lg tracking-[-0.02em] xl:text-xl',
              showcase.image ? 'text-white' : 'text-[var(--home-ink)]'
            )}
          >
            {showcase.name}
          </p>
          <div className="flex w-full flex-wrap justify-center gap-2 pt-4">
            {showcase.livePreview && (
              <>
                <button
                  type="button"
                  className={cn(
                    controlClassName,
                    'grow',
                    !showCode && activeControlClassName
                  )}
                  onClick={() => setShowCode(!showCode)}
                >
                  Preview
                </button>
                <button
                  type="button"
                  className={cn(
                    controlClassName,
                    'grow',
                    showCode && activeControlClassName
                  )}
                  onClick={() => setShowCode(!showCode)}
                >
                  Code
                </button>
              </>
            )}
            {showcase.url && (
              <>
                <a
                  className={cn(controlClassName, activeControlClassName)}
                  href={showcase.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Try it now!
                </a>
                <a
                  className={cn(controlClassName, activeControlClassName)}
                  href={typeof showcase.src === 'string' ? showcase.src : '#'}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
