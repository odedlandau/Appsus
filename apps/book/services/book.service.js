import { booksData } from './books-data.js'
import { storageService } from '../../../services/storage.service.js'


export const bookService = {
    query,
    getById,
    addReview,
    removeReview,
    addGoogleBook,
    getNextBookId,
    getPrevBookId,
    getPriceCurrency,
}

const KEY = 'booksDB'
const gBooks = booksData.getBooks()

function query(filterBy) {
    let books = _loadFromStorage()
    if (!books) {
        books = gBooks
        _saveToStorage(books)
    }

    if (filterBy) {
        let { title, minPrice, maxPrice } = filterBy
        console.log('filterBy from service', filterBy);
        if (!minPrice) minPrice = 0;
        if (!maxPrice) maxPrice = Infinity
        books = books.filter(book => (
            book.title.toUpperCase().includes(title.toUpperCase()) &&
            book.listPrice.amount >= minPrice &&
            book.listPrice.amount <= maxPrice
        ))
    }

    return Promise.resolve(books)
}

function getById(bookId) {
    if (!bookId) return Promise.resolve(null)
    const books = _loadFromStorage()
    const book = books.find(book => bookId === book.id)
    return Promise.resolve(book)
}

function addReview(bookId, review) {
    const books = _loadFromStorage()
    const book = books.find((book) => book.id === bookId)
    if (book.reviews) book.reviews.unshift(review)
    else book.reviews = [review]
    _saveToStorage(books)
    return Promise.resolve(book)
}

function removeReview(bookId, reviewId) {
    const books = _loadFromStorage()
    const book = books.find((book) => book.id === bookId)
    book.reviews = book.reviews.filter((review) => review.id !== reviewId)
    _saveToStorage(books)
    return Promise.resolve(book)
  }
  
  function addGoogleBook(googleBook) {
    const books = _loadFromStorage()
    if (books.some((book) => book.id === googleBook.id)) return Promise.reject()
  
    books.unshift(googleBook)
    _saveToStorage(books)
    return Promise.resolve()
  }
  
  function getPrevBookId(bookId) {
    let books = _loadFromStorage()
    const bookIdx = books.findIndex((book) => book.id === bookId)
    const prevBookIdx = bookIdx - 1 < 0 ? books.length - 1 : bookIdx - 1
    return books[prevBookIdx].id
  }
  
  function getNextBookId(bookId) {
    let books = _loadFromStorage()
    const bookIdx = books.findIndex((book) => book.id === bookId)
    const nextBookIdx = bookIdx + 1 === books.length ? 0 : bookIdx + 1
    return books[nextBookIdx].id
  }

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function getPriceCurrency(currencyCode) {
    switch (currencyCode) {
        case 'EUR':
            return '€'
        case 'ILS':
            return '₪'
        case 'USD':
            return '$'
    }
}