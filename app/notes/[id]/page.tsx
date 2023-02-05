import '@/styles/modules/global.scss'

async function getNote(noteId:string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/todos/records/${noteId}`, {
        next: {revalidate:10},
    })
    const data = await res.json();
    return data;
}

export default  async function NotePage({params}:any){
    const note = await getNote(params.id)
    return (
      <div>
        <h1 className="title">notes/{note.id}</h1>
        <div className="card note">
                <h2 className="card__title">{note.title}</h2>
                <h5 className="card__subtitle">{note.content}</h5>
                <p className="card__date">{note.created.split(' ')[0]}</p>
            </div>
      </div>
    )
}
