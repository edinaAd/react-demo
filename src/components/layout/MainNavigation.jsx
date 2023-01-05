import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Todo List</div>
      <nav>
      <ul>
          <li><Link to='/'>All Todos</Link></li>
          <li><Link to='/new-todo'>Add New Todo</Link></li>
          <li><Link to='/scroll'>Scroll</Link></li>

          
      </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
