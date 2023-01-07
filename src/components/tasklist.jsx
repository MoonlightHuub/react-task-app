import TaskCard from "./taskCard"
import { useContext } from "react"
import { TaskContext } from "../context/taskContext"

export function TaskList(){

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0){
        return <h1 className="text-4xl text-white font-bold mt-20 text-center">There's no tasks to do</h1>
    }

    return(
        <div className="grid grid-cols-3 gap-2">
            {tasks.map(task => (
                <TaskCard key= {task.id} task= {task} />
            ))}
        </div>
    )
}

