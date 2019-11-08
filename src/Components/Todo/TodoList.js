import React from 'react'
import AddItem from './AddItem'

const ToDoList = ({id, title, items, bgcolor }) => {

    console.log(id)

    console.log(title)
    let renderItems = () => {
        return items.map(item => (
            <div className='todo-list-item'>
                <h3> {item.name} </h3>
                <p> { item.description } </p>
            </div>
        ))
    }

    const addItem = () => {
        console.log('got here')
    }

    return (
        <div className='todo-list'>
            <div className='todo-list-title' style={{ background: bgcolor }}>
                <div className='pushpin-container'>
                    <img className='pushpin' src={require('../../assets/pushpin.png')} alt='pushpin' />
                    <div className='edit-list'>
                        <i class="fas fa-trash-alt fa-lg"></i>
                    </div>
                </div>
                <h2> { title } </h2>
            </div>
            <AddItem bgcolor={bgcolor} addItem={addItem} />
            {renderItems()}
        </div>
    )
}

export default ToDoList