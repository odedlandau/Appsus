

export function MailPreview({ mail, onRemoveMail }) {

    return <tr>
        <td><button onClick={() => onRemoveMail(mail.id)}>X</button></td>
        <td>{mail.from.userName}</td>
        <td>{mail.subject}</td>
        <td>{mail.sentAt}</td>
    </tr>

}   