import React, { useEffect, useState } from 'react'
import './style/Todo.css'
import TodoList from './components/TodoList'

function generateId() {
    return Math.floor(Math.random() * 1000)
}

const data = () => {
    let todo_list = localStorage.getItem('todos')
    if (todo_list) {
        return (todo_list = JSON.parse(localStorage.getItem('todos')))
    } else {
        return []
    }
}

const Todo = () => {
    const [inputTitle, setInputTitle] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [todos, setTodos] = useState(data())

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (e) => {
        e.preventDefault()
        if (inputTitle !== '') {
            setTodos((todos) =>
                todos.concat({
                    id: generateId(),
                    title: inputTitle,
                    description: inputDesc,
                }))
            setInputTitle('')
            setInputDesc('')
        }
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id))
    }

    return (
        <div className="todo">
            <div className="todo__add">
                <div className="todo__input">
                    <label>Title:</label>
                    <input
                        type="text"
                        placeholder='Add new todo'
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                </div>
                <div className="todo__input">
                    <label>Description:</label>
                    <input
                        type="text"
                        placeholder='Add todo description'
                        value={inputDesc}
                        onChange={(e) => setInputDesc(e.target.value)}
                    />
                </div>
                <button onClick={addTodo}>Add</button>
            </div>
            <div className="todo__list">
                {todos.map(({ id, title, description }) => (
                    <div className="class">
                        <TodoList
                            id={id}
                            title={title}
                            description={description}
                            removeTodo={removeTodo}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Todo