import React, { useContext, useEffect } from 'react'
import './Main.css'
import { ItemsTask } from '../../ItemsTask/ItemsTask'
import { Container } from '../../Container/Container'
import { tasksContext } from '../../Context/Context'

export const Main = () => {
  const context = useContext(tasksContext)
 


  return (
    <>
      <main>
        <Container>
          {            
            context.tasks.map((task) => <ItemsTask key={task.id} idTask={task.id} content={task.title} description={task.description}/>)
          }
        </Container>
      </main>
    </>
  )
  
}
