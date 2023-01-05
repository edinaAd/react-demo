import Card from "../ui/Card";
import classes from './NewTodoForm.module.css';
import { useRef} from "react";

const NewTodoForm = (props) => {
 

  const titleInput = useRef();
  const descriptionInput = useRef();
  
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    const todoData = {
      title: enteredTitle,
      description: enteredDescription
    }

    props.onAddTodo(todoData);
    console.log(enteredTitle, enteredDescription);
  

  }

  return (
    <Card>
    
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Todo Title</label>
          <input type="text" id="title" required ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Todo Description</label>
          <input type="text" id="description" required ref={descriptionInput} />
        </div>
        <div className={classes.actions}>
        <button>Add Todo</button>
        </div>
      </form>
    </Card>
  );
};
export default NewTodoForm;
