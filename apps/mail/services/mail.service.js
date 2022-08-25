import { storageService } from '../../../services/storage.service.js'
import { demoDataService } from './demoData.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    query,
    remove,
    add
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

function add({ from, subject, body }) {
    console.log('hello from mail service');
    let mails = _loadFromStorage()
    const mail = _createMail(from, subject, body)
    mails = [mail, ...mails]
    _saveToStorage(mails)
    return Promise.resolve(mail)
}

function _createMail(from, subject, body) {
    return {
        id: utilService.makeId(),
        subject: subject,
        body: body,
        isRead: false,
        sentAt: 1551133930594,
        from: {
            email: from,
            userName: 'Oded Landau'
        }
    }
}

function _saveToStorage(mails) {
    storageService.saveToStorage(KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}