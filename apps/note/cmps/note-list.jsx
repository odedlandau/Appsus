const { Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx"


export function NoteList({ notes, onRemoveNote }) {

  // DynamicCmp = (props) => {
  //   const { note } = this.props
  //   switch (note.type) {
  //     case 'note-txt':
  //       return <NoteTxt {...props} />
  //     case 'note-img':
  //       return <NoteImg {...props} />
  //     case 'note-todos':
  //       return <NoteToDos {...props} />
  //     case 'note-video':
  //       return <NoteVideo {...props} />
  //     case 'note-audio':
  //       return <NoteAudio {...props} />
  //     case 'note-canvas':
  //       return <NoteCanvas {...props} />
  //   }
  // }

  return <section className="note-list">

    {notes.map(note =>
      <div className="note-preview" key={note.id}>
        <NotePreview note={note} />
        <Link to={"/note/" + note.id}>Details</Link> |
        {/* <Link to={`/note/edit/${note.id}`}>Edit</Link> */}
        <button onClick={() => onRemoveNote(note.id)}>X</button>

      </div>)
    }
  </section>
}



