import React from "react";


const Task = ({text, task, setTasks, tasks}) =>{
    const deleteHandler = () => {
        setTasks(tasks.filter(el => el.id !== task.id))
    };
    const completeHandler = () => {
        setTasks(tasks.map(el => {
            if(el.id === task.id){
                return{
                    ...el, completed: !el.completed
                };
            }
            return el;
        }))
    };
    return(
        <div className='todo'>
            <li className={`todo-item ${task.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );

};
export default Task;