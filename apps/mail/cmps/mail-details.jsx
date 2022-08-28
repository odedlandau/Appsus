import { mailService } from "../services/mail.service.js"


export class MailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {

        this.loadMail()

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) {
            this.loadMail()
        }
    }

    loadMail = () => {
        const { mailId } = this.props.match.params

        console.log(mailId);
        mailService.getById(mailId)
            .then((mail) => {
                if (!mail) return this.onGoBack()
                this.setState({ mail })
            })
    }



    onGoBack = () => {
        this.props.history.push('/mail')
    }




    render() {
        const { user, subject, body } = this.state

        return <section className="mail-details">
            {/* <h2>{user.userName}</h2> */}
            <h1>{subject}</h1>
            <p>{body}</p>
        </section>
    }
}