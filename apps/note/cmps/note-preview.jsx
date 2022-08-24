const { Link } = ReactRouterDOM

export function NotePreview({ note }) {

  return (
    <h3>{note.type}</h3>

  )
}

{/* <Link to={`/note/${note.id}`}>
<div className="note-preview">
  
</div>
</Link> */}