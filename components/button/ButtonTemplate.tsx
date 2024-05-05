import React from 'react'

interface ButtonTemplateProps {
    text: string;
    onClick: () => void;
}

export default function ButtonTemplate({ text, onClick }: ButtonTemplateProps) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
