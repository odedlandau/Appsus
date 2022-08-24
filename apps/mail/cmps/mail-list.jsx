import { EmailPreview } from "./mail-preview";


export function EmailList({emails}){

    return <table className="email-list">
        {emails.map(email=> <EmailPreview key= {email.id} email={email}/>)}
    </table>
}