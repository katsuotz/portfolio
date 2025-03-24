import Image from "next/image";
import {Button} from "@/components/ui/button"
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useEffect, useState} from "react";
import CodeBlock from "@/components/ui/code-block";

export interface ShowcaseType {
  name: string
  image?: string
  url?: string
  src?: string
  highlight?: boolean
  livePreview?: boolean,
  className?: string
  cardClassName?: string
  iframeClassName?: string
}

export default function ShowcaseItem({showcase}: { showcase: ShowcaseType }) {
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState('');

  const loadCode = async () => {
    const res = await fetch("/code/cube.html");
    const text = await res.text();
    setCode(text);
  };

  useEffect(() => {
    if (showCode) {
      loadCode();
    }
  }, [showCode]);

  return (
    <div className={cn(
      'col col-span-12 rounded-3xl group/showcase intro-y cursor-auto',
      showcase.className,
    )}>
      <div
        className={cn(
          "flex flex-col justify-center relative overflow-hidden rounded-3xl border  dark:border-0 border-gray-950/[.1] bg-gray-950/[.01] dark:border-gray-50/[.1] dark:bg-gray-50/[.10]",
          showcase.cardClassName,
        )}>
        {showcase.src && showcase.livePreview &&
          (showCode ?
            <div className="px-4 w-full py-4">
              <CodeBlock code={code} language="html"/>
            </div>
            : <iframe src={showcase.src} className={showcase.iframeClassName}/>)
        }
        {
          !showcase.livePreview && showcase.image &&
          <Image src={showcase.image} alt={showcase.name}
                 width={480}
                 height={480}
                 unoptimized={true}
                 className="w-full h-full object-cover brightness-75 group-hover/showcase:brightness-90 group-hover/showcase:md:scale-110 transition-all duration-300"/>
        }

        <div
          className={cn(
            showcase.image ? 'absolute bottom-5 left-1/2 -translate-x-1/2' : 'w-full'
          )}>
          <p className="font-bold text-sm sm:text-xl mt-4 text-center whitespace-nowrap">{showcase.name}</p>

          <div className="flex justify-center w-full gap-4 px-4 pt-4">
            {
              showcase.livePreview && <>
                <Button className="flex-grow rounded-full mb-4" variant={showCode ? 'outline' : 'default'}
                        onClick={() => setShowCode(!showCode)}>Preview</Button>
                <Button className="flex-grow rounded-full mb-4" variant={showCode ? 'default' : 'outline'}
                        onClick={() => setShowCode(!showCode)}>Code</Button>
              </>
            }
            {
              showcase.url &&
              <Button as={Link} href={showcase.url} target="_blank" className="rounded-full" variant="default">
                Try it now!
              </Button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
