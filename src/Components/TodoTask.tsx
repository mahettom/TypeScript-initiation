import { ITasks } from '../Interfaces'

interface Props {
    task: ITasks;
    taskComplete(taskNameToDelete: string): void;
}

const TodoTask = ({task, taskComplete}: Props) => {


  return (
    <>
        <div className='task'>
            <div className='task-info'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            
            <button onClick={() => {taskComplete(task.taskName)}}>x</button>
        </div>
    </>
  )

}


export default TodoTask