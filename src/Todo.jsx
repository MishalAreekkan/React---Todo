import React from 'react'
import { Button } from 'react-bootstrap';
function Todo({ data }) {
  const { input, setInput, todos, setTodos } = data
  const changeininput = (e) => {
    setInput(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    let id = Math.floor(Math.random() * 100000);
    setTodos([...todos, { id: id, title: input }]);
    setInput("");
  }
  return (
    <div >
    <form className='d-flex  align-items-center' onSubmit={submit}>

      <input className='p-2 m-2' style={{outline:'none',border:'none',borderRadius:'2px',caretColor:'green'}} type="text" placeholder='Enter A Task' value={input} required
        onChange={changeininput} />
      <Button className='Todo-btn btn-warning' type='submit'>Add Task</Button>
    </form>
    </div>
  )
}

export default Todo
