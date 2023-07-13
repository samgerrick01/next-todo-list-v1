import axios from 'axios'
//Live Server
const baseUrl = 'https://next-todo-list-v1-server.onrender.com'

export const getAllTodos = async () => {
    const res = await fetch(`${baseUrl}/todos`, { cache: 'no-store' })
    const todos = await res.json()
    return todos
}

export const addTodo = async (todo) => {
    const res = await fetch(`${baseUrl}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    const newTodo = await res.json()
    return newTodo
}

export const updateTodo = async (todo) => {
    const res = await fetch(`${baseUrl}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    const updatedTodo = await res.json()
    return updatedTodo
}

export const updateStatus = async (todo) => {
    const res = await fetch(`${baseUrl}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    const updatedTodoStatus = await res.json()
    return updatedTodoStatus
}

export const deleteTodo = async (id) => {
    await fetch(`${baseUrl}/todos/` + id, {
        method: 'DELETE',
    })
}
