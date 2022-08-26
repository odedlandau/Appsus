import { MailPreview } from "./mail-preview.jsx";


export function MailList({ mails, onRemoveMail }) {
        return <table className="mail-list">
        {mails.map(mail => <MailPreview key={mail.id} mail={mail} onRemoveMail={onRemoveMail} />)}

        {/* {mails.map(mail =>
            <ul className="mail-preview flex column">
                <button onClick={()=>onRemoveMail(mail.id)}>X</button>
                <MailPreview key={mail.id} email={mail} />
                
            </ul>
        )} */}

    </table>


}