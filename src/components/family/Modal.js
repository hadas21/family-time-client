import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { createFamily } from '../../api/family'

function FamModal (props) {
  const [family, setFamily] = useState({ name: '', members: [] })
  //   const [famMembers, setFamMembers] = useState(null)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function handleChange (event) {
    event.persist()

    setFamily({ name: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    createFamily(family, props.user)
      .then((res) => console.log(res))
      .catch(console.error)
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Create Family
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
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

            {/* <Form.Select aria-label='Floating label select example'>
              <option>Select family members</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
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
