import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";

function App() {
  const [newTasks, setTasks] = useState(TASKS);

  function changeTasks(category) {
    
    if (category === "All")
      setTasks(TASKS)
    else
      setTasks(TASKS.filter((task) => {
    return task.category === category}));
  }


  function onTaskFormSubmit({category: category, text: text}) {
    setTasks([...newTasks, {text: text, category: category}]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter changeTasks={changeTasks}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={newTasks}/>
    </div>
  );
}

export default App;