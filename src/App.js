import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar'
import ToDoContainer from './Components/Todo/TodoContainer'
import { Router, Route } from 'react-router-dom'
import Login from './Components/Validation/Login'
import history from './history'

export default class App extends Component {
  
  state = {
    lists: [{
          title: {},
          items: []
        }
    ],
    selected: 0,
    base_url: "http://192.168.0.3:3001",
  }

  login = (details) => {
    const {email, password} = details
    fetch(this.state.base_url + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.data)
      return res && res.token && res.data
        ? this.setState({ lists: res.data }, () => {
          window.localStorage.setItem('token', res.token)
          history.push('/todos')
        })
        : null
    })
  }
  
  validateToken = () => {
    fetch(this.state.base_url + '/checktoken', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `${window.localStorage.getItem('token')}`
      },
    }).then(res => res.json())
    .then((res) => {
      res && res.data && res.user_id
        ? Promise.resolve(history.push('/todos')).then(() => {
            this.setState({ lists: res.data, user_id: res.user_id })
          })
        : this.logout()
    })
  }

  logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  componentDidMount(){
    if (window.localStorage.getItem('token')){
      this.validateToken()
    } else {
      history.push('/login')
    }
  }

  
  render(){
    return (
      <div className="App">
        <Navbar />

        <Router history={ history }>
          <Route exact path='/todos' render={() => {
            return (
                <div id='todo-page'>
                  <ToDoContainer lists={this.state.lists}/>
                </div>
              )
            }
          } />
          <Route exact path='/login' render={() =>
            <div id='login-page'>
              <Login login={this.login} /> 
            </div>
          } />
        </Router>
      </div>
    );
  }
}