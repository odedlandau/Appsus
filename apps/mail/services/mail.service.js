import { storageService } from '../../../services/storage.service.js'
import { demoDataService } from './demoData.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    query,
    remove,
    add,
    getById,
    toggleStarred,
    toggleImportant,
    changeToRead,
    getUnreadMails

}

const KEY = 'mailsDB'

function query(filterBy, folder) {
    let mails = _loadFromStorage()
    if (!mails) {
        mails = demoDataService.getMails()
        _saveToStorage(mails)
    }

    if (filterBy) {
        let { search } = filterBy
        mails = mails.filter(mail => (
            mail.subject.toLowerCase().includes(search.toLowerCase()) ||
            mail.user.userName.toLowerCase().includes(search.toLowerCase())
        ))
    }

    switch (folder) {
        case 'inbox':
            mails = mails.filter(mail => (!mail.isSent))
            break
        case 'starred':
            mails = mails.filter(mail => (mail.isStarred))
            break
        case 'important':
            mails = mails.filter(mail => (mail.isImportant))
            break
        case 'sent':
            mails = mails.filter(mail => (mail.isSent))
            break
    }

    return Promise.resolve(mails)
}

function remove(mailId) {
    let mails = _loadFromStorage()
    mails = mails.filter(mail => mail.id !== mailId)
    _saveToStorage(mails)
    return Promise.resolve()
}

function add({ sendTo, subject, body }) {
    let mails = _loadFromStorage()
    const mail = _createMail(sendTo, subject, body)
    mails = [mail, ...mails]
    _saveToStorage(mails)
    return Promise.resolve(mail)
}

function _createMail(sendTo, subject, body) {
    return {
        id: utilService.makeId(),
        subject: subject,
        desc: '',
        body: body,
        sentAt: 1551133930594,
        user: {
            email: '',
            userName: sendTo
        },
        isRead: true,
        isSent: true,
        isStarred: false,
        isImportant: false
    }
}

function getById(mailId) {
    if (!mailId) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function toggleStarred(mailId) {

    return getById(mailId).then(mail => {
        mail.isStarred = !mail.isStarred
        updateCurrMail(mail)
        return Promise.resolve(mail)
    })
}

function toggleImportant(mailId) {
    return getById(mailId).then(mail => {
        mail.isImportant = !mail.isImportant
        updateCurrMail(mail)
        return Promise.resolve(mail)
    })
}

function changeToRead(mailId) {
    return getById(mailId).then(mail => {
        mail.isRead = true
        updateCurrMail(mail)
        return Promise.resolve(mail)
    })
}

function updateCurrMail(currMail) {
    let mails = _loadFromStorage()
    mails = mails.map(mail => mail.id === currMail.id ? currMail : mail)
    _saveToStorage(mails)
    return Promise.resolve(currMail)
}

function getUnreadMails() {
    const mails = _loadFromStorage() || demoDataService.getMails()
    let count = 0
    mails.forEach(mail => { if (!mail.isRead) count++ })
    return count
}

function _saveToStorage(mails) {
    storageService.saveToStorage(KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}