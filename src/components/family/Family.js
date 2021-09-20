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
  function handleSubmit (event) {
    event.preventDefault()
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
      <Form
        onSubmit={handleSubmit}
        className='mt-5 pt-3'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            required
            type='text'
            value={family.name}
            onChange={handleChange}
            id='family-name'
            className='fs-1 mt-5'
          />
        </Form.Group>
      </Form>
      <div className='row mx-auto'>
        <div className='col-6'>
          <Button
            className='col-12 p-2 rounded-3'
            variant='dark'
            onClick={updateFam}>
Save
          </Button>
        </div>
        <div className='col-6'>
          <Button
            className='col-12 p-2 rounded-3'
            variant='dark'
            onClick={deleteFam}>
Delete
          </Button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Family)
