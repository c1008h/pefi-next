import React from 'react'

interface ContainerTemplateProps{
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
  row?: boolean;
}

export default function ContainerTemplate({ children, title, style, row}:ContainerTemplateProps) {
  return (
    <div className="container" >
      <h2>{title}</h2>

      {/* {!row ? (
          <Row>{children}</Row>
        ) : (
          children
        )} */}
        {children}
    </div>
  )
}
