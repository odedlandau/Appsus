import { notesData } from './notes-data.js'
import { storageService } from '../../../services/storage.service.js'
import { utilService } from "../../../services/util.service.js"

export const noteService = {
    query,
    getById,
    removeNote,
    addNote,
    update
}

const KEY = "notesDB"
const gNotes = notesData.getNotes()

function update(editNote) {
    let notes = _loadFromStorage()
    let noteIdx = notes.findIndex(note => editNote.id === note.id)
    notes.splice(noteIdx, 1, editNote)
    _saveToStorage(notes)
    return Promise.resolve(editNote)
}

function query(filterBy) {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = gNotes
        _saveToStorage(notes)
    }
    if (filterBy) {
        let { type } = filterBy
        console.log('filterBy from service', filterBy);
        if (!type) type = 'note-txt';
        notes = notes.filter(note => (
            note.type.includes(type)

        ))
    }
    // if (filterBy.type) {
    //     notes = notes.filter(note => note.type === filterBy.type)
    // }

    return Promise.resolve(notes)
}

// function query() {
//     let notes = storageService.loadFromStorage(KEY)
//     if (!notes) {
//         notes = gNotes
//         storageService.saveToStorage(KEY, notes)
//     }
//     return Promise.resolve(notes)
// }

function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

// function addNote(note) {
//     note.id = utilService.makeId()
//     const notes = _loadFromStorage()
//     if (note.type === 'note-todos') {
//         let todos = note.info.todos.split(',')
//         todos = todos.map(todo => ({ txt: todo.trim(), doneAt: null }))
//         note.info.todos = todos
//     }
//     notes.unshift(note)
//     _saveToStorage(notes)
//     return Promise.resolve()
// }

function addNote(newNote, noteType) {
    if (!newNote) return
    let note = {}
    note.id = utilService.makeId()
    note.type = noteType
    note.info = {}
    note.info.title = newNote.title
    console.log('note.info from keepService:', note.info)
    const { content } = newNote
    switch (noteType) {
        case 'note-txt':
            note.info.txt = content
            break
        case 'note-img':
            note.info.url = content
            break
        case 'note-video':
            note.info.url = content
            break
        case 'note-todos':
            note.info.todos = content.split(',').map(todo => ({ txt: todo, doneAt: null }))
            break
        default:
            console.warn('Unknown note type:', noteType)
            break
    }
    let notes = _loadFromStorage()
    notes = [note, ...notes]
    _saveToStorage(notes)
    return Promise.resolve()
}

function removeNote(noteId) {
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