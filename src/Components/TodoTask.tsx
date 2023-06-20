import React from 'react'
import { ITasks } from '../Interfaces'

interface Props {
    task: ITasks;
}

const TodoTask = ({task}: Props) => {


  return (
    <>
        <div className='task'>
            <div className='task-info'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            
            <button>x</button>
        </div>
    </>
  )

}


export default TodoTask