import React from 'react'
import { createContext ,useState } from 'react'

export const tasksContext = createContext()

export const tasksProvider = ({children}) => {
    const [tasks, setTasks] = useState ([])
  return (
    <tasksContext.Provider value={{ tasks, setTasks }}>
    {children}
  </tasksContext.Provider>
  )
}
