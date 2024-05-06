import React from 'react'

interface ButtonTemplateProps {
    text: string;
    onClick: () => void;
    btnStyle: string;
}

export default function ButtonTemplate({ text, onClick, btnStyle }: ButtonTemplateProps) {
  return (
    <button onClick={onClick} className={btnStyle}>
      {text}
    </button>
  )
}
