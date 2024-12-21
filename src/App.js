import './App.css'
import TodoWrapper from './components/TodoWrapper'
import TodoForm from './components/TodoForm'
import TodoEdit from './components/TodoEdit'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <TodoForm />
      <TodoEdit />
      <Todo />
    </div>
  )
}

export default App
