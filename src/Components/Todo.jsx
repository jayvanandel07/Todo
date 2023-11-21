import React from 'react'
import styles from './Todo.module.css'
function Todo({todo, setTodoList}) {

  const handleChange = (e) =>{

    if(e.target.checked){
      setTodoList((prev) => ([
        ...prev.slice(0, todo.id -1),{
        ...prev[todo.id - 1],
          status: "Completed"
        },
        ...prev.slice(todo.id )
      ]))
    }else{
      setTodoList((prev) => ([
        ...prev.slice(0, todo.id -1),{
        ...prev[todo.id - 1],
          status: "Active"
        },
        ...prev.slice(todo.id )
      ]))
    }
  }
  return (
    <div className={`${styles.todoContainer}`}>
        <input type="checkbox" onChange={handleChange}/>
        <span>{todo.todo}</span>
    </div>
  )
}

export default Todo