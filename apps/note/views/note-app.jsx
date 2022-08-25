import { NoteList } from '../cmps/note-list.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { noteService } from '../services/note.service.js'

export class NoteApp extends React.Component {

    state = {
        notes: [],
        // filterBy: {
        //     type: '',
        // },
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then((notes) => this.setState({ notes }))
    }

    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, () => {
    //         this.loadNotes()
    //     })
    // }

    render() {
        const { notes, filterBy } = this.state
        return (
            <section className="note-app">
                {/* <NoteFilter onSetFilter={this.onSetFilter} /> */}
                <NoteList notes={notes}  />
            </section>
        )
    }
}



