import React from "react";
import {useState }from "react"
function NewTaskForm({onTaskFormSubmit}) {
  const [category, setCategory] =useState("categpry")
  const [food, setFood] =useState("")

  return (
    <form className="new-task-form" onSubmit={e =>{e.preventDefault()
onTaskFormSubmit({"category": category, "text": food})
    }}>
      <label>
      Details
        <input type="text" name="text" 
        onChange={event => setFood(event.target.value)}/>
      </label>
      <label> Category
       
    
        <select name="category" 
        onChange={event => setCategory(event.target.value)}>
         
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>


        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;