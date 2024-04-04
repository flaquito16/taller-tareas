import React from 'react'
import { createContext ,useState } from 'react'

export const tasksContext = createContext()

export const TasksProvider = ({children}) => {
    const  [tasks, setTasks] = useState ([])
    const [filterTask, setFilterTask] = useState ([])
    const [beginTask, setBeginTask] = useState ([])
    const [pendingTask, setPedingTask] = useState (0)
    const [doneTask, setDoneTask] = useState(0)
  
  const update = (taskId, newStatus) =>{
    setTasks(prevTasks =>
    prevTasks.map(task=>
      task.id==taskId ? {...task, status: newStatus} : task
      )
    );
  }

  return (
    <tasksContext.Provider value={{tasks, setTasks,filterTask, setFilterTask, update, beginTask, setBeginTask, pendingTask, setPedingTask, doneTask, setDoneTask}}>
    {children}
  </tasksContext.Provider>
  )
}
