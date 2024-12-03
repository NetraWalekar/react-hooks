import { useMemo, useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue , setInputValue] = useState(1)

let count = useMemo(() => {
  let finalCount = 0
  for(let i = 0;i<= inputValue;i++){
    finalCount += i;
}
return finalCount
},[inputValue])
   
  

  return (
    <div>
      <input type="text" value={inputValue} onChange={function Change(event){
        setInputValue(event.target.value )
      }}/>
      <h2>sum is : {count}</h2>
      <button onClick={function SetCounter() {
        setCounter(counter + 1);
      }}>Counter : {counter}</button>
    </div>
  )

}
export default App

