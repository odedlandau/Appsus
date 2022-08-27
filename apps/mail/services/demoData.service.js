import { utilService } from '../../../services/util.service.js'

export const demoDataService = {
    getMails
}

// const sentEmail = [{
//     id: 'e101',
//     subject: 'Miss you!',
//     body: 'Would love to catch up sometimes',
//     isRead: false,
//     sentAt: 1551133930594,
//     to: 'momo@momo.com'
// }]

const mails = [{
    id: utilService.makeId(),
    subject: 'We’re updating our privacy notice',
    desc: ' - To make sure we’re as transparent and open',
    body: 'To make sure we’re as transparent and open as possible about the use of your data, we’ve made some changes. We want to make it clear to you what info we need, why we need it and what we do with it, so we’ll be updating our privacy notice on August 1st, 2022 to reflect these changes.',
    sentAt: 1551133930594,
    user: {
        email: 'account@asos.com',
        userName: 'ASOS'
    },
    isSent: false,
    isRead: false,
    isStarred: true,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Account confirmation: Your Google Cloud free trial',
    desc: ' - Learn the fundamentals with this tutorial ',
    body: 'Welcome to your Google Cloud free trial. Beginning today, you have $300 USD in credit to spend on Google Cloud. With your free trial, you can:',
    sentAt: 1551133930594,
    user: {
        email: 'CloudPlatform-noreply@google.com',
        userName: 'Google Cloud '
    },
    isSent: false,
    isRead: false,
    isStarred: true,
    isImportant: true
},
{
    id: utilService.makeId(),
    subject: 'Vicky and 13 others made changes in your shared folders',
    desc: ' - Activity in Shared Folders',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'no-reply@dropbox.com',
        userName: 'Dropbox '
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: '🚀 Your GitHub launch code',
    desc: ' - Heres your GitHub launch code',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'noreply@github.com',
        userName: 'GitHub'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: true
},
{
    id: utilService.makeId(),
    subject: 'Updates to our terms of use',
    desc: ' - You’re receiving this email because we are updating the Microsoft ',
    body: 'Hello, You’re receiving this email because we are updating the Microsoft Services Agreement, which applies to one or more Microsoft products or services you use. We’re making these updates to clarify our terms and ensure that they remain transparent for you, as well as to cover new Microsoft products, services and features. The Microsoft Services Agreement is an agreement between you and Microsoft (or one of its affiliates) that governs your use of Microsoft consumer online products and services.',
    sentAt: 1551133930594,
    user: {
        email: 'msa@communication.microsoft.com',
        userName: 'Microsoft'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: true
},
{
    id: utilService.makeId(),
    subject: 'The perfect place to find your new laptop, oded!',
    desc: ' - All the best laptops in one place!',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'ebay@reply1.ebay.com',
        userName: 'eBay'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Recommended for you!',
    desc: ' - Items to pair with your Mens Socks',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'interest5@mail.aliexpress.com',
        userName: 'AliExpress'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Your June Digest',
    desc: ' - The average pro uses 10 software products ',
    body: 'The average pro uses 10 software products; youve only told us about 0 of yours. Complete your profile by adding more products to your stack - you could be eligible for exclusive review incentives. Each month we select a Charity of the Month and offer our support by donating $10 on behalf of each person that leaves a review via our Gives landing page.',
    sentAt: 1551133930594,
    user: {
        email: 'outreach@hello.g2.com',
        userName: 'G2'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Unveiling Animaker 3.0',
    desc: ' - A complete reimagination of Animaker 2.0',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'tona@animaker.es',
        userName: 'Tona from Animaker 2.0'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Gain the skills you need to land a new role',
    desc: ' - Youve taken the first step towards advancing your career',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'support@udacity.com',
        userName: 'Udacity'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'We’re updating our privacy notice',
    desc: ' - To make sure we’re as transparent and open',
    body: 'To make sure we’re as transparent and open as possible about the use of your data, we’ve made some changes. We want to make it clear to you what info we need, why we need it and what we do with it, so we’ll be updating our privacy notice on August 1st, 2022 to reflect these changes.',
    sentAt: 1551133930594,
    user: {
        email: 'account@asos.com',
        userName: 'ASOS'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Account confirmation: Your Google Cloud free trial',
    desc: ' - Learn the fundamentals with this tutorial ',
    body: 'Welcome to your Google Cloud free trial. Beginning today, you have $300 USD in credit to spend on Google Cloud. With your free trial, you can:',
    sentAt: 1551133930594,
    user: {
        email: 'CloudPlatform-noreply@google.com',
        userName: 'Google Cloud '
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Vicky and 13 others made changes in your shared folders',
    desc: ' - Activity in Shared Folders',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'no-reply@dropbox.com',
        userName: 'Dropbox '
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: '🚀 Your GitHub launch code',
    desc: ' - Heres your GitHub launch code',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'noreply@github.com',
        userName: 'GitHub'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Updates to our terms of use',
    desc: ' - You’re receiving this email because we are updating the Microsoft ',
    body: 'Hello, You’re receiving this email because we are updating the Microsoft Services Agreement, which applies to one or more Microsoft products or services you use. We’re making these updates to clarify our terms and ensure that they remain transparent for you, as well as to cover new Microsoft products, services and features. The Microsoft Services Agreement is an agreement between you and Microsoft (or one of its affiliates) that governs your use of Microsoft consumer online products and services.',
    sentAt: 1551133930594,
    user: {
        email: 'msa@communication.microsoft.com',
        userName: 'Microsoft'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'The perfect place to find your new laptop, oded!',
    desc: ' - All the best laptops in one place!',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'ebay@reply1.ebay.com',
        userName: 'eBay'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Recommended for you!',
    desc: ' - Items to pair with your Mens Socks',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'interest5@mail.aliexpress.com',
        userName: 'AliExpress'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Your June Digest',
    desc: ' - The average pro uses 10 software products ',
    body: 'The average pro uses 10 software products; youve only told us about 0 of yours. Complete your profile by adding more products to your stack - you could be eligible for exclusive review incentives. Each month we select a Charity of the Month and offer our support by donating $10 on behalf of each person that leaves a review via our Gives landing page.',
    sentAt: 1551133930594,
    user: {
        email: 'outreach@hello.g2.com',
        userName: 'G2'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Unveiling Animaker 3.0',
    desc: ' - A complete reimagination of Animaker 2.0',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'tona@animaker.es',
        userName: 'Tona from Animaker 2.0'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
},
{
    id: utilService.makeId(),
    subject: 'Gain the skills you need to land a new role',
    desc: ' - Youve taken the first step towards advancing your career',
    body: utilService.makeLorem(),
    sentAt: 1551133930594,
    user: {
        email: 'support@udacity.com',
        userName: 'Udacity'
    },
    isSent: false,
    isRead: false,
    isStarred: false,
    isImportant: false
}

]


const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

function getMails() {
    return mails
}