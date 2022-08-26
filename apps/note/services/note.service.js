import { notesData } from './notes-data.js'
import { storageService } from '../../../services/storage.service.js'
import { utilService } from "../../../services/util.service.js"

export const noteService = {
    query,
    getById,
    remove,
    addNote,
}

const KEY = "notesDB"
const gNotes = notesData.getNotes()


// function query(filterBy) {
//     let notes = _loadFromStorage()
//     if (!notes) {
//         notes = gNotes
//         _saveToStorage(notes)
//     }
//     if (filterBy) {
//         let { type } = filterBy
//         console.log('filterBy from service', filterBy);
//         if (!type) type = 'note-txt';
//         notes = notes.filter(note => (
//             note.type.includes(type)

//         ))
//     }

//     return Promise.resolve(notes)
// }

function query() {
    let notes = storageService.loadFromStorage(KEY)
    if (!notes) {
        notes = gNotes
        storageService.saveToStorage(KEY, notes)
    }
    return Promise.resolve(notes)
}

function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function addNote(note) {
    note.id = utilService.makeId()
    const notes = _loadFromStorage()
    if (note.type === 'note-todos') {
        let todos = note.info.todos.split(',')
        todos = todos.map(todo => ({ txt: todo.trim(), doneAt: null }))
        note.info.todos = todos
    }
    notes.unshift(note)
    _saveToStorage(notes)
    return Promise.resolve()
}

function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function save(note) {
    if (note.id) return _update(note)
    else return _add(note)
}

function _add({ type }) {
    let notes = _loadFromStorage()
    const note = _createNote(type)
    notes = [note, ...notes]
    _saveToStorage(notes)
    return Promise.resolve(note)
}

function _update(noteToUpdate) {
    let notes = _loadFromStorage()
    notes = notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note)
    _saveToStorage(notes)
    return Promise.resolve(noteToUpdate)
}

function _createNote(type) {
    return {
        id: utilService.makeId(),
        type,
        details: {
            txt,
            color: 'white'
        },
        isNotePinned: false
    }
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}