import styles from '../CSS/styles.module.css'

const ToDo=({todoItem})=>
{
    return (
        <div>
            <div className={styles.toDoItem}>
                <h3 className={styles.toDoName} >{todoItem.name}</h3>
                <button className={styles.delete}>Done</button>
            </div>
        </div>
    )
}
export default ToDo