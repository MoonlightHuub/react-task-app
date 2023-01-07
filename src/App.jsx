import { TaskList } from "./components/tasklist"
import { NewTask } from "./components/taskForm"
import './CSS/normalize.css'


function App() {
  return (
    <main className="h-screen bg-zinc-600">
      <div className="container mx-auto p-10">
        <NewTask />
        <TaskList />
      </div>
    </main>
  )
}

export default App
