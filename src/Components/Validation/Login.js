import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }




    render(){
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <input name='email' onChange={this.handleChange} type='text' placeholder='Enter Email' value={this.state.email} />
                    <input name='password' onChange={this.handleChange} type='text' placeholder='Enter Password' value={this.state.password} />
                    <button>Submit</button> 
                </form>
            </div>
        )
    }
}