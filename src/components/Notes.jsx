import { useContext, useState } from "react"
import NotesItem from "./NotesItem"
import { TodoContext } from "../context/context"

const Notes = ({ notes, search }) => {
  const {t} = useContext(TodoContext)
  const [isList, setIsList] = useState(false)
  const mainTitle = () => {
    if(notes.length && !search.length) return t('AllNotes')
    else if(notes.length && search.length) return `${t('FoundNotes')} (${notes.length})`
    else if(!notes.length && search.length) return t('NotFound')
    else return t('NotesExceed')
  }
    
  return (
    <div className="container notes">
        <div className="notes__top">
            <h2>{mainTitle()}</h2>
            <button onClick={() => setIsList(!isList)}>
                <img src={!isList ? "/list.svg" : "/grid.svg"} alt="" />
                {!isList ? t('List') : t('Grid')}
            </button>
        </div>
        <div className={`notes__list ${isList && 'list'}`}>
            {notes.map((note) => (
                <NotesItem key={note.id} note={note} />
            ))}
        </div>
    </div>
  )
}

export default Notes