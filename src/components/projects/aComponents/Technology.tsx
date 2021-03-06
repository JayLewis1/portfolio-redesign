import React from 'react'

interface ComponentProps {
  tech: Array<String>
}

 const Technology = ({tech}: ComponentProps) => {
  return (
    <div className="technology-used" id="tech">
      <h4>Technology Used</h4>
      <div className="tech-grid">
        {
          tech.map((x: any, index: number ) => 
            <p key={index}>{x}</p>
          )
        }
      </div>
    </div>
  )
}

export default Technology;
