import { useEffect, useMemo, useState } from "react"

function App(){
  const[counter,setCounter] = useState(0)
  const[inputValue,setinputValue] = useState(1)

  const count = useMemo(() => {
    console.log("memo")
    let finalcount = 0
    for(let i = 0 ; i<=inputValue;i++){
      finalcount = finalcount + i
    }
    return finalcount
  },[inputValue])
  
  return (
    <div>
      <input type="text" onChange={function(e){
        setinputValue(e.target.value)
      }}/>
      <h2>Sum of 1 to {inputValue} is {count}</h2>
      <button onClick={() => {setCounter(counter + 1)}}>Counter ({counter})</button>
    </div>
  )
}

export default App