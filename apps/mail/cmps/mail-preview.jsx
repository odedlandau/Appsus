import { utilService } from "../../../services/util.service.js";

const {Link} = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail, onIsStarred, onIsImportant, onIsRead}) {
    const mailPreviewClass = !mail.isRead ? 'unread' : ''
    const date = utilService.formatTime(mail.sentAt)
    return <section className={`mail-preview ${mailPreviewClass}`}>

        <div className="mail-preview-option">
            <span className="material-icons btn-remove" onClick={() => onRemoveMail(mail.id)}> delete </span>

            {(mail.isStarred) ?
                <span className="material-icons starred" onClick={() => onIsStarred(mail.id)}> star </span> :
                <span className="material-icons" onClick={() => onIsStarred(mail.id)}> star_border </span>}

            {(mail.isImportant) ?
                <span className="material-icons important" onClick={() => onIsImportant(mail.id)}> label_important </span> :
                <span className="material-icons" onClick={() => onIsImportant(mail.id)}> label_important </span>}
  
        </div>
         
        
        <h3 className="mail-preview-title" onClick={() => onIsRead(mail.id)}>{mail.user.userName}</h3>
        
            
        <div className="mail-preview-message" onClick={() => onIsRead(mail.id)}>
        <Link to={"/mail/" + mail.id}>   
            <h4>{mail.subject}
                <span className="mail-preview-desc">
                    {mail.desc}
                </span>
            </h4>
            </Link>
        </div>
        
        

        <p className="mail-preview-time" onClick={() => onIsRead(mail.id)}>{date}</p>
        
        




        {/* <td><button onClick={() => onRemoveMail(mail.id)}>X</button></td>
        <td>{mail.user.userName}</td>
        <td>{mail.subject}</td>
        <td>{mail.sentAt}</td> */}
    </section>

}   