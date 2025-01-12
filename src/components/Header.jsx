import { useContext, useEffect, useRef, useState } from "react"
import { TodoContext } from "../context/context"
import i18next from "i18next"

const Header = ({setSearching}) => {
  const { t } = useContext(TodoContext)
  const [isSearch, setIsSearch] = useState(false)
  const [text, setText] = useState('')
  const isMounted = useRef(false)
  useEffect(() => {
    if (isMounted.current) {
      setSearching(text)
    }
    isMounted.current = true
  }, [text])
  
  const changeLang = () => {
    localStorage.i18nextLng !== 'uz'? i18next.changeLanguage('uz') : i18next.changeLanguage('ru')
  }
  
  return (
    <header className="header">
      { !isSearch ? (
        <nav className="header__nav">
        <button className="header__nav-lang" onClick={() => changeLang()}>
        {localStorage.i18nextLng === 'ru' ? 'UZ' : 'RU'}
        </button>
        <h1 className="header__nav-title">{t('Notes')}</h1>
        <button className="header__nav-search" onClick={() => setIsSearch(true)}><img src="/search.svg" alt="" /></button>
      </nav>
      ) : (
        <nav className="header__nav header__nav--search">
        <button onClick={() => {setIsSearch(false); setText('')}}><img src="/back.svg" alt="" /></button>
        <input 
          type="text"
          placeholder={t('Search')}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => setText('')}><img src="/reset.svg" alt="" /></button>
      </nav>
      ) }
    </header>
  )
}

export default Header