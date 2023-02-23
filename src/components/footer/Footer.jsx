import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
<footer className='text-white py-4 bg-dark'>
    <div className='container'>
        <nav className='row'>
         <Link to="/" className='col-12 col-md3 d-flex aling-items-center justyfy-content'>
            david pedroza
         </Link>
        </nav>

    </div>

</footer>
    </div>
  )
}

export default Footer