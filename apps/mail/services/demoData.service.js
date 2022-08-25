import { utilService } from '../../../services/util.service.js'

export const demoDataService = {
    getRecievedEmails
}

// const sentEmail = [{
//     id: 'e101',
//     subject: 'Miss you!',
//     body: 'Would love to catch up sometimes',
//     isRead: false,
//     sentAt: 1551133930594,
//     to: 'momo@momo.com'
// }]

const recievedEmails = [{
    id: utilService.makeId(),
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from: {
        email: 'momo@momo.com',
        userName: 'bobo'
    }
},
{
    id: utilService.makeId(),
    subject: 'New SALE',
    body: 'Check out our products',
    isRead: false,
    sentAt: 1551133930594,
    from: {
        email: 'fox@fox.com',
        userName: 'FOX'
    }
},
{
    id: utilService.makeId(),
    subject: 'Subscribe to newsletter',
    body: 'come and read our new magazine',
    isRead: false,
    sentAt: 1551133930594,
    from: {
        email: 'news@news.com',
        userName: 'Bobo Magazine'
    }
},
{
    id: utilService.makeId(),
    subject: 'Your storage is running out',
    body: 'please renew your subscription',
    isRead: false,
    sentAt: 1551133930594,
    from: {
        email: 'momo@momo.com',
        userName: 'Dropbox'
    }
},
{
    id: utilService.makeId(),
    subject: 'Reset password',
    body: 'Enter the link below to reset your password',
    isRead: false,
    sentAt : 1551133930594,
    from: {email: 'support@gmail.com',
            userName: 'Gmail Support' }
    }

]


const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

function getRecievedEmails() {
    return recievedEmails
}