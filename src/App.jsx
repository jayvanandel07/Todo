import { useState } from 'react'
import styles from './App.module.css'
import Todo from './Components/Todo'
import { useMemo } from 'react';


function App() {
  const [todoList,setTodoList]= useState(
    [{
      id:1,
      todo:"Test Todo sit lore lorem ipsum dolor",
      status: "Active"
    }]
  )
  
  const [item,setItem]=useState("");

  const itemCount= useMemo(() => {
    var count= 0;
    todoList.forEach((item) => {
      if (item.status === "Active"){
        count++;
      }
    }
    )
    return count;
  }, [todoList])
  const handleAddItem =  () => {
    if (item.trim() != ""){
      setTodoList((prev) => ([...prev, {id: prev.length + 1,todo: item ,status: "Active"}]));
      setItem("");
    }
  }
  

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.logo}`}>
        TODO
      </div>
      <div className={`${styles.newTodo}`} >
        <div className={`${styles.newTodoIcon}`}></div>
        <input type="text" onKeyDown={(e) => {  
          if (e.key === 'Enter'){
            handleAddItem(e);
          }
        }}
        onChange={(e) => setItem(e.target.value)}
        value={item}
        />
      </div>
      <div className={`${styles.todoListContainer}`}>
        {
          todoList.map((todo,index) =>(
              <Todo key={index} todo={todo} setTodoList={setTodoList}/>
            ))
        }
        <div className={`${styles.TodoInfo}`}>
          {itemCount} items Left
        </div>
      </div>
    </div>
  )
}

export default App
