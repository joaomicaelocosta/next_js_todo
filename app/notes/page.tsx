import Link from "next/link";

import CreateNote from "./[id]/CreateNote";

import '@/styles/modules/global.scss'

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/todos/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();    
    return data?.items as any[];
}


export default async function NotesPage() {
    const notes = await getNotes()


    return(
        <div>
            <h1 className="title">Notes</h1>
            <div className="container">
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />
                })}
            </div>
            <div className="center">
                <CreateNote />
            </div>
        </div>
    );
}

function Note({note}: any) {
    const {id, title, content, created} = note || {};

    return(
        <Link href={`/notes/${id}`}>
            <div className="card">
                <h2 className="card__title">{title}</h2>
                <h5 className="card__subtitle">{content}</h5>
                <p className="card__date">{created.split(' ')[0]}</p>
            </div>
        </Link>
    )
}