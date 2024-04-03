import React, { useContext, useEffect } from 'react'
import './Info.css'
import { tasksContext } from '../Context/Context'

export const Info = () => {
    const context = useContext(tasksContext)
  return (
    <>
    <p className='info-tasks'>tiene <span className='tasks-pending'>{}</span> y tiene pendiente <span className=''></span> </p>
    </>
  )
}
