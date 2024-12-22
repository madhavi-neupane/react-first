import React from 'react'

const TodoForm = () => {
  return (
    <div>
      <form className="todoform">
        <input
          type="text"
          className="todo-input"
          placeholder="let's be productive"
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TodoForm
