

export function MailPreview({ mail, onRemoveMail }) {
    console.log(mail);

    return <section className="mail-preview">

        <div className="mail-preview-option">
            <span className="material-icons"> delete </span>
            <span className="material-icons"> star_border </span>
            <span className="material-icons"> label_important </span>
        </div>

        <h3 className="mail-preview-title">{mail.user.userName}</h3>

        <div className="mail-preview-message">
            <h4>{mail.subject}
                <span className="mail-preview-desc">
                {mail.desc}
                </span>
            </h4>
        </div>

        <p className="mail-preview-time">{mail.sentAt}</p>




        {/* <td><button onClick={() => onRemoveMail(mail.id)}>X</button></td>
        <td>{mail.user.userName}</td>
        <td>{mail.subject}</td>
        <td>{mail.sentAt}</td> */}
    </section>

}   