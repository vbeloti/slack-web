import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/room/:roomId">
              <h1>Chat</h1>
            </Route>

            <Route path="/">
              <h1>HOme</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
