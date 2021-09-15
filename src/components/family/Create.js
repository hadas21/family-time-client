import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Create () {
  // Declare a new state variable, which we'll call "count"
  const [famName, setFamName] = useState(null)
  const [famMembers, setFamMembers] = useState(null)

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='text' placeholder='Family Name' />
        </Form.Group>

        <Form.Select aria-label='Floating label select example'>
          <option>Select family members</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Form.Select>

        <Button variant='dark' type='submit'>
					Submit
        </Button>
      </Form>
    </>
  )
}

export default Create
