import { FC, useState, ChangeEvent } from 'react'
import { ITasks } from './Interfaces';
import './App.css'
import TodoTask from './Components/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITasks[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {

    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else { 
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask])
    console.log(todoList);
    setTask('')
    setDeadline(0)
  }

  return (
    <>
    <header>
      <div>
      <input type="text" placeholder='Task ...' name='task' value={task} onChange={handleChange}/>
      <input type="number" placeholder='Deadline in days' name='deadline' value={deadline} onChange={handleChange}/>
      </div>
      <button onClick={addTask}>ADD</button>
    </header>

    <section>
      {todoList.map((task: ITasks, key: number) => {
        return <TodoTask key={key} task={task}/>
      })}
    </section>
      
    </>
  )
}

export default App
