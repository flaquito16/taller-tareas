import React from 'react'
import { createContext ,useState } from 'react'

export const tasksContext = createContext()

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState ([])
    const [filterTask, setfilterTask] = useState (tasks)

  const update = (tas)

  return (
    <tasksContext.Provider value={{tasks,setTasks}}>
    {children}
  </tasksContext.Provider>
  )
}
