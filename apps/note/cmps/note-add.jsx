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

// export class NoteAdd extends React.Component {
//     state = {
//         newNote: {
//             title: '',
//             content: '',
//         },
//         noteType: 'note-txt',
//         isFocus: false,
//     }

//     handleChange = ({ target }) => {
//         const field = target.name
//         const value = target.type === 'number' ? +target.value : target.value
//         this.setState((prevState) => ({
//             newNote: {
//                 ...prevState.newNote,
//                 [field]: value
//             }
//         }))
//     }

//     onAddNote = (ev) => {
//         ev.preventDefault()
//         const { newNote, noteType } = this.state
//         this.props.onAddNote(newNote, noteType)
//     }

//     onChangeNoteType = (type) => {
//         this.setState({ noteType: type })
//     }

//     handleInputFocus = () => {
//         this.setState({ isFocus: true });
//     }

//     handleInputBlur = () => {
//         this.setState({ isFocus: false });
//     }

//     getPlaceHolder = () => {
//         const { noteType } = this.state
//         switch (noteType) {
//             case 'note-txt':
//                 return 'Write something...'
//             case 'note-img':
//                 return 'Enter image URL'
//             case 'note-video':
//                 return 'Enter video URL'
//             case 'note-todos':
//                 return 'Write todos separated by comma'
//             default:
//                 break;
//         }
//     }

//     render() {
//         const { noteType, isFocus } = this.state
//         const { handleChange, getPlaceHolder, onChangeNoteType, handleInputFocus, handleInputBlur } = this
//         return (
//             <section className="note-add"
//                 onFocus={handleInputFocus}
//                 onBlur={handleInputBlur}>
//                 <form className="form form-note-add"
//                     onSubmit={(ev) => this.onKeepAdd(ev)}>
//                     {isFocus &&
//                         <input className="input input-txt"
//                             name="title"
//                             type="text"
//                             onChange={handleChange}
//                             placeholder="Title" />}
//                     <input className="input input-txt"
//                         name="content"
//                         type="text"
//                         onChange={handleChange}
//                         placeholder={getPlaceHolder()} />
//                     <input type="submit" hidden />
//                 </form>
//                 {isFocus &&
//                     <div className="btns btns-note-add">
//                         <button
//                             className={`btn btn-txt ${noteType === 'note-txt' ? 'active' : ''}`}
//                             title="Note"
//                             onClick={() => onChangeNoteType('note-txt')}>
//                             <i class="fa-solid fa-note-sticky"></i>
//                         </button>
//                         <button
//                             className={`btn btn-img ${noteType === 'note-img' ? 'active' : ''}`}
//                             title="Image"
//                             onClick={() => onChangeNoteType('note-img')}>
//                             <i class="fa-solid fa-image"></i>
//                         </button>
//                         <button
//                             className={`btn btn-video ${noteType === 'note-video' ? 'active' : ''}`}
//                             title="Video"
//                             onClick={() => onChangeNoteType('note-video')}>
//                             <i class="fa-solid fa-file-video"></i>
//                         </button>
//                         <button
//                             className={`btn btn-todo ${noteType === 'note-todos' ? 'active' : ''}`}
//                             title="Todos"
//                             onClick={() => onChangeNoteType('note-todos')}>
//                             <i class="fa-solid fa-clipboard-check"></i>
//                         </button>
//                     </div>}
//             </section>
//         )
//     }
// }

