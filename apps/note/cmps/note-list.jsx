import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes }) {
  return (
    <section className="note-list">
      {notes.map((note) => (
        <NotePreview key={note.id} note={note} />
      ))}
    </section>
  )
}