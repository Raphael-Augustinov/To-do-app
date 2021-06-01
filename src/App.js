import React, {useState, useEffect} from "react";
import './App.css';
import Form from './componente/Form';
import List from './componente/List';

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [taskdone, setTaskdone] = useState([]);

  useEffect(() => {getTasks();},[]);

  useEffect(() => {
    filterHandler();
    saveTasks();
  }, [tasks,status]);

  const filterHandler = () => {
    switch(status)
    {
      case 'completed':
        setTaskdone(tasks.filter(task => task.completed === true));
        break;
      case 'uncompleted':
        setTaskdone(tasks.filter(task => task.completed === false));
        break;
      default:
        setTaskdone(tasks);
        break;
    }
  };
  const saveTasks = () => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
    localStorage.setItem("status",JSON.stringify(status));
  };
  const getTasks = () => {
    if(localStorage.getItem("tasks") === null)
      localStorage.setItem("tasks",JSON.stringify([]));
    else
    {
      let tasksSt = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasksSt);
      let statusSt = JSON.parse(localStorage.getItem("status"));
      setStatus(statusSt);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form status={status} tasks={tasks} setTasks={setTasks} input={input} setInput={setInput} setStatus={setStatus}/>
      <List taskdone={taskdone} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
