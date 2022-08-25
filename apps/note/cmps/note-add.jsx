export class NoteAdd extends React.Component {

    state = {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },

    }

    handleChange = ({ target }) => {
        const field = target.name
        console.log(field);
        const value = target.value

        this.setState((prevState) => ({
            info: {
                ...prevState.info,
                [field]: value
            }
        }))
    }

    onAddNote = (ev) => {
        ev.preventDefault()
        this.props.onAddNote(this.state)
    }

    render() {
        const { title } = this.state.info
      
        return <section className="note-add">
            <section className="input-container">
                <form onSubmit={this.onAddNote} className="inputs">
                    <input type="text" placeholder="Title" name="title" value={title} onChange={this.handleChange} />
                    <input type="text" placeholder="Title" name="title" value={title} onChange={this.handleChange} />
                    <button>Create</button>
                </form>
            </section>
        </section>
    }
}

