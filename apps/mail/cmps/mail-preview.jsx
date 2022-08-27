
export function MailPreview({ mail, onRemoveMail, onIsStarred, onIsImportant, onIsRead}) {
    const mailPreviewClass = !mail.isRead ? 'unread' : ''
    console.log(mailPreviewClass);

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

        {/* <div className="mail-previw-container" onClick={() => onIsRead(mail.id)} >         */}
        <h3 className="mail-preview-title" onClick={() => onIsRead(mail.id)}>{mail.user.userName}</h3>

        <div className="mail-preview-message" onClick={() => onIsRead(mail.id)}>
            <h4>{mail.subject}
                <span className="mail-preview-desc">
                    {mail.desc}
                </span>
            </h4>
        </div>

        <p className="mail-preview-time" onClick={() => onIsRead(mail.id)}>{mail.sentAt}</p>
        {/* </div> */}




        {/* <td><button onClick={() => onRemoveMail(mail.id)}>X</button></td>
        <td>{mail.user.userName}</td>
        <td>{mail.subject}</td>
        <td>{mail.sentAt}</td> */}
    </section>

}   