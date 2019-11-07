import React from 'react'

const ToDoList = ({title, items }) => {


    let renderItems = () => {
        return items.map(item => (
            <div>
                <h3> {item.name} </h3>
                <p> { item.description } </p>
            </div>
        ))
    }

    return (
        <div className='todo-list'>
            <h2> { title } </h2>
            {renderItems()}
        </div>
    )
}

export default ToDoList