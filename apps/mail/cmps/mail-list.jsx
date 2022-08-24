import { MailPreview } from "./mail-preview.jsx";


export function MailList({ emails }) {

    return <table className="mail-list">
        
            {
            emails.map(email => {

                
                <MailPreview key={email.id} email={email} />
                
            } 
                
                
                
                )}
        
    </table>
}