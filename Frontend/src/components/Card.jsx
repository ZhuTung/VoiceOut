import React from 'react'
import '../styles/components/Card.css'
const Section = ({ children, border, className }) => {
  return (
    <div className={`container mt-4 mb-3 ${border === true? 'borderSection':''}`} >
        <div className={className}>
            {children}
        </div>
    </div>
  )
}

export default Section