import TodosItem from "./TodosItem";
import classes from './TodosList.module.css';

const TodosList = (props) => {
  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <TodosItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </ul>
  );
};
export default TodosList;
