import { useState } from 'react';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './styles/global.css'

export interface ITask {
  id: string;
  title: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 'teste',
      title: 'teste',
      isComplete: true,
    },
    {
      id: 'teste2',
      title: 'teste2',
      isComplete: false,
    },

  ]);

  return (
    <>
      <Header />

      <Tasks 
        tasks={tasks}
      />
    </>
  )
}

export default App
