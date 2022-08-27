import { mailService } from "../services/mail.service.js"

const { Link, NavLink, withRouter } = ReactRouterDOM
export function SideBar({ onSetFolder }) {
    const unReadMails = mailService.getUnreadMails()


    return <section className="side-bar">
        <Link to="/mail/add">
            <button className="side-bar-compose" >
                <span className="material-icons"> add </span>
                Compose
            </button>
        </Link>

        {/* <button>Compose +</button></Link> */}

        <div className="side-bar-option" onClick={() => onSetFolder('inbox')}>
            <span className="material-icons"> inbox </span>
            <h3>Inbox</h3>
            <p className="unread-mails">{unReadMails}</p>
        </div>

        <div className="side-bar-option" onClick={() => onSetFolder('starred')}>
            <span className="material-icons"> star </span>
            <h3>Starred</h3>
        </div>

        <div className="side-bar-option" onClick={() => onSetFolder('important')}>
            <span className="material-icons"> label_important </span>
            <h3>Important</h3>
        </div>

        <div className="side-bar-option" onClick={() => onSetFolder('sent')}>
            <span className="material-icons"> near_me </span>
            <h3>Sent</h3>
        </div>

    </section >

}