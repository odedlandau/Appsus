export class MailFilter extends React.Component {

    state = {
        filterBy: {
            search: ''
        }
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

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { search } = this.state.filterBy
        return <section className="mail-filter">
            <form onSubmit={this.onFilter}>
                <label htmlFor="search-input"></label>
                <input
                    type="text"
                    placeholder="search..."
                    id="search-input"
                    name="search"
                    value={search}
                    onChange={this.handleChange}
                />
                <button>Search</button>
            </form>
        </section>
    }
}