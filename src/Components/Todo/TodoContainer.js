import React from 'react'
import TodoList from './TodoList'
import './Todo.scss'

function ToDoContainer({ lists }){
    const renderLists = () => {
        return lists.map(list => (
            <TodoList title={list.title.name} items={list.items} />
        ))
    }

    return (
        <div className='todo-container'>
            {renderLists()}
        </div>
    )
}

export default ToDoContainer
