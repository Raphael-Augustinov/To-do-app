import React from "react";


const Form = ({input, setInput, tasks , setTasks, setStatus, status}) => {
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const submitTaskHandler = (e) => {
        e.preventDefault();
        if(input !=='')
            setTasks([...tasks, {text: input, completed: false ,id: Math.round(Math.random()*1000)}]);
        setInput("");
    };
    const statusHandler =(e) =>{
        setStatus(e.target.value);
    };
    return (
        <form>
            <input value={input} onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={submitTaskHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo" value={status}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );

}

export default Form;