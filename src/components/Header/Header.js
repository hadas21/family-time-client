import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const generateUserName = (user) => {
  const userName = user.split('@')
  return userName[0]
}

const Header = ({ user }) => (
  <>
    <Navbar
      bg='dark'
      variant='dark'
      expand='md'
      className='p-2 row'
      fixed='top'>
      <Container>
        <Navbar.Brand href='#home'>
          <Link to="/home">
            <img
              src='/src/logo.png'
              width='20'
              height='20'
              className='d-inline-block align-top'
              alt=''
            />
          </Link>
          {user && (
            <span className='navbar-text mx-3 fs-6'>
Welcome, {generateUserName(user.email)}
            </span>
          )}
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
)

export default Header
