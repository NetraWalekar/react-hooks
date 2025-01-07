import { useEffect, useState } from "react";

function App(){
  const[id,setId] = useState(1)
 
  return(
   <div>
    <button onClick={() => setId(1)}>1</button>
    <button onClick={() => setId(2)}>2</button>
    <button onClick={() => setId(3)}>3</button>
    <button onClick={() => setId(4)}>4</button>
    <Todo id={id}></Todo>
   </div>
  )
}

function Todo({id}){
  const[todos,setTodos] = useState([])

 useEffect(() => {
  fetch(`https://dummyjson.com/todos/${id}`)
  .then(async function (res) {
    const json = await res.json()
    setTodos([json])
  })
 },[id])

  return(
    <div>
         {todos.map((todo,index) => (
          <div key={id}>
          <h1>{todo.todo}</h1>
          <h1>{todo.complete}</h1>
          </div>
         ))}
    </div>
  )
}

export default App