import { TodoContext } from "../context/context"
import { useContext } from "react"

const NotesItem = ({note}) => {
    const {changeNoteHandler:change, deleteNoteHandler:remove, t} = useContext(TodoContext)
  return (
    <div className="notes__item">
        <div className="notes__item-top">
            <h3>{note.title}</h3>
            <span>{note.date}</span>
        </div>
        <p>{note.descr}</p>
        <div className="notes__item-btns">
            <button className="purple" onClick={() => change(note)}>
                <img src="/edit.svg" alt="" />
                {t('Edit')}
            </button>
            <button className="red" onClick={() => remove(note.id)}>
                <img src="/del.svg" alt="" />
                {t('Del')}
            </button>
        </div>
    </div>
  )
}

export default NotesItem