export function NoteTodos({ info, id, onToggleTodo }) {

    return <article className="note-todos">
        <h1>{info.title}</h1>
        <ul>
            {
                info.todos.map((todo, idx) => {
                    const crossedOutClass = todo.doneAt ? 'crossed-out' : ''
                    const isChecked = todo.doneAt ? true : false

                    return <li key={todo.txt} className={crossedOutClass}>
                        <label>
                            <input onClick={() => onToggleTodo(id, idx)} type="checkbox" checked={isChecked} />
                            {todo.txt}
                        </label>
                    </li>
                })
            }
        </ul>
    </article>
}

function NoteTodo({ note }) {
    return (
        <React.Fragment>
            <h2>NoteTodo</h2>
            {note.info.title &&
                <h2 className="note-title">{note.info.title}</h2>}
            {note.info.todos.map((todo, idx) => { <p key={idx}>{todo}</p> })}
        </React.Fragment>
    )
}