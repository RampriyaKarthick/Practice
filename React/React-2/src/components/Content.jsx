import React from 'react'
import styled from "styled-components"
import CounterApp from './CounterApp';


let headingStyle = {
  backgroundColor: "black",
  color: "white",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
}

let user = "Rampriya";

let Button = styled.button`
background-color: blue;
color:white;
width:100px;
height:50px;
`
let NewButton = styled(Button)`
background-color: green; 
`
function printSomething(){ //printSomething(e)
  // console.log(e.target.innerText)
  // console.log("Button Clicked");
  let user = "Murugesan"
  console.log(user)
}
function printSomething1(){ ////printSomething(event)
  // console.log(event.target.innerText)
  // console.log("Welcome");
    let user = "Rangasamy"
  console.log(user)
}

const Content = () => {
  return (
    <main>
   <h1 style={headingStyle}>Main Content- {user}</h1>
   <Button onClick ={printSomething}>Click Me</Button>
<NewButton onClick ={(e)=>{printSomething1(e)}}>New Button</NewButton>
<CounterApp/>
    </main>
  )
}

export default Content