'use client'

import { useState } from 'react'
import Todo from './Todo'
import Modal from './Modal'
import { deleteTodo, updateStatus, updateTodo } from '@/api'
import { useRouter } from 'next/navigation'
import Loading from './Loading'

function TodoList({ todos }) {
    const router = useRouter()

    //Delete state
    const [delModal, setDelModal] = useState(false)
    const [data, setData] = useState(null)
    //Edit state
    const [editModal, setEditModal] = useState(false)
    const [editVal, setEditVal] = useState('')
    //loading state
    const [loading, setLoading] = useState(false)

    const handleEdit = async (e) => {
        e.preventDefault()
        if (editVal) {
            setLoading(true)
            await updateTodo({
                id: data.id,
                text: editVal,
                status: data.status,
            })
            setEditModal(false)
            router.refresh()
            setLoading(false)
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        setLoading(true)
        await deleteTodo(data.id)
        setDelModal(false)
        router.refresh()
        setLoading(false)
    }

    const handleStatus = async (todo) => {
        // e.preventDefault()
        setLoading(true)
        await updateStatus({
            id: todo.id,
            text: todo.id,
            status: !todo.status,
        })
        router.refresh()
        setLoading(false)
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-black">
                        <th className="w-3/5">Todos</th>
                        <th className="w-1/5">Status</th>
                        <th className="w-1/5">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {todos.length !== 0 &&
                        todos.map((todo) => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                setEditModal={setEditModal}
                                setDelModal={setDelModal}
                                setData={setData}
                                setEditVal={setEditVal}
                                handleStatus={handleStatus}
                            />
                        ))}
                </tbody>
            </table>
            <div className="w-full flex justify-center">
                {todos.length === 0 && 'NO TODOS!'}
            </div>
            {/* Delete Modal */}
            <Modal
                open={delModal}
                close={() => setDelModal(false)}
                title="Delete Todo?"
            >
                <div className="flex flex-col">
                    <span>Are you sure you want to delete?</span>
                    <div className="flex w-full justify-end">
                        <button
                            className="btn btn-error"
                            onClick={handleDelete}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </Modal>
            {/* Edit Modal */}
            <Modal
                open={editModal}
                close={() => setEditModal(false)}
                title="Edit Todo"
            >
                <form onSubmit={handleEdit}>
                    <div className="modal-action justify-center">
                        <input
                            id="edit-todo"
                            style={{ color: 'black' }}
                            type="text"
                            placeholder="Enter Todo"
                            className="input input-ghost w-full max-w-xs bg-white"
                            value={editVal}
                            onChange={(e) => setEditVal(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            </Modal>
            <Loading value={loading} />
        </div>
    )
}

export default TodoList
