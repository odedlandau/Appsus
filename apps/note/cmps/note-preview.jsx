
export function NotePreview({ note }) {

  // function getNoteType(type) {
  //   switch (type) {
  //     case 'note-txt':
  //       return NoteTxt
  //     case 'note-img':
  //       return NoteImg
  //     case 'note-todos':
  //       return NoteTodos
  //     case 'note-video':
  //       return NoteVideo
  //   }
  // }
  // const DynamicCmp = getNoteType(note.type)


  return <section className="note-preview">
    <h3>Note : {note.type}</h3>
    {/* <DynamicCmp/> */}
  </section>
}



