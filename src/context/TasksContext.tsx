import { createContext, useEffect, useState } from "react";


export interface Task {
  title: string;
  done: boolean;
  id: number;
}
interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleToggleTaskStatus: (taskId: number) => void
}


export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {

  const [tasks, setTasks] = useState([] as Task[]);


  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done
        };
      }
      return task
    });

    setTasks(newTasks)
  }


  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem('tasks')

    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage)) // string para array
    }
  }, []);



  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        handleToggleTaskStatus,
      }}
    >

      {children}
    </TasksContext.Provider>
  )
}