import React, { useContext, useEffect } from 'react'
import './Main.css'
import { ItemsTask } from '../../ItemsTask/ItemsTask'
import { Container } from '../../Container/Container'
import { tasksContext } from '../../Context/Context'

export const Main = () => {
  const otherContext = useContext(tasksContext)

  useEffect(() => {
    console.log(otherContext.tasks)
  }, [otherContext.tasks])
  

  return (
    <>
      <main>
        <Container>
          {            
            otherContext.tasks.map((element) => <ItemsTask content={element.title} description={element.description}/>)
          }
        </Container>
      </main>
    </>
  )
}
