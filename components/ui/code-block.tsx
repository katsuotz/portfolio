import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CheckIcon, CopyIcon } from 'lucide-react'

type CodeBlockProps = {
  code: string
  language?: 'tsx' | 'typescript' | 'javascript' | 'json' | string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-zinc-800 rounded-2xl p-4 pr-0 relative">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-1.5 rounded-md text-sm hover:bg-zinc-700 transition text-white"
        title="Copy to clipboard"
      >
        {copied ? <CheckIcon size={20} /> : <CopyIcon size={20} />}
      </button>

      <div className="max-h-[420px] overflow-auto custom-scrollbar">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            background: 'transparent',
            fontSize: 14,
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
