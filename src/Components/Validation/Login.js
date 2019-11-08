import React, { Component } from 'react'
import './Login.scss'

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
                    <div className='pushpin-container'>
                        <img className='pushpin' src={require('../../assets/pushpin.png')} alt='pushpin' />
                    </div>
                    <div className='login-form-inputs'>
                        <input name='email' 
                            onChange={this.handleChange} 
                            type='text' 
                            placeholder='Enter Email' 
                            value={this.state.email} required/>
                        <input name='password' 
                            onChange={this.handleChange} 
                            type='text' 
                            placeholder='Enter Password' 
                            value={this.state.password} required/>
                        <button>Submit</button>
                    </div>
                    {this.props.failed ? <h1 class='failed'>Failed to Login</h1> : null}
                </form>
            </div>
        )
    }
}