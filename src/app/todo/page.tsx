"use client";
import { useState } from "react";
import { Task } from "@/data/mockData";
import { FiCheckCircle, FiCircle, FiTrash2, FiEdit2, FiSave, FiX } from "react-icons/fi";

let taskId = 0;

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    const newTask: Task = {
      id: ++taskId,
      text: input.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const startEdit = (id: number, currentText: string) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const saveEdit = (id: number) => {
    if (!editText.trim()) return;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text: editText.trim() } : task
      )
    );
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">To-Do List</h1>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* Task list */}
      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No tasks yet.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-white dark:bg-gray-900 border dark:border-gray-700 flex justify-between items-center p-3 rounded-lg shadow-sm"
            >

              <div className="flex items-center gap-3 w-full">
                <button onClick={() => toggleTask(task.id)} title="Toggle complete">
                  {task.completed ? (
                    <FiCheckCircle className="text-green-500 text-xl" />
                  ) : (
                    <FiCircle className="text-gray-400 text-xl" />
                  )}
                </button>

                {editingId === task.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit(task.id)}
                    className="flex-1 bg-transparent border-b border-blue-500 dark:text-white focus:outline-none px-1"
                  />
                ) : (
                  <span
                    className={`flex-1 ${
                      task.completed ? "line-through text-gray-500" : "text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {task.text}
                  </span>
                )}
              </div>

              {/* Edit / Delete */}
              <div className="flex gap-2 items-center ml-3">
                {editingId === task.id ? (
                  <>
                    <button
                      onClick={() => saveEdit(task.id)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Save"
                    >
                      <FiSave />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-gray-400 hover:text-gray-600"
                      title="Cancel"
                    >
                      <FiX />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEdit(task.id, task.text)}
                      className="text-yellow-500 hover:text-yellow-600"
                      title="Edit"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}