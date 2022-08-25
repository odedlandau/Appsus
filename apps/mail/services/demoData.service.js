export const demoDataService = {
    getRecievedEmails
}

const sentEmail = [{
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}]

const recievedEmails = [
    {
        id: 'e101',
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
        id: 'e102',
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
        id: 'e103',
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
        id: 'e104',
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
        id: 'e105',
        subject: 'Reset password',
        body: 'Enter the link below to reset your password',
        isRead: false,
        sentAt: 1551133930594,
        from: {
            email: 'support@gmail.com',
            userName: 'Gmail Support'
        }
    }

]


const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

function getRecievedEmails() {
    return recievedEmails
}