import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css'

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete }: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isComplete).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => {
                    return <Task key={task.id} task={task} onDelete={onDelete}/>
                })}
            </div>
        </section>
    );
}