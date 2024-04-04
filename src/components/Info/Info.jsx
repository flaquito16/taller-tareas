import React, { useContext, useEffect } from 'react'
import './Info.css'
import { tasksContext } from '../Context/Context'

export const Info = () => {
    const context = useContext(tasksContext)

  useEffect(()=>{
    let pending = context.tasks.filter( tasks => tasks.status === false)
    let resolve = context.tasks.filter( tasks => tasks.status === true)
    
    context.setPedingTask(pending.length)
    context.setDoneTask(resolve.length)
  
  }, [context.tasks])

  return (
    <>
    <p className='info-tasks'>usted tiene <span className='tasks-pending'>{context.pendingTask}</span> y tiene pendiente <span className='task-donde'>{context.doneTask}</span> terminados</p>
    </>
  )
}
