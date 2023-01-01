import TodosItem from "./TodosItem";

const TodosList = (props) => {
  return (
    <ul>
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
