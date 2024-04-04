import React, { useContext } from 'react'
import './Filter.css'
import { tasksContext } from '../Context/Context'



export const Filter = () => {

  const context = useContext(tasksContext)
  
  const handleFilter = (event) =>{
    
    let current = event.target.value
    
    
    
    if (current === 'pendientes') {
      context.setTasks(context.tasks.filter(task => !task.status))
    }else if (current === 'realizadas') {
      context.setTasks(context.tasks.filter(task => task.status))
    }else{
      context.setfilterTask(context.filterTask)
    }

  }



  return (
    <>
    <div className='filter'>
      <p className='fil'>filtrar:</p>
      <select onChange={handleFilter} name="nn" id="">
        <option value="todas">todas</option>
        <option value="pendientes">pendientes</option>
        <option value="realizadas">realizadas</option>
      </select>
      </div>
    </>
  )
}
