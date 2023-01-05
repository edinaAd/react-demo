import { Route, Switch } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import AllTodos from "./components/pages/AllTodos";
import NewTodo from './components/pages/NewTodo';
import Scroll from './components/pages/Scroll';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
        <AllTodos />
        </Route>
        <Route path='/new-todo'>
        <NewTodo />
        </Route>
        <Route path='/scroll'>
        <Scroll></Scroll>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
