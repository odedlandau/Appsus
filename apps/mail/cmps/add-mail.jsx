
import { mailService } from '../services/mail.service'

export class AddMail extends React.Component {

    state = {
        mail: {
            from: '',
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
        mailService.add(this.state.mail)
            .then(() => {
                this.props.history.push('/mail')
            })
    }


    render() {
        const { from, subject, body } = this.state.mail
        const { onAddMail, handleChange } = this
        return <section className="car-add">
            <form className="flex column align-center" onSubmit={onAddMail}>

                <label htmlFor="from">To</label>
                <input type="text" name="from"
                    value={from} id="from"
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

