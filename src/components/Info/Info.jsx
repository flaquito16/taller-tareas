import React, { useContext, useEffect } from 'react'
import './Info.css'
import { tasksContext } from '../Context/Context'

export const Info = () => {
    const context = useContext(tasksContext)
 const pending = context.tasks.filter( tasks => tasks.status )
 const resolve = context.tasks.filter( tasks => !tasks.status )

  return (
    <>
    <p className='info-tasks'>usted tiene <span className='tasks-pending'>{resolve.length}</span> y tiene pendiente <span className='task-donde'>{pending.length}</span> terminados</p>
    </>
  )
}
