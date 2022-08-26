


export class SideBar extends React.Component {



    render() {
        return <section className="side-bar">
            <button className="side-bar-compose">
                <span className="material-icons"> add </span>
                Compose
            </button>
            
            <div className="side-bar-option">
                <span className="material-icons"> inbox </span>
                <h3>Inbox</h3>
            </div>

            <div className="side-bar-option">
                <span className="material-icons"> star </span>
                <h3>Starred</h3>
            </div>

            <div className="side-bar-option">
                <span className="material-icons"> label_important </span>
                <h3>Important</h3>
            </div>

            <div className="side-bar-option">
                <span className="material-icons"> near_me </span>
                <h3>Sent</h3>
            </div>







        </section >
    }


}