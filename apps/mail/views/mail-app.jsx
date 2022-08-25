
import { MailList } from '../cmps/mail-list.jsx'
import { mailService } from '../services/mail.service.js'

export class MailApp extends React.Component {
    state = {
        mails: []
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
                // showSuccessMsg('Car removed')
                
            })
           
    }

    render() {
        const { mails } = this.state
        const { onRemoveMail } = this
        return <section className="mail-app">
            <MailList mails={mails} onRemoveMail={onRemoveMail} />
        </section>

    }
}
