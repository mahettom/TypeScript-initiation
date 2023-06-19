import { FC, useState, ChangeEvent } from 'react'
import './App.css'

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>();
  const [todo, setTodo] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {

    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else { 
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {

  }

  return (
    <>
    <header>
      <div>
      <input type="text" placeholder='Task ...' name='task' onChange={handleChange}/>
      <input type="number" placeholder='Deadline in days' name='deadline' onChange={handleChange}/>
      </div>
      <button onClick={addTask}>ADD</button>
    </header>

    <section>

    </section>
      
    </>
  )
}

export default App
