
const {Link} = ReactRouterDOM

export function NotePreview({ note }) {

    return <article >

            <h3>Note : {note.type}</h3>
            
            <Link to={"/note/" + note.id}>
              <div>Note...</div>
            {/* <div className="img-container">
                <img src={`../assets/img/${note.img}.jpg`} />
            </div> */}
            </Link>
        </article>
}



