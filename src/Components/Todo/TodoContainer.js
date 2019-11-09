import React from 'react'
import TodoList from './TodoList'
import './Todo.scss'

// const stickyNoteColors = [
//     '#ff7eb9',
//     '#ff65a3',
//     '#7afcff',
//     '#feff9c',
//     '#fff740',
// ]

function ToDoContainer({ lists, createListItem, showForm, deleteList }){
    const renderLists = () => {
        return lists.map(list => (
            <TodoList id={list.title.id} 
                      bgcolor={list.title.color} 
                      title={list.title.name} 
                      items={list.items} 
                      createListItem={createListItem} 
                      deleteList={deleteList} />
        ))
    }

    return (
        <div className={`todo-container ${showForm ? 'active-todo' : 'inactive-todo'}`}>
            {renderLists()}
        </div>
    )
}

export default ToDoContainer
