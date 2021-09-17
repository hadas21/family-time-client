import React, { useState, useEffect } from 'react'
// import FamModal from './Modal'
import { withRouter } from 'react-router-dom'
import { showFamily } from '../../api/familyApi'

// import { showFamily } from '../../api/familyApi'
function Family (props) {
  const [family, setFamily] = useState([])
  //   const [updatedFam, setUpdatedFam] = useState(false)
  useEffect(() => {
    showFamily(props.user, props.match.params.id)
      .then((res) => {
        console.log(res)
        return res
      })
      .then((res) => setFamily(res.data))
      .then(console.log(family))
      .catch(console.error)
  }, [])

  return (
    <>
      <h1>in the family page</h1>

    </>
  )
}

export default withRouter(Family)
