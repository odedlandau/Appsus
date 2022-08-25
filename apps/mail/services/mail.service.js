import { storageService } from '../../../services/storage.service.js'
import { demoDataService } from './demoData.service.js'

export const mailService = {
    query,
    remove
}

const KEY = 'mailsDB'

function query() {
    let mails = _loadFromStorage()
    if (!mails) {
        mails = demoDataService.getRecievedEmails()
        _saveToStorage(mails)
    }

    return Promise.resolve(mails)
}

function remove(mailId) {
    let mails = _loadFromStorage()
    mails = mails.filter(mail => mail.id !== mailId)
    _saveToStorage(mails)
    return Promise.resolve()
}

function _saveToStorage(mails) {
    storageService.saveToStorage(KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}