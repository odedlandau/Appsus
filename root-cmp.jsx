import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailApp } from "./apps/mail/views/mail-app.jsx"
import { NoteApp } from "./apps/note/views/note-app.jsx"
import { BookApp } from "./apps/book/views/book-app.jsx"
import { BookDetails } from "./apps/book/views/book-details.jsx";


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Switch>
               
                <Route path="/mail" component={MailApp} />
                <Route path="/note" component={NoteApp} />
                <Route path="/book/:bookId" component={BookDetails} />
                <Route path="/book" component={BookApp} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        </section>
    </Router>
}
