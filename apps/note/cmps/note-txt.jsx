export function NoteTxt({ info }) {
    return <article>
        <h1>{info.title}</h1>
        <h2>{info.subject}</h2>
    </article>
}

function NoteTxt({ note }) {
    return (
        <React.Fragment>
            <h2>NoteTxt</h2>
            {note.info.title &&
                <h2 className="note-title">{note.info.title}</h2>}
            <p>{note.info.txt}</p>
        </React.Fragment>
    )
}