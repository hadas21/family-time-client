import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { FiLogOut, FiUser } from 'react-icons/fi'

import { IconContext } from 'react-icons'

import FamModal from '../family/Modal'

const unauthenticatedOptions = (
  <>
    <div className='col-6'>
      <NavLink to='/sign-up' className='nav-link p-0'>
        <Button className='col-12 p-3' variant='dark'>
Register
        </Button>
      </NavLink>
    </div>
    <div className='col-6'>
      <NavLink to='/sign-in' className='nav-link p-0'>
        <Button className='col-12 p-3' variant='outline-dark'>
Log In
        </Button>
      </NavLink>
    </div>
  </>
)

const Footer = ({ user, createdTrigger }) => (
  <>
    <Navbar
      bg='transparent'
      variant='dark'
      expand='md'
      className='p-2 row'
      fixed='bottom'>
      <>

        {user
          ? (
            <>
              <div className='col-3 px-auto'>
                <NavLink to='/change-password' className='nav-link'>
                  <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
                    <div>
                      <FiUser />
                    </div>
                  </IconContext.Provider>
                </NavLink>
              </div>
              <div className='col-3 px-auto'>
                <Nav className='nav-link'>
                  <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
                    <div>
                      <FamModal user={user} createdTrigger={createdTrigger} />
                    </div>
                  </IconContext.Provider>
                </Nav>
              </div>
              <div className='col-3 px-auto'>
                <NavLink to='/sign-out' className='nav-link'>
                  <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
                    <div>
                      <FiLogOut />
                    </div>
                  </IconContext.Provider>
                </NavLink>
              </div>
            </>
          )
          : (
            unauthenticatedOptions
          )}
      </>
    </Navbar>
  </>
)

export default Footer
