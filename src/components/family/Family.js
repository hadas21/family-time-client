import React, { useState, useLayoutEffect } from 'react'
// import FamModal from './Modal'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { showFamily, deleteFamily } from '../../api/familyApi'

function Family (props) {
  const [family, setFamily] = useState(null)
  const [deleted, setDeleted] = useState(false)
  //   const [updatedFam, setUpdatedFam] = useState(false)

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
      <h1>in the {family.name} family page</h1>
      <Button variant="dark" onClick={deleteFam}>Delete</Button>
    </>
  )
}

export default withRouter(Family)
