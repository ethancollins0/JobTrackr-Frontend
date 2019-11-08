import React, { Component } from 'react'
import AddItem from './AddItem'
import CreateListItem from '../CreateForms/CreateListItem'

export default class ToDoList extends Component {

    state = {
        showForm: false
    }

    renderItems = () => {
        return this.props.items.map(item => (
            <div className={`todo-list-item ${this.state.showForm ? 'active-todo' : 'inactive-todo'}`}>
                <h3> {item.name} </h3>
                <p> { item.description } </p>
            </div>
        ))
    }

    addItem = () => {
        console.log('got here')
    }

    toggleForm = () => {
        let bool = this.state.showForm
        this.setState({ showForm: !bool })
    }

    render(){
        console.log(this.state.showForm)
        const {id, title, items, bgcolor } = this.props
        return (
        
            <div className='todo-list'>
                <div className='todo-list-title' style={{ background: bgcolor }}>
                    <div className='pushpin-container'>
                        <img className='pushpin' src={require('../../assets/pushpin.png')} alt='pushpin' />
                        <div className='edit-list'>
                            <i className="fas fa-trash-alt fa-lg"></i>
                        </div>
                    </div>
                    <h2> { title } </h2>
                </div>
                <AddItem toggleForm={this.toggleForm} bgcolor={bgcolor} />
                <CreateListItem showForm={this.state.showForm} />
                {this.renderItems()}
            </div>
        )
    }
}