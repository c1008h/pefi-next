import React from 'react'

interface ButtonTemplateProps {
    text: string;
    onClick: () => void;
    btnStyle: string;
    type?: "submit" | "reset" | "button";
}

export default function ButtonTemplate({ text, onClick, btnStyle, type }: ButtonTemplateProps) {
  return (
    <button onClick={onClick} className={btnStyle} type={type}>
      {text}
    </button>
  )
}
