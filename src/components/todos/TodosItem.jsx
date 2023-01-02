import Card from "../ui/Card";
import classes from "./TodosItem.module.css";
const TodosItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
};
export default TodosItem;
