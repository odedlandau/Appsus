import { bookService } from '../services/book.service.js'

export class ReviewAdd extends React.Component {
  state = {
    review: {
      fullName: 'Books Reader',
      rate: 1,
      readAt: new Date().toISOString().slice(0, 10),
      freeTxt: '',
    },
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.name === 'rate' ? +target.value : target.value
    this.setState((prevState) => ({
      review: { ...prevState.review, [field]: value },
    }))
  }

  onAddReview = (ev) => {
    ev.preventDefault()
    bookService.addReview(this.props.bookId, this.state.review).then(() => {})
  }

  render() {
    const { fullName, rate, readAt, freeTxt } = this.state.review
    return (
      <section className="review-add">
        <form onSubmit={this.onAddReview} className="flex column align-center">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            id="full-name"
            onChange={this.handleChange}
          />

          <label htmlFor="rate">Rating</label>
          <select
            name="rate"
            value={rate}
            id="rate"
            onChange={this.handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label htmlFor="read-at">Read At</label>
          <input
            type="date"
            name="readAt"
            value={readAt}
            id="read-at"
            onChange={this.handleChange}
          />

          <label htmlFor="free-txt">Free Text</label>
          <textarea
            type="textarea"
            name="freeTxt"
            value={freeTxt}
            id="free-txt"
            onChange={this.handleChange}
          />

          <button>Add Review!</button>
        </form>
      </section>
    )
  }
}