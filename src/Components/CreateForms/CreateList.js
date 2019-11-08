import React, { Component } from 'react'

export default class CreateList extends Component { 

    state = {
        name: '',
        color: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    render (){
        return (
            <div className='create-list-form-container'>
                <form onSubmit={this.handleSubmit} className='create-list-form'>
                    <input name='name' placeholder='Enter List Name' value={this.state.name} onChange='this.handleChange'></input>
                    <input name='color' placeholder='Enter List Color' value={this.state.color} onChange='this.handleChange'></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}