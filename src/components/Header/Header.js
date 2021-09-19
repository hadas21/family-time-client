import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { FiLogOut, FiUser } from 'react-icons/fi'

import { IconContext } from 'react-icons'

import FamModal from '../family/Modal'

// const authenticatedOptions = (
//   <>
//     <NavLink to='/change-password' className='nav-link col-3 px-auto'>
//       <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
//         <div>
//           <FiUser />
//         </div>
//       </IconContext.Provider>
//     </NavLink>
//     <NavLink to='/change-password' className='nav-link col-3 px-auto'>
//       <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
//         <div>
//           <FamModal user={user} createdTrigger={createdTrigger} />
//           <BiMessageSquareAdd />
//         </div>
//       </IconContext.Provider>
//     </NavLink>
//     <NavLink to='/sign-out' className='nav-link col-3 px-auto'>
//       <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
//         <div>
//           <FiLogOut />
//         </div>
//       </IconContext.Provider>
//     </NavLink>
//   </>
// )

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link col-5 px-auto'>
      <Button className='col-12' variant='dark'>
Register
      </Button>
    </NavLink>
    <NavLink to='/sign-in' className='nav-link col-5 px-auto'>
      <Button className='col-12' variant='outline-dark'>
Log In
      </Button>
    </NavLink>
  </>
)

// const alwaysOptions = (
//   <Fragment>
//     <NavLink exact to='/' className='nav-link'>Home</NavLink>
//   </Fragment>
// )

const Header = ({ user, createdTrigger }) => (
  <>
    <Navbar
      bg='transparent'
      variant='dark'
      expand='md'
      className='p-2 row'
      fixed='bottom'>
      {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}

      <>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {/* {alwaysOptions} */}
        {user
          ? (
            <>
              <NavLink to='/change-password' className='nav-link col-3 px-auto'>
                <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
                  <div>
                    <FiUser />
                  </div>
                </IconContext.Provider>
              </NavLink>
              <NavLink to='/change-password' className='nav-link col-3 px-auto'>
                <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
                  <div>
                    <FamModal user={user} createdTrigger={createdTrigger} />
                  </div>
                </IconContext.Provider>
              </NavLink>
              <NavLink to='/sign-out' className='nav-link col-3 px-auto'>
                <IconContext.Provider value={{ color: 'black', size: '2rem' }}>
                  <div>
                    <FiLogOut />
                  </div>
                </IconContext.Provider>
              </NavLink>
            </>
          )
          : (
            unauthenticatedOptions
          )}
      </>
    </Navbar>
  </>
)

export default Header
