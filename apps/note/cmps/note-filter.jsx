export class BookFilter extends React.Component {
    state = {
        filterBy: {
            type: '',
        },
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(
            (prevState) => ({
                filterBy: { ...prevState.filterBy, [field]: value },
            }),
            () => {
                this.props.onSetFilter(this.state.filterBy)
            }
        )
    }

    render() {
        const { type } = this.state.filterBy
        return (
            <section className="note-filter">
                <form>
                    <label htmlFor="by-type">Type</label>
                    <input
                        id="by-type"
                        type="text"
                        placeholder="By Type.."
                        name="type"
                        value={type}
                        onChange={this.handleChange}
                    />

                </form>
            </section>
        )
    }
}