import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import { signInFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignIn = (event) => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props

  signIn(this.state)
    .then((res) => setUser(res.data.user))
    .then(() => history.push('/families'))
    .catch((error) => {
      this.setState({ email: '', password: '' })
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { email, password } = this.state

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5 pt-5'>
        <h3>Log In</h3>
        <Form onSubmit={this.onSignIn}>
          <Form.Group controlId='email'>
            <Form.Control
              className='mb-3 mt-4 border border-dark rounded-0 p-2'
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Control
              className='mb-3 border border-dark rounded-0 p-2'
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className='d-grid gap-2 rounded-3'>
            <Button className='p-2' variant='dark' type='submit'>
Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
}

export default withRouter(SignIn)
