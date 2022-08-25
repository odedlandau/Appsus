
import { NoteList } from '../cmps/note-list.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { noteService } from '../services/note.service.js'

const { Link } = ReactRouterDOM
export class NoteApp extends React.Component {

    state = {
        notes: [],
        filterBy: null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes)
    }

    onRemoveNote = (noteId) => {
        noteService.remove(noteId)
            .then(() => {
                console.log('Removed!')
                const notes = this.state.notes.filter(note => note.id !== noteId)
                this.setState({ notes })
            })
            .catch(err => {
                console.log('Problem!!', err)
            })
    }

    render() {
        const { notes } = this.state
        const { onSetFilter, onRemoveNote } = this
        return <section className="note-app">
            My-Notes
            <Link to="/note/edit"><button>Add note</button></Link>
            <NoteFilter onSetFilter={this.onSetFilter} />
            <NoteList notes={notes} onRemoveNote={onRemoveNote} />
        </section>
    }
}



