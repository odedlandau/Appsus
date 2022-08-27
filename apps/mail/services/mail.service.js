import { storageService } from '../../../services/storage.service.js'
import { demoDataService } from './demoData.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    query,
    remove,
    add,
    getById,
    toggleStarred,
    toggleImportant
}

const KEY = 'mailsDB'

function query(filterBy) {
    let mails = _loadFromStorage()
    if (!mails) {
        mails = demoDataService.getMails()
        _saveToStorage(mails)
    }

    if (filterBy) {
        let { search } = filterBy
        mails = mails.filter(mail => (
            mail.subject.includes(search) ||
            mail.user.userName.includes(search)
        ))
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
        isRead: false,
        sentAt: 1551133930594,
        user: {
            email: sendTo,
            userName: 'Oded Landau'
        },
        isSent: true
    }
}

function getById(mailId) {
    if (!mailId) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function toggleStarred(mailId){
    
    return getById(mailId).then(mail => {
        mail.isStarred = !mail.isStarred
        updateCurrMail(mail)
        return Promise.resolve(mail)
    })
}

function toggleImportant(mailId){
    return getById(mailId).then(mail => {
        mail.isImportant = !mail.isImportant
        updateCurrMail(mail)
        return Promise.resolve(mail)
    })
}



function updateCurrMail(currMail) {
    let mails = _loadFromStorage()
    mails = mails.map(mail => mail.id === currMail.id ? currMail : mail)
    _saveToStorage(mails)
    return Promise.resolve(currMail)
   
    // query().then(mails => mails.map(mail => {
    //     if (currMail.id === mail.id) return currMail
    //     return mail
    // })).then(mails => {
    //     _saveToStorage(mails)
    // })
}

function _saveToStorage(mails) {
    storageService.saveToStorage(KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}