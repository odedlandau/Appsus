const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3>APPSUS JC-OL</h3>
        </Link>
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Notes</NavLink>
            <NavLink to="/book">Books</NavLink>

        </nav>
    </header>
}
