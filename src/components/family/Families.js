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
      <div className='d-grid gap-2 rounded-3 mt-3'>
        <Button className='p-2' variant='dark' type='button'>
          {fam.name}
        </Button>
      </div>
    </Link>
  ))

  if (!families) {
    return (
      <h3>you did not create any families yet...</h3>
    )
  }

  return (
    <section className='pt-5'>
      <h1 className='mt-5 mb-3'>Your Families:</h1>
      <p className='mb-5'>Click to view or edit</p>
      <ul className='p-0'>{allCreatedFams}</ul>
    </section>
  )
}

export default withRouter(Families)
