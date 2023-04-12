import ToDo from "./ToDo"

const ToDoList=({todoList})=>
{
    return(
        <div>
            {todoList.map((todoItem)=>(
                <ToDo key={todoItem.id} todoItem={todoItem}/>
            ))}
        </div>
    )
}
export default ToDoList