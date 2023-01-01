import NewTodoForm from "../todos/NewTodoForm";
import { useHistory } from "react-router";

const NewTodo = () => {
    const history = useHistory();
    const addTodoHandler = (todoData) => {
        fetch('https://react-meetup-dd8e7-default-rtdb.firebaseio.com/todos.json',
        {
            method: 'POST',
            body: JSON.stringify(todoData),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(() => {
            history.replace('/');
        })
    }
  return (
    <div>
      <h1>Add New Todo</h1>
      <NewTodoForm onAddTodo={addTodoHandler} />
    </div>
  );
};
export default NewTodo;
