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

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isComplete: false,  
      }
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompleteById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,  
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}/>

      <Tasks 
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompleteById}
      />
    </>
  )
}

export default App
