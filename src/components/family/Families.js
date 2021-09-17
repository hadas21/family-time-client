import React, { useState, useEffect } from 'react'
import FamModal from './Modal'
import { withRouter, Link } from 'react-router-dom'

import { indexFamilies } from '../../api/familyApi'

import Button from 'react-bootstrap/Button'

function Families (props) {
  const [families, setFamilies] = useState([])
  const [createdFam, setCreatedFam] = useState(false)

  useEffect(() => {
    indexFamilies(props.user)
      .then(res => {
        console.log(res)
        return res
      })
      .then(res => setFamilies(res.data.families))
      .then(console.log(families))
      .catch(console.error)
  }, [createdFam])

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
      <FamModal
        user={props.user}
        setCreatedFam={setCreatedFam}
        createdFam={createdFam}
      />
      <ul>{allCreatedFams}</ul>
    </>
  )
}

export default withRouter(Families)
