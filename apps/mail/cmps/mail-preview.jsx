

export function MailPreview({ email }) {
    
    return <tr className="mail-preview">
        <td><button>X</button></td>
        <td>{email.from.userName}</td>
        <td>{email.subject}</td>
        <td>{email.sentAt}</td>
    </tr> 
     
}