import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ToDoContainer from './Components/Todo/TodoContainer'
import CreateList from './Components/CreateForms/CreateList'
import { Router, Route } from 'react-router-dom'
import Login from './Components/Validation/Login'
import history from './history'
import './App.scss'
import { thisExpression } from '@babel/types';

export default class App extends Component {
  
  state = {
    lists: [{
          title: {},
          items: []
        }
    ],
    showForm: false,
    selected: 0,
    base_url: "http://192.168.0.3:3001",
    login_failed: false
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
      return res && res.token && res.data
        ? this.setState({ lists: res.data }, () => {
          window.localStorage.setItem('token', res.token)
          history.push('/todos')
        })
        : this.setState({ login_failed: true })
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
            this.setState({ lists: res.data, user_id: res.user_id }, () => console.log(this.state.lists))
          })
        : this.logout()
    })
  }

  createListItem = (form) => {
    const { company, title, list_id, link } = form
    fetch(this.state.base_url + '/list-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      body: JSON.stringify({
        company, title, list_id, link
      })
    }).then(res => res.json())
    .then(res => {
      if (res && res.list_item){
        let lists = this.state.lists
        lists.map(list => {
          if (list.title.id == list_id){
            list.items.push(res.list_item)
          }
        })
        this.setState({ lists })
      } else {
        console.log('failed')
      }
    })


    console.log(company, title, list_id, link, form)
  }

  toggleForm = () => {
    let bool = this.state.showForm
    this.setState({ showForm: !bool })
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
        <header className='nav-container'>
          <Navbar />
        </header>

        <Router history={ history }>
          <Route exact path='/todos' render={() => {
            return (
                <div id='todo-page'>
                  <i onClick={this.toggleForm} id='add-list-button' className="fas fa-plus-square fa-2x"></i>
                  <CreateList showForm={this.state.showForm} />
                  <ToDoContainer showForm={this.state.showForm} createListItem={this.createListItem} lists={this.state.lists}/>
                </div>
              )
            }
          } />
          <Route exact path='/login' render={() =>
            <div id='login-page'>
              <Login failed={this.state.login_failed} login={this.login} /> 
            </div>
          } />
        </Router>
        <footer className='footer-container'>
          <Footer />
        </footer>
      </div>
    );
  }
}