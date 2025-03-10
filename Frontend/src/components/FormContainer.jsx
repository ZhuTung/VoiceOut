import React from 'react'
import '../styles/components/FormContainer.css'
const FormContainer = ({ children }) => {
  return (
    <div className='container formBackground'>
        {children}
    </div>
  )
}

export default FormContainer