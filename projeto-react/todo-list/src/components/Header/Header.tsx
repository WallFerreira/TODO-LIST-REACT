
import { StatsCard } from '../StatsCard/StatsCard'

import styles from './styles.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>

          <span>Bem vindo Wallace</span>
        </div>

        <div>
          <StatsCard title='Total de tarefas' value={5} />
          <StatsCard title='Tarefas pendentes' value={4} />
          <StatsCard title='Tarefas concluidas' value={1} />
        </div>
      </div>
    </header >
  )
}

