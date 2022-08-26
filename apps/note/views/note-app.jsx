
import { NoteAdd } from '../cmps/note-add.jsx'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { noteService } from '../services/note.service.js'

export class NoteApp extends React.Component {

    state = {
        notes: [],
        filterBy: null,
        selectedNote: null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query()
            .then(notes => this.setState({ notes }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadNotes()
        })
    }

    onRemoveNote = (noteId) => {
        noteService.removeNote(noteId)
            .then(() => {
                let { notes } = this.state
                notes = notes.filter(note => note.id !== noteId)
                this.setState({ notes })
            })
    }

    onAddNote = (note) => {
        noteService.addNote(note)
            .then(this.loadNotes())
    }

    onToggleTodo = (noteId, todoIdx) => {
        noteService.toggleTodo(noteId, todoIdx)
            .then(this.loadNotes)
    }

    render() {
        const { notes } = this.state
        return <section className="note-app">
            <NoteFilter onSetFilter={this.onSetFilter} />
            <NoteAdd onAddNote={this.onAddNote} />
            <NoteList notes={notes} onRemoveNote={this.onRemoveNote} onToggleTodo={this.onToggleTodo} />
        </section>
    }
}





