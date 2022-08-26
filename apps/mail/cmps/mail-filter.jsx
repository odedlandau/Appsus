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

            <div className="header-left">
            <img src="http://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
            </div>
            
            <div className="header-middle">
            <span className="material-icons"> search </span>
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
            </form>
            </div>
            
            <div className="header-right">

            </div>
            
        </section>
    }
}