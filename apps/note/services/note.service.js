import { notesData } from './notes-data.js'
import { storageService } from '../../../services/storage.service.js'

export const noteService = {
    query,
    getById,
    remove,
}

const KEY = "notesDB"
const gNotes = notesData.getNotes()


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

    return Promise.resolve(notes)
}

function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}