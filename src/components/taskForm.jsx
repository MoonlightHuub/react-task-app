import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";



export function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reward, setReward] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description, reward });
    setTitle('')
    setDescription('')
    setReward('')
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mx-auto bg-slate-400 rounded-md m-2 p-10">
        <h1 className="text-2xl font-bold text-green-200 mb-3" >Create your task</h1>
      <input
        type="text"
        placeholder="Title"
        className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <input
        type="text"
        placeholder="Reward"
        className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        onChange={(e) => {
          setReward(e.target.value);
        }}
        value={reward}
      />
      <textarea
        cols="30"
        rows="10"
        className="bg-slate-300 p-3 w-full h-40 mb-2 rounded-md"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bg-green-300 w-40 h-10 rounded-md hover:bg-green-200">Create Task</button>
    </form>
    </div>
  );
}
