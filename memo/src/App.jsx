import React, { useState } from "react"

function App(){
  
    return(
      <div>
       <HeaderWithButton></HeaderWithButton>
       <Header props= "netra"></Header>   
      </div>
    )
}

function HeaderWithButton(){
  const [name,setName] = useState("my name is netra")
  function Click(){
    setName("my name is " + Math.random())
   }
  return(
    <div>
        <button onClick={Click}>Click me to change the title</button><br /><br />
        <Header props={name}></Header>
    </div>
  )
}

const Header = React.memo(function({props}){
  return(
    <div>
      {props}
    </div>
  )
}
)
export default App