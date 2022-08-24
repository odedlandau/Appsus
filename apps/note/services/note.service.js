import { storageService } from '../../../services/storage.service.js'

export const noteService = {
    query,

}

const KEY = "notesDB"
const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    },
    {
        id: "n211",
        type: "note-txt",
        isPinned: true,
        info: { txt: "Puki!" }
    },
    // {
    //     id: "n102",
    //     type: "note-img",
    //     info: {
    //         url: "http://some-img/me",
    //         title: "Bobi and Me"
    //     },
    //     style: { backgroundColor: "#00d" }
    // },
    // {
    //     id: "n103",
    //     type: "note-todos",
    //     info: {
    //         label: "Get my stuff together",
    //         todos: [{ txt: "Driving liscence", doneAt: null }, {
    //             txt: "Coding power",
    //             doneAt: 187111111
    //         }]
    //     }
    // }
];

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = gNotes
        _saveToStorage(notes)
    }

    return Promise.resolve(notes)
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}