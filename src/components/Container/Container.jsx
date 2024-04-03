import React from 'react'
import './Container.css'

export const Container = ({children}) => {
    return(
        <ul className='container-tasks'>
            {children}
        </ul>
    )
}