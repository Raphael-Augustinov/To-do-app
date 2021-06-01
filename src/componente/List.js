import React from "react";
import Task from "./Task";

const List = ({tasks, setTasks, taskdone}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {taskdone.map(task => (<Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} text={task.text}/>))}
            </ul>
        </div>
    );
}

export default List;