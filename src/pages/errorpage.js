import React from 'react'
import { useNavigate } from 'react-router-dom'

function Errorpage() {
  const navigate = useNavigate();
  return (
    <div className='error-page'>
    <h1>404 Error Page</h1>
    <p className="zoom-area">Contact Administrator for more details</p>
    <section className="error-container">
      <span>4</span>
      <span><span className="screen-reader-text">0</span></span>
      <span>4</span>
    </section>
    <div className="link-container">
     Unauthorized Entry
    </div>
    <button type="button" class="btn btn-secondary" onClick={()=>navigate('/')}>Home Page</button>
    </div>
  )
}

export default Errorpage