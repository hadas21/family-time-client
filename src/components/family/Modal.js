import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Accordion from 'react-bootstrap/Accordion'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { BiMessageSquareAdd } from 'react-icons/bi'

import { createFamily } from '../../api/familyApi'
import { indexUsers } from '../../api/auth'

function FamModal (props) {
  const [family, setFamily] = useState({ name: '', members: [] })
  const [allUsers, setAllUsers] = useState([])
  const [show, setShow] = useState(false)

  const { createdTrigger, user } = props

  useEffect(() => {
    indexUsers(user)
      .then((res) => {
        // console.log(res)
        setAllUsers(res.data.users)
      })
      .catch(console.error)
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function handleChange (event) {
    event.persist()

    setFamily({ name: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    createFamily(family, props.user)
      .then(() => setShow(false))
      .then(() => createdTrigger())
      .catch(console.error)
  }

  const allUser = allUsers.map((user) => (
    <p key={user.id}>
      <Form.Check type='checkbox' label={user.email} />
    </p>
  ))

  return (
    <>
      <Button variant='' bg='transparent' onClick={handleShow}>
        <BiMessageSquareAdd />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add your Family</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control
                required
                type='text'
                placeholder='Family Name'
                onChange={handleChange}
              />
            </Form.Group>
            <Accordion defaultActiveKey='0' flush>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Select family members</Accordion.Header>
                <Accordion.Body>
                  {allUser}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* <DropdownButton
              id='dropdown-button-dark-example2'
              variant='secondary'
              menuVariant='dark'
              title='Select Family Members'
              className='mt-2'>

              {/* <Dropdown.Toggle
                id='dropdown-button-dark-example1'
                variant='secondary'>
Dropdown Button
              </Dropdown.Toggle> */}

            {/* </DropdownButton> */}
            {/* <Form.Select aria-label='Floating label select example'>
              <option>Select family members</option>
              {allUsers}
            </Form.Select> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
Close
            </Button>

            <Button variant='dark' type='submit'>
Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default withRouter(FamModal)
