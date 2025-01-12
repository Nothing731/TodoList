import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            ru: {
                translation: {
                    Notes: 'Заметки',
                    Search: 'Поиск...',
                    AllNotes: 'Все заметки',
                    FoundNoes: 'Найденo заметoк ',
                    NotFound: 'Ничего не найдено',
                    NotesExceed: 'Нет заметок',
                    List: 'Список',
                    Grid: 'Сетка',
                    Edit: 'Редактировать',
                    Del: 'Удалить',
                    Title: 'Заголовок',
                    Content: 'содержимое',
                    Cancel: 'отмена',
                    Add: 'добавить ',
                    AddNote: 'добавить заметку',
                    EditNote: 'Изменить заметку',
                    Change: 'Изменить'
                }
            }, 
            uz: {
                translation: {
                    Notes: 'Eslatmalar',
                    Search: 'Qidirish...',
                    AllNotes: 'Barcha eslatmalar',
                    FoundNoes: 'Topilgan eslatmalar ',
                    NotFound: 'Hech narsa topilmadi',
                    NotesExceed: 'Eslatmalar yo‘q',
                    List: 'Ro‘yhat',
                    Grid: 'Setka',
                    Edit: 'O‘zgartirish',
                    Del: 'O‘chirish',
                    Title: 'Nom',
                    Content: 'Mazmun',
                    Cancel: 'Bekor qilish',
                    Add: 'Qo‘shish',
                    AddNote: 'Eslatma qo‘shish',
                    EditNote: 'Eslatmani tahrirlash',
                    Change: 'O‘zgartirish'
                }
            }
        }
    })