import React from "react";

function Task({id, text, category}) {
  return (
    <div id={id}className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button id={id}className="delete" 
      onClick={event => document.getElementById(event.target.id).remove()}>X</button>
    </div>
  );
}

export default Task;
