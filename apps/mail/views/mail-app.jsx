
import { MailList } from '../cmps/mail-list.jsx'
import { mailService } from '../services/mail.service.js'

export class MailApp extends React.Component {
    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails()

    }

    loadEmails = () => {
        mailService.query().then((emails) => this.setState({ emails }))
            
    }

    render() {
        const { emails } = this.state
        return <section className="mail-app">
            <MailList emails={emails} />
        </section>

    }
}
