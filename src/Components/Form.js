import styles from '../CSS/styles.module.css'
import shortid from 'shortid'

const Form=({todo, setTodo, todoList, setTodoList})=>//Destructuring the props
{
    const handleChange=(event)=>
    {
        setTodo(event.target.value);//Setting value of todo to the input value
        console.log(todo)
    }

    const handleSubmit=(event)=>
    {
        event.preventDefault()//Prevents page from refreshing after data is submitted
        setTodoList([...todoList,{name: todo, id: shortid.generate()}])//Takes all items in the todo list and adds it into the array 
        console.log(todoList)
        setTodo("")//Setting the state of input field to empty after submission
        
    }
    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} placeholder="Add to do item" className={styles.input}></input>
                <button type='submit' className={styles.button}>Add item</button>
            </form>
        </div>
    )
}
export default Form