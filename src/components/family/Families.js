import React, { useState, useEffect } from 'react'

import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { indexFamilies } from '../../api/familyApi'

function Families (props) {
  const [families, setFamilies] = useState([])

  const { user, created } = props
  useEffect(() => {
    indexFamilies(user)
      .then((res) => setFamilies(res.data.families))
      .then(() => console.log(families, created))
      .catch(console.error)
  }, [created])

  const allCreatedFams = families.map((fam) => (
    <Link key={fam.id} to={`/families/${fam.id}`}>
      <Button variant='dark' type='button'>
        {fam.name}
      </Button>
    </Link>
  ))

  if (!families) {
    return (
      <h3>you did not create any families yet...</h3>
    )
  }

  return (
    <>

      <ul>{allCreatedFams}</ul>
    </>
  )
}

export default withRouter(Families)
