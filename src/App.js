/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import Families from './components/family/Families'
import Family from './components/family/Family'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: [],
      created: false
    }
  }

	setUser = (user) => this.setState({ user })

	clearUser = () => this.setState({ user: null })

	createdTrigger = () => this.setState({ created: !this.state.created })

	deletedTrigger = () => this.setState({ deleted: !this.state.deleted })

deleteAlert = (id) => {
  this.setState((state) => {
    return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
  })
}

msgAlert = ({ heading, message, variant }) => {
  const id = uuid()
  this.setState((state) => {
    return {
      msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
    }
  })
}

render () {
  const { msgAlerts, user, created } = this.state

  return (
    <Fragment>
      <Header
        user={user}
        createdTrigger={this.createdTrigger}
      />

      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={this.deleteAlert}
        />
      ))}
      <main className='container'>
        <Route
          path='/sign-up'
          render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )}
        />
        <Route
          path='/sign-in'
          render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/sign-out'
          render={() => (
            <SignOut
              msgAlert={this.msgAlert}
              clearUser={this.clearUser}
              user={user}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/change-password'
          render={() => <ChangePassword msgAlert={this.msgAlert} user={user} />}
        />
        <AuthenticatedRoute
          user={user}
          exact
          path='/families'
          render={() => (
            <Families
              msgAlert={this.msgAlert}
              clearUser={this.clearUser}
              user={user}
              createdTrigger={this.createdTrigger}
              created={created}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/families/:id'
          render={() => (
            <Family
              msgAlert={this.msgAlert}
              clearUser={this.clearUser}
              user={user}
              createdTrigger={this.createdTrigger}
            />
          )}
        />
      </main>
    </Fragment>
  )
}
}

export default App
