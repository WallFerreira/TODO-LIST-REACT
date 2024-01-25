
import { FormEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss'


interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {

  const [taskTitle, setTaskTitle] = useState("")
  const [tasks, setTasks] = useState([] as Task[])

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 letras")
      return;
    }

    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ]
    setTasks(newTasks);

    localStorage.setItem('tasks', JSON.stringify(newTasks)) // array para string

    setTaskTitle("")
  }

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem('tasks')

    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage)) // string para array
    }
  }, [])


  return (
    <section className={styles.container}>

      <form
        onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar tarefa</label>
          <input
            type="text"
            id='task-title'
            placeholder='Titulo da tarefa'
            onChange={(event) =>
              setTaskTitle(event.target.value)
            }
            value={taskTitle} />
        </div>

        <button
          type='submit'
        >Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          )
        })}
      </ul>


    </section>
  )
}