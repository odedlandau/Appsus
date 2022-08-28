export const notesData = {
    getNotes
}

function getNotes() {
    return (
        [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "https://pngimg.com/uploads/husky/husky_PNG34.png",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#b7c7f1"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        {
                            txt: "Driving liscence",
                            doneAt: null
                        },
                        {
                            txt: "Coding power",
                            doneAt: 187111111
                        }
                    ]
                }
            },
            {
                id: "n104",
                type: "note-img",
                info: {
                    url: "https://pngimg.com/uploads/acorn/acorn_PNG37022.png",
                    title: ""
                },
                style: {
                    backgroundColor: "light-blue"
                }
            },
        ]
    )
}


