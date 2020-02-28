import React from 'react';
import { BrowserRouter as Router , Route, Link, Switch  } from "react-router-dom"
import './App.scss';

function App() {

  return (
    <Router>
      <div className="app">
        <h1>Sistema de rutas base</h1>
        <Link to="/">Home</Link><br />
        <Link to="/contact">Contact</Link><br />
        <Link to="/users">Users</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/users" exact component={Users} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Estamos en el componente Home ...</h2>;
}
function Contact() {
  return <h2>Estamos en el componente Contact...</h2>;
}
function Users() {
  return <h2>Estamos en el componente Users ...</h2>;
}
function Error404() {
  return <h2>404: Página no encontrada</h2>;
}

export default App;
