// import { notesData } from './notes-data.js'
import { storageService } from '../../../services/storage.service.js'

export const noteService = {
    query,
    getById,
}

const KEY = "notesDB"
// const gNotes = notesData.getNotes

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n102",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
]

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
            note.info.txt.toUpperCase().includes(search.toUpperCase()) &&
            note.type === type
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

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}