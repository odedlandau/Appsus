// const { Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote }) {

  return <section className="note-list">

    {notes.map(note =>
      <div className="note-preview" key={note.id}>
        <NotePreview note={note} />
        <button onClick={() => onRemoveNote(note.id)}>X</button>

      </div>)
    }
  </section>
}



