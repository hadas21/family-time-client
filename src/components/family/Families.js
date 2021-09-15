import React from 'react'
import FamModal from './Modal'
import { withRouter } from 'react-router-dom'

import { indexFamilies } from '../../api/family'

function Families (props) {
  const [createdFams, setCreatedFams] = useState(null)
  useEffect(() => {
    indexFamilies(props.user)
      .then(res => {
        console.log(res)
        return res
      })
      .then(res => setCreatedFams(res))
      .then(console.log(createdFams))
      .catch(console.error)
  }, [])

  return (
    <>
      <FamModal user={props.user}/>
    </>
  )
}

export default withRouter(Families)
