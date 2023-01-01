import { Route, Switch } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import AllTodos from "./components/pages/AllTodos";
import NewTodo from './components/pages/NewTodo';
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
      </Switch>
    </Layout>
  );
}

export default App;
