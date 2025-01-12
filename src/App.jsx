import { useEffect, useState } from "react"
import Header from "./components/Header"
import Notes from "./components/Notes"
import Modal from "./components/Modal"
import { TodoContext } from "./context/context"
import { useTranslation } from "react-i18next"

const App = () => {
  const getLS = () => localStorage.notes ? JSON.parse(localStorage.notes) : []
  const setLS = () => localStorage.notes = JSON.stringify(notes)
  const [notes, setNotes] = useState(getLS)
  
  useEffect(() => {
    setLS()
  }, [notes])
  // useEffect(() => {
  //   localStorage.i18nextLng = 'ru'
  // }, [])
  
  
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const closeModalHandler = () => {
    setIsModalOpen(false)
    setIsEdit(false)
    setEditNote(null)
  }
  
  const [editNote, setEditNote] = useState(null)
  const addOrChangeNoteHandler = (note) => {
    if(editNote?.id){
      const updatedNotes = notes.map(item => {
        if(item.id === note.id) {
          return note
        }
        return item
      })
      setNotes(updatedNotes)
    } else {
      setNotes([...notes, note])
    }
  }
  
  const changeNoteHandler = (note) => {
    setIsModalOpen(true)
    setIsEdit(true)
    setEditNote(note)
  }
  
  const deleteNoteHandler = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }
  
  const [searchValue, setSearchValue] = useState('')
  const setSearchingValue = (val) => {
    setSearchValue(val)
  }
  const filteredNotes = notes.filter((note) => 
    (
     note.title.toLowerCase().includes(searchValue.toLowerCase()) ||
     note.descr.toLowerCase().includes(searchValue.toLowerCase())
    )
  )
  
  const { t } = useTranslation()
  
  return (
    <TodoContext.Provider 
      value={{
        changeNoteHandler, deleteNoteHandler, t
      }}
    >
      <Header setSearching={setSearchingValue}/>
      <Notes notes={filteredNotes} search={searchValue}/>
      {isModalOpen && 
      <Modal closeModal={closeModalHandler}
             addOrChangeNote={addOrChangeNoteHandler}
             isEdit={isEdit}
             editNote={editNote}
             
      />}
      <button className="add-note" onClick={() => setIsModalOpen(true)}>
        <img src="/edit.svg" alt="" />
      </button>
    </TodoContext.Provider>
  )
}

export default App