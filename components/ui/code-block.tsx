import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CheckIcon, CopyIcon } from '@phosphor-icons/react'
import { editorialType } from '@/lib/editorial-typography'

type CodeBlockProps = {
  code: string
  language?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className={`relative rounded-2xl bg-zinc-800 p-4 pr-0 ${editorialType.card}`}
    >
      <button
        onClick={handleCopy}
        type="button"
        className="absolute top-3 right-3 grid size-11 place-items-center rounded-md text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        title={copied ? 'Copied' : 'Copy to clipboard'}
      >
        {copied ? (
          <CheckIcon size={20} weight="light" />
        ) : (
          <CopyIcon size={20} weight="light" />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Copied' : ''}
      </span>

      <div className="max-h-[420px] overflow-auto custom-scrollbar">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            background: 'transparent',
            fontSize: 'inherit',
            padding: 0,
            margin: 0,
          }}
          wrapLines
          wrapLongLines
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock
