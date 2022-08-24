

export function EmailPreview({ email }) {

    return <tr className="email-preview">
        <td>{email.from.userName}</td>
        <td>{email.subject}</td>
        <td>{email.sentAt}</td>
    </tr>
}