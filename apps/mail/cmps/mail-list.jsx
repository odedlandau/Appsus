import { MailPreview } from "./mail-preview.jsx";


export function MailList({ emails }) {
    console.log('from email-list', emails);
    return <table className="mail-list">

        {emails.map(email => <MailPreview key={email.id} email={email} />)}

    </table>

   
}