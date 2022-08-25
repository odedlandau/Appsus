import { MailPreview } from "./mail-preview.jsx";


export function MailList({ mails, onRemoveMail }) {
    console.log('mails', mails);
    console.log('onRemoveMail', onRemoveMail);
    return <section className="mail-list">

        {mails.map(mail =>
            <div>
                <button onClick={()=>onRemoveMail(mail.id)}>X</button>
                <MailPreview key={mail.id} email={mail} />
                <hr />
            </div>
        )}

    </section>


}