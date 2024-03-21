import React from 'react'
import './Main.css'
import {ItemsTask} from '../../ItemsTask/ItemsTask'
import {Filter} from '../../Filter/Filter'
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
      <Filter/>
    <Container>
    {
     otherContext.tasks.map( task=> <ItemsTask taskTitle={task.title} taskDescription={task.description} /> )
          }
    </Container>
    </main>
    
    </>
  )
}
