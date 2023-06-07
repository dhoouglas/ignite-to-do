import { ITask } from '../../App';
import styles from './task.module.css'
import { TbTrash } from 'react-icons/tb'

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div></div>
            </button>

            <p>
                {task.title}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>
    );
}