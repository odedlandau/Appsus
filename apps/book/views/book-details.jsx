import { LongTxt } from '../cmps/long-txt.jsx'
import { ReviewAdd } from '../cmps/review-add.jsx'
import { bookService } from '../services/book.service.js'

export class BookDetails extends React.Component {
  state = {
    book: null,
  }

  componentDidMount() {
    this.loadBook()
  }

  loadBook = () => {
    const { bookId } = this.props.match.params
    bookService.getById(bookId).then((book) => {
      if (!book) return this.onGoBack()
      this.setState({ book })
    })
  }

  getPageCountDesc = () => {
    const { book } = this.state
    if (book.pageCount >= 500) return '- Long reading'
    else if (book.pageCount >= 200) return '- Decent reading'
    else if (book.pageCount <= 100) return '- Light Reading'
    else if (book.pageCount <= 200) return ''
  }

  getPublishedDateDesc = () => {
    const { book } = this.state
    const year = new Date().getFullYear()
    if (year - book.publishedDate >= 10) return '- Veteran book'
    else if (year - book.publishedDate <= 1) return '- New!'
    else return ''
  }

  getPriceClass = () => {
    const { book } = this.state
    if (book.listPrice.amount >= 150) return 'red'
    else if (book.listPrice.amount <= 60) return 'green'
    else return ''
  }

  onGoBack = () => {
    this.props.history.push('/book')
  }

  render() {
    const { book } = this.state
    if (!book) return <div>Loading...</div>
    const priceSymbol = bookService
    .getPriceCurrency(book.listPrice.currencyCode)
    return (
      <section className="book-details">
        <button onClick={this.onGoBack} className="go-back-btn">
          Go Back
        </button>
        <ReviewAdd bookId={book.id} />
        <h1>{book.title}</h1>
        <h3>{book.subtitle}</h3>
        <div>
          <img src={book.thumbnail} alt="" />
        </div>
        <h3>Authors: {book.authors}</h3>
        <h3>
          {book.publishedDate} {this.getPublishedDateDesc()}
        </h3>
        <LongTxt text={book.description} />
        <h5>Pages: {book.pageCount} {this.getPageCountDesc()}</h5>
        <h5>Categories: {book.categories.join(', ')}</h5>
        <h5 className={this.getPriceClass()}>
          Price: {book.listPrice.amount} {priceSymbol}
          {book.listPrice.isOnSale && <span> On Sale!</span>}
        </h5>
      </section>
    )
  }
}