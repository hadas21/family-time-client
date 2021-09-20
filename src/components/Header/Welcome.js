import React from 'react'
import logo from '../../img/logo.png'
// import Container from 'react-bootstrap/Container'

const Welcome = () => (
  <section
    id='welcome-sign'
    className='position-absolute top-50 start-50 translate-middle'>
    <img

      src={logo}
    />
    <h1 className='text-center'>Family Time</h1>
  </section>
)

export default Welcome
