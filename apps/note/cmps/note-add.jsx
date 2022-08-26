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
        this.resetNote()
    }

    resetNote = (type = 'note-txt') => {
        this.setState({
            type,
            info: {
                title: '',
                subject: '',
                url: '',
                todos: ''
            },
        }
        )
    }

    getInputNameAndVal = () => {
        const { type } = this.state
        switch (type) {
            case ('note-txt'):
                return 'subject'
            case ('note-img'):
            case ('note-video'):
                return 'url'
            case ('note-todos'):
                return 'todos'
        }
    }

    getInputPlaceHolder = () => {
        const { type } = this.state
        switch (type) {
            case ('note-txt'):
                return 'Take a note...'
            case ('note-img'):
                return 'Enter an image link'
            case ('note-video'):
                return 'Enter a video link'
            case ('note-todos'):
                return 'Enter a list separated by comas'
        }
    }

    render() {
        const { title } = this.state.info
        const placeholder = this.getInputPlaceHolder()
        const name = this.getInputNameAndVal()

        return <section className="note-add">
            <section className="input-container">
                <form onSubmit={this.onAddNote} className="inputs">
                    <input type="text" placeholder="Title" name="title" value={title} onChange={this.handleChange} />
                    <input type="text" placeholder={placeholder} name={name} value={this.state.info[name]} onChange={this.handleChange} />
                    <button>Create</button>
                </form>
            </section>
        </section>
    }
}

