

export function MailPreview({ email }) {

    return <section className="mail-preview">
        <h2>{email.from.userName}</h2>
        <h2>{email.subject}</h2>
        <h2>{email.sentAt}</h2>
    </section>

}