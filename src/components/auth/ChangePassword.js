import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onChangePassword = (event) => {
  event.preventDefault()

  const { msgAlert, history, user } = this.props

  changePassword(this.state, user)
    .then(() =>
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/families'))
    .catch((error) => {
      this.setState({ oldPassword: '', newPassword: '' })
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { oldPassword, newPassword } = this.state

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5 pt-5'>
        <h3>Change Password</h3>
        <Form onSubmit={this.onChangePassword}>
          <Form.Group controlId='oldPassword'>
            <Form.Control
              className='mb-3 mt-4 border border-dark rounded-0 p-2'
              required
              name='oldPassword'
              value={oldPassword}
              type='password'
              placeholder='Old Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='newPassword'>
            <Form.Control
              className='mb-3 border border-dark rounded-0 p-2'
              required
              name='newPassword'
              value={newPassword}
              type='password'
              placeholder='New Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className='d-grid gap-2 rounded-3'>
            <Button variant='dark' type='submit'>
Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
}

export default withRouter(ChangePassword)
