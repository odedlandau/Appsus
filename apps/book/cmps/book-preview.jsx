const { Link } = ReactRouterDOM
import { bookService } from '../services/book.service.js'

export function BookPreview({ book }) {
  const priceSymbol = bookService.getPriceCurrency(book.listPrice.currencyCode)
  
  return (
    <Link to={`/book/${book.id}`}>
      <div className="book-preview">
        <h3>{book.title}</h3>
        <h4>
          {book.listPrice.amount} {priceSymbol}
        </h4>
        <div className="img-container">
          <img src={book.thumbnail} alt="" />
        </div>
      </div>
    </Link>
  )
}