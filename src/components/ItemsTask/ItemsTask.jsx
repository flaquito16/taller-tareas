import React from 'react'
import './ItemsTask.css'

export const ItemsTask = ({content, description}) => <li >
    <span className='cont'>{content}</span><span className='descrip'>{description}</span> <input className='che' type="checkbox" name="" id="" /></li>