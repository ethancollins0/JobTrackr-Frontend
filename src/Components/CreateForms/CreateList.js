import React, { Component } from 'react'

const stickyNoteColors = [
    {name: 'light pink' , color: '#ff7eb9'},
    {name: 'pink' , color: '#ff65a3'},
    {name: 'light blue' , color: '#7afcff'},
    {name: 'light yellow' , color: '#feff9c'},
    {name: 'yellow' , color: '#fff740'},
]

export default class CreateList extends Component { 

    

    state = {
        name: '',
        color: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createList(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    renderOptions = () => {
        return stickyNoteColors.map(color => {
            return (
                <option value={color.color}>{color.name}</option>
            )
        })
    }
    
    render (){
        return (
            <div className={`create-list-form-container ${this.props.showForm ? 'active' : 'hidden'}`}>
                <form onSubmit={this.handleSubmit} className='create-list-form'>
                    <input name='name' placeholder='Enter List Name' value={this.state.name} onChange={this.handleChange}></input>
                    <select name='color' onChange={this.handleChange}>
                        {this.renderOptions()}
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}