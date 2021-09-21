export const Todo = ({todo, removeTask, toggleTask}) => {

    return (
        <div key={todo.id} className='todoList'>
            <div className={todo.isComplete ? 'text-decoration' : 'text'}
                 onClick={() => toggleTask(todo.id)}>
                {todo.task}
            </div>
            <div onClick={() => removeTask(todo.id)} className='delete'>
                X
            </div>
        </div>
    )
}