export class NoteNav extends React.Component {
    state = {
        type: null,
    }

    componentDidMount() {
        this.setState({ filterBy: this.props.filterBy.type })
    }

    onSetFilter = (type) => {
        this.setState({ type })
        this.props.onSetFilter(type)
    }

    render() {
        const { onSetFilter } = this
        const { type } = this.state
        return (
            <nav className="btns side-nav-btns note-nav">
                <button className={`btn ${type === null ? 'active' : ''}`}
                    onClick={() => onSetFilter(null)}
                    title="Note">

                    <span>All</span>
                </button>
                <button className={`btn ${type === 'note-txt' ? 'active' : ''}`}
                    onClick={() => onSetFilter('note-txt')}
                    title="Note">
                    <i class="fa-solid fa-note-sticky"></i>
                    <span>Notes</span>
                </button>
                <button className={`btn ${type === 'note-img' ? 'active' : ''}`}
                    onClick={() => onSetFilter('note-img')}
                    title="Image">
                    <i class="fa-solid fa-image"></i>
                    <span>Images</span>
                </button>
                <button className={`btn ${type === 'note-video' ? 'active' : ''}`}
                    onClick={() => onSetFilter('note-video')}
                    title="Video">
                    <i class="fa-solid fa-file-video"></i>
                    <span>Videos</span>
                </button>
                <button className={`btn ${type === 'note-todos' ? 'active' : ''}`}
                    onClick={() => onSetFilter('note-todos')}
                    title="Todo">
                    <i class="fa-solid fa-clipboard-check"></i>
                    <span>Todos</span>
                </button>
            </nav>
        )
    }
}