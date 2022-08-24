import { storageService } from '../../../services/storage.service.js'
import { demoDataService } from './demoData.service.js'

export const mailService = {
    query
}

const KEY = 'emailsDB'

function query() {
    let emails = _loadFromStorage()
    if (!emails) {
        emails = demoDataService.getRecievedEmails()
        _saveToStorage(emails)
    }

    return Promise.resolve(emails)
}

function _saveToStorage(emails) {
    storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}