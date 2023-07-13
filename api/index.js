import axios from 'axios'
//LocalHost
// const baseUrl = 'http://localhost:5000'
//Live Server
const baseUrl = 'https://next-todo-list-v1-server.onrender.com'

export const getAllTodos = async () => {
    const response = await axios.get(`${baseUrl}/todos`)
    const todos = await response.data
    return todos
}

export const addTodo = async (todo) => {
    const res = await axios.post(`${baseUrl}/todos`, todo, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const newTodo = await res.data
    return newTodo
}

export const updateTodo = async (todo) => {
    const res = await axios.put(`${baseUrl}/todos/${todo.id}`, todo, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const updatedTodo = await res.data
    return updatedTodo
}

export const updateStatus = async (todo) => {
    const res = await axios.put(`${baseUrl}/todos/${todo.id}`, todo, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const updatedTodoStatus = await res.data
    return updatedTodoStatus
}

export const deleteTodo = async (id) => {
    await axios.delete(`${baseUrl}/todos/` + id)
}
