import React from 'react'
import '../styles/components/Card.css'
const Section = ({ id, children, border, className }) => {
  return (
    <div id={id} className={`container mt-4 mb-3 pt-3 pb-3 ${border === true? 'borderSection':''}`} >
        <div className={className}>
            {children}
        </div>
    </div>
  )
}

export default Section