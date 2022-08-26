
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { mailService } from '../services/mail.service.js'

const { Link } = ReactRouterDOM

export class MailApp extends React.Component {
    state = {
        mails: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadMails()

    }

    loadMails = () => {
        mailService.query()
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
        this.setState({ filterBy }, this.loadCars)
    }

    render() {
        const { mails } = this.state
        const { onRemoveMail } = this
        return <section className="mail-app">
            <Link to="/mail/add"><button>Compose +</button></Link>
            <MailFilter onSetFilter={this.onSetFilter} />
            <MailList mails={mails} onRemoveMail={onRemoveMail} />
        </section>

    }
}
