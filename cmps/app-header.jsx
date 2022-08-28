const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="full main-layout">
        <div className="app-header">
            <Link to="/">
                <h3>APPSUS</h3>
            </Link>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/mail">Mail</NavLink>
                <NavLink to="/note">Notes</NavLink>
                <NavLink to="/book">Books</NavLink>

            </nav>
        </div>
    </header>
}
