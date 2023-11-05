import React from 'react'

const Todo = ({todo}) => {
  return (
    <div class="todo">
        <div>{todo.id}</div>
        <input type="checkbox" checked={todo.completed} />
    </div>
  )
}

export default Todo