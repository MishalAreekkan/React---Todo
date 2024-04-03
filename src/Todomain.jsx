import { useState } from "react";
import React from 'react'
import Todo from './Todo'
import Todolist from "./Todolist";



function Todomain() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div style={{width:'100%',height:'100vh'}} className="d-flex justify-content-center align-items-center">

    <div className='bg-secondary inputbox d-flex flex-column justify-content-start  align-items-center border'  style={{height:'70vh',border:'none',outline:'none',overflow:'auto', width:'50%',borderRadius:'10px',boxShadow:'3px 3px 8px rgba(0,0,0,1)' }}>
      <div  className="mt-5">

      <Todo
        data={{ input, setInput, todos, setTodos }}
        />
        </div >
        <div className=" px-3 mt-3" style={{width:'50%'}} >

      <Todolist todos={todos} setTodos={setTodos} />
    </div>
        </div>
        </div>
  )
}

export default Todomain
