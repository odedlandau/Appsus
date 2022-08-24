import { MailPreview } from "./mail-preview.jsx";


export function MailList({emails}){

    return <table className="email-list">
        {emails.map(email=> <MailPreview key= {email.id} email={email}/>)}
    </table>
}