import React from 'react'
import { MdDeleteForever } from "react-icons/md";
function Todolist({ todos, setTodos }) {
    const deleteHandle = (id)=>{
        let newState = todos.filter((item)=>item.id != id)
        setTodos(newState)
    }
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div style={{borderRadius:'2px' ,boxShadow:'inset 2px 2px 5px rgba(0,0,0,1)'}} className='bg-light my-1 px-3 py-1 input-list d-flex justify-content-between' key={todo.id}
                    >
           <div style={{overflow:'hidden',color:'darkgreen',letterSpacing:'-1.2px'}} > {todo.title}</div>
            <div className=' ps-3'><MdDeleteForever  color='red' size={25} onClick={()=>deleteHandle(todo.id)} />
            </div>
            </div>
            )     
            })}
        </div>
    )
}

export default Todolist
