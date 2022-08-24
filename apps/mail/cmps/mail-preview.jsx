

export function MailPreview({ email }) {

    return <tr className="mail-preview">
        <button>X</button>
        <td>{email.from.userName}</td>
        <td>{email.subject}</td>
        <td>{email.sentAt}</td>
    </tr>
}