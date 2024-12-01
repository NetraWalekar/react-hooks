import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [selectedId,setId] = useState(1)

  return <div>
    <button onClick={() => setId(1)}>1</button>
    <button onClick={() => setId(2)}>2</button>
    <button onClick={() => setId(3)}>3</button>
    <button onClick={() => setId(4)}>4</button>
    <Todo id={selectedId}></Todo>
  </div>
}

function Todo({id}) {
  const [todo,setTodos] = useState({})

  useEffect(() => {
    fetch(`https://dummyjson.com/todos/${id}`)
      .then(async function(res) {
        const json = await res.json();
        setTodos(json);
      })
  },[id])

  return <div>
    <h1>
      {todo.todo}
    </h1>
    <h4>
      {todo.completed}
    </h4>
  </div>
}

export default App;