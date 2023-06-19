import { FC, useState } from 'react'
import './App.css'

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>();
  const [todo, setTodo] = useState([]);



  return (
    <>
    <header>
      <div>
      <input type="text" placeholder='Task ...' />
      <input type="number" placeholder='Deadline in days' />
      </div>
      <button>ADD</button>
    </header>

    <section>

    </section>
      
    </>
  )
}

export default App
