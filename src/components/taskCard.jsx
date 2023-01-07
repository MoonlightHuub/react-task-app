import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500">{task.description}</p>
      <h3>$ {task.reward}</h3>
      <button
        className="bg-red-500 p-2 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
