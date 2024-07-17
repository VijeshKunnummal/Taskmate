import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Caregiver } from "./components/Caregiver";
import { Patient } from "./components/Patient";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" component={ Caregiver } />
            <Route path="/profile" component={ Patient } />
          </Routes>
        </div>
      </div>
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </Router>
  );
}

export default App;
