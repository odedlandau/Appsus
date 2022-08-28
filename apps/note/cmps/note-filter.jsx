
export class NoteFilter extends React.Component {

    state = {
        filterBy: {
            type: null,
        },
    }

    inputRef = React.createRef()

    componentDidMount() {
        // console.log('inputRef', this.inputRef);
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    goSearch = () => {
        this.inputRef.current.focus()
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { type } = this.state.filterBy
        return <section className="note-filter">
            <form onSubmit={this.onFilter}>
                <label htmlFor="by-type">Type :</label>
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="by type.."
                    id="by-type"
                    name="type"
                    value={type}
                    onChange={this.handleChange}
                />
                <button>Filter</button>
            </form>
            <button className="search-btn" onClick={this.goSearch}>Search</button>
        </section>
    }
}

