const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>
        <nav>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
        </nav>
    </header>
}
