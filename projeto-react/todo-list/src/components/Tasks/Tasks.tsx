
import { FormEvent, useContext, useState } from 'react'
import styles from './styles.module.scss'
import { TasksContext } from '../../context/TasksContext';



export const Tasks: React.FC = () => {

  const [taskTitle, setTaskTitle] = useState("")

  const { tasks, setTasks, handleToggleTaskStatus } = useContext(TasksContext)

  // console.log("Componente Tasks: ", variavel);


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



  function handleRemoveTask(taskId: number) {
    const newTasks = tasks.filter((task) => taskId !== task.id);
    setTasks(newTasks);
  }

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

        <button className={styles.btnAddTask}
          type='submit'
        >Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label className={task.done ? styles.done : ''} htmlFor={`task-${task.id}`}>{task.title}
              </label>
              <button onClick={() => { handleRemoveTask(task.id) }}>X</button>
            </li>
          )
        })}
      </ul>


    </section>
  )
}
