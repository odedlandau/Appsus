
import { mailService } from '../services/mail.service.js'

export class AddMail extends React.Component {

    state = {
        mail: {
            sendTo: '',
            subject: '',
            body: ''
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(({ mail }) => ({
            mail: { ...mail, [field]: value }
        }))
    }

    onAddMail = (ev) => {
        ev.preventDefault()
        // this.props.history.push('/mail')
        mailService.add(this.state.mail)
            .then(() => {
                this.props.history.push('/mail')
            })
    }


    render() {
        const { sendTo, subject, body } = this.state.mail
        const { onAddMail, handleChange } = this
        return <section className="car-add">
            <form className="flex column align-center" onSubmit={onAddMail}>

                <label htmlFor="send-to">To</label>
                <input type="text" name="sendTo"
                    value={sendTo} id="send-to"
                    onChange={handleChange}
                />

                <label htmlFor="subject">subject:</label>
                <input type="text" name="subject"
                    value={subject} id="subject"
                    onChange={handleChange}
                />

                <label htmlFor="body">body:</label>
                <textarea id="body" name="body" value={body} rows="6" cols="50" onChange={handleChange}>

                </textarea>
                <button>Send</button>
            </form>
        </section>

    }


}

