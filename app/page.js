import { getAllTodos } from '@/api'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'

export default async function Home() {
    const todos = await getAllTodos()
    return (
        <main className="max-w-4xl mx-auto mt-4 text-black px-2">
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Simple Todo List App</h1>
                <AddTask />
            </div>
            <TodoList todos={todos} />
        </main>
    )
}
