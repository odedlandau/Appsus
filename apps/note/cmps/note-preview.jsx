// import { NoteImg } from "./note-img.jsx"
// import { NoteTodos } from "./note-todos.jsx"
// import { NoteTxt } from "./note-txt.jsx"
// import { NoteVideo } from "./note-video.jsx"

// export function NotePreview({ note }) {

//     function getNoteType(type) {
//         switch (type) {
//             case 'note-txt':
//                 return NoteTxt
//             case 'note-img':
//                 return NoteImg
//             case 'note-todos':
//                 return NoteTodos
//             case 'note-video':
//                 return NoteVideo
//         }
//     }

//     const DynamicCmp = getNoteType(note.type)

//     return <section className="note-preview-full">
//         <DynamicCmp info={note.info} id={note.id} />
//     </section>
// }

import { noteService } from "../services/note.service.js"

export class NotePreview extends React.Component {

    state = {
        note: null,
        noteInEdit: null,
        noteInFocus: false,
        filterBy: this.props.filterBy,
    }
    componentDidMount() {
        const { filterBy, note } = this.props
        this.setState({ filterBy, note })
    }

    getNoteContent = () => {
        const { note } = this.props
        switch (note.type) {
            case 'note-txt':
                return <NoteTxt note={note} />
            case 'note-img':
                return <NoteImg note={note} />
            case 'note-videos':
                return <NoteVideo note={note} />
            case 'note-todos':
                return <NoteTodo note={note} />
            default:
                return console.warn('Unknown note type')
        }
    }

    onNoteEdit = (noteId) => {
        this.setState({ noteInEdit: noteId })
    }

    onColorChange = (color) => {
        const style = { backgroundColor: color }
        const note = { ...this.state.note, style }
        this.setState({ note, noteInEdit: null })

        noteService.update(note)
    }

    render() {
        const { note } = this.state
        if (!note) return
        const { noteInEdit } = this.state
        const { getNoteContent, onNoteEdit, onColorChange } = this
        return (
            <div className={`note-preview ${note.type}`}
                style={{ backgroundColor: `${note.style ? note.style.backgroundColor : "white"}` }}>
                {getNoteContent()}
                <div className="btns btns-note-preview">
                    
                    <button className="btn btn-color" title="Change Color"
                        onClick={() => onNoteEdit(keep.id)}>
                       <i class="fa-solid fa-palette"></i>
                    </button>
            </div>
            {noteInEdit &&
                    <div className="color-plt">
                        <button onClick={() => onColorChange('#e0e0e0')} style={{ backgroundColor: "#e0e0e0" }}></button>
                        <button onClick={() => onColorChange('#d4d7a1')} style={{ backgroundColor: "#d4d7a1" }}></button>
                        <button onClick={() => onColorChange('#a1d7a6')} style={{ backgroundColor: "#a1d7a6" }}></button>
                        <button onClick={() => onColorChange('#a1d7d3')} style={{ backgroundColor: "#a1d7d3" }}></button>
                        <button onClick={() => onColorChange('#a1b4d7')} style={{ backgroundColor: "#a1b4d7" }}></button>
                        <button onClick={() => onColorChange('#bda1d7')} style={{ backgroundColor: "#bda1d7" }}></button>
                    </div>}
            </div>
        )
    }
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

function NoteImg({ note }) {
    return (
        <React.Fragment>
            <h2>NoteImg</h2>
            {note.info.title &&
                <h2 className="note-title">{note.info.title}</h2>}
            <img src={note.info.url} alt="Image" />
        </React.Fragment>
    )
}

function NoteVideo({ note }) {
    return (
        <React.Fragment>
            <h2>NoteVideo</h2>
            {note.info.title &&
                <h2 className="note-title">{note.info.title}</h2>}
        </React.Fragment>
    )
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



