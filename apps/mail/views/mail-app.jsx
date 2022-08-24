import { EmailList } from '../cmps/mail-list'
import { EmailService } from '../services/mail.service'

export class MailApp extends React.Component {
    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        EmailService.query()
            .then(emails => this.setState({ emails }))
    }

    render() {
        const { emails } = this.state
        return <section className="mail-app">
            <EmailList emails={emails} />
        </section>
    }
}
