import React from 'react'

interface ButtonTemplateProps {
    text: string;
}

export default function ButtonTemplate({ text }: ButtonTemplateProps) {
  return (
    <button>
      {text}
    </button>
  )
}
