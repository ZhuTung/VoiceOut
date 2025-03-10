import React from 'react'
import '../styles/components/Link.css'
const Link = ({ href, children, className }) => {
  return (
    <a href={href} className={`linkBtn ${className}`}>{children}</a> 
  )
}

export default Link