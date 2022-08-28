
import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote }) {

  return <section className="note-list">

    {notes.map(note => {
        return <div className="note-preview" key={note.id}>
          <NotePreview note={note} />
          <button onClick={() => onRemoveNote(note.id)}><i className="fa-solid fa-trash-can"></i></button>
        </div>
      })

    }
  </section>
}

// import { NotePreview } from "./note-preview.jsx";

// export function NoteList({ notes, onToggleTodo }) {
//   return <section className="note-list">
//     {
//       notes.map(note => {
//         const bgcolorTag = note.style ? note.style.backgroundColor : ''
//         const borderTag = bgcolorTag && note.type !== 'note-img' ? 'border-invisible' : 'border-visible'

//         return < article key={note.id} className={`note-preview ${bgcolorTag} ${borderTag}`} >
//           < NotePreview note={note} onToggleTodo={onToggleTodo} />
//         </ article>
//       })
//     }
//   </section >
// }



