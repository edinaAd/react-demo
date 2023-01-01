import TodosList from "../todos/TodosList";
import { useState, useEffect } from "react";
const AllTodos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-dd8e7-default-rtdb.firebaseio.com/todos.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const todos = [];
      for(const key in data) {
        const todo = {
          id: key,
          ...data[key]
        };
        todos.push(todo);
      }
      setIsLoading(false);
      setLoadedTodos(todos);
    });

  }, [])
 
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Todos</h1>
      <TodosList todos={loadedTodos} />
    </section>
  );
};
export default AllTodos;
