import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  let id =0

  console.log(tasks)
  return (
    <div className="tasks">
      
      {tasks.map(taskItem =><Task id ={id++} text={taskItem.text} category={taskItem.category}/>)}
      
    </div>

  );
}

export default TaskList;
