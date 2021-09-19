import React, { useState, useLayoutEffect } from 'react'
// import FamModal from './Modal'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { showFamily, deleteFamily, updateFamily } from '../../api/familyApi'

function Family (props) {
  const [family, setFamily] = useState(null)
  const [deleted, setDeleted] = useState(false)
  //   const [updatedFam, setUpdatedFam] = useState(false)

  function handleChange (event) {
    event.persist()

    setFamily({ name: event.target.value })
  }

  const updateFam = () => {
    updateFamily(family, user, props.match.params.id)
      .then(() => history.push('/families'))
      .then(() =>
        props.msgAlert({
          heading: 'Updated!',
          message: 'updates saved successfully',
          variant: 'success'
        })
      )
      .catch(console.error)
  }

  const { user, history } = props
  useLayoutEffect(() => {
    showFamily(user, props.match.params.id)
      .then((res) => setFamily(res.data.family))
      .catch(console.error)
  }, [deleted])

  const deleteFam = () => {
    deleteFamily(user, props.match.params.id)
      .then(res => console.log(res))
      .then(() => props.createdTrigger())
      .then(() => setDeleted(!deleted))
      .then(() => history.push('/families'))
      .catch(console.error)
  }

  if (!family) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            required
            type='text'
            value={family.name}
            onChange={handleChange}
            id='family-name'
          />
        </Form.Group>
        <Button variant='dark' onClick={updateFam}>
Save
        </Button>
      </Form>
      <Button variant='dark' onClick={deleteFam}>
Delete
      </Button>
    </>
  )
}

export default withRouter(Family)
