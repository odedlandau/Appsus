
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { SideBar } from '../cmps/side-bar.jsx'
import { mailService } from '../services/mail.service.js'

const { Link } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class MailApp extends React.Component {
    state = {
        mails: [],
        filterBy: null,
        folder:'inbox'
    }

    componentDidMount() {
        this.loadMails()

    }

    loadMails = () => {
        mailService.query(this.state.filterBy, this.state.folder)
            .then((mails) => this.setState({ mails }))
    }

    onRemoveMail = (mailId) => {
        mailService.remove(mailId)
            .then(() => {
                console.log('Removed!')
                const mails = this.state.mails.filter(mail => mail.id !== mailId)
                this.setState({ mails })
                // showSuccessMsg('Mail removed')

            })

    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadMails)
    }

    onIsStarred = (mailId) => {
        mailService.toggleStarred(mailId).then(this.loadMails)
    }

    onIsImportant = (mailId) => {
        mailService.toggleImportant(mailId).then(this.loadMails)
    }
    
    onIsRead = (mailId) => {
        mailService.changeToRead(mailId).then(this.loadMails)
    }

    onSetFolder = (folder) => {
        this.setState({ folder }, this.loadMails)

    }

    

    render() {
        const { mails } = this.state
        const { onRemoveMail, onIsStarred, onIsImportant, onIsRead, onSetFolder } = this
        return <section className="mail-app">
            <MailFilter onSetFilter={this.onSetFilter} />
            <section className="main-body">
                <SideBar onSetFolder={onSetFolder}/>
                <MailList mails={mails} onRemoveMail={onRemoveMail} onIsStarred={onIsStarred}
                 onIsImportant={onIsImportant} onIsRead={onIsRead}/>
            </section>
        </section>



    }
}