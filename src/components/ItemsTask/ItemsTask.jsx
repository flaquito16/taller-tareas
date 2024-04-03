import React, { useContext } from 'react'
import './ItemsTask.css'
import { tasksContext } from '../Context/Context';


export const ItemsTask = ({idTask,content, description}) => {

    const {tasks, update} =useContext(tasksContext)
    const task = tasks.find(task => task.id=== idTask)

    const handleCheck = () => {
        update(idTask, !task.status)
    }

return(
    <>
    <li id={idTask} className={task.status ? "item-task checked" : "item-task"}>
    <div className={task.status ? "circle-state circle-green": "circle-state"} ></div>
    <p className='item'>
        <span className='cont'>{content}</span><span className='descrip'>{description}</span> 
        <input className='che' type="checkbox" checked={task.status} onChange={handleCheck} /></p>
    </li>
    
    </>
);

}