import React, { Component } from 'react'
import './CreateListItem.scss'

export default class CreateListItem extends Component { 

    state = {
        company: '',
        job: '',
        link: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    render(){
        return (
            <div className={`create-list-item-container ${this.props.showForm ? 'active' : 'hidden'}`}>
                <form onSubmit={this.handleSubmit} className='create-list-item-form'>
                    <input name='company' 
                           onChange={this.handleChange} 
                           value={this.state.company} 
                           placeholder='Enter Company'>
                     </input>
                    <input name='job' 
                           onChange={this.handleChange} 
                           value={this.state.job}
                           placeholder='Enter Job Title'>
                    </input>
                    <input name='link' 
                           onChange={this.handleChange} 
                           value={this.state.link}
                           placeholder='Enter Job Post Link'>
                    </input>

                    <button>Add Job</button>
                </form>
            </div>
        )
    }

}