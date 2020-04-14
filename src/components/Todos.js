import React, { useState, useEffect } from 'react';
import useFetch from 'use-http'

function Todos() {
  const [todos, setTodos] = useState([]);

  const [request, response] = useFetch('https://jsonplaceholder.typicode.com');

  // componentDidMount
  useEffect(() => {
    initializeTodos()
  }, []);
  
  async function initializeTodos() {
    const initialTodos = await request.get('/todos');
    if (response.ok) setTodos(initialTodos);
  }

  async function addTodo() {
    const newTodo = await request.post('/todos', {
      title: 'no way',
    });
    if (response.ok) setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <div>{ request.error && 'Error!' }</div>
      <div>{ request.loading && 'Loading...' }</div>
      <div>{ todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default Todos;