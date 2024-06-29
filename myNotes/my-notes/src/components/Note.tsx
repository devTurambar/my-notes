import { useAppSelector, useAppDispatch } from '../lib/hooks'
import {
    erase,
    // change,
    addNote,
    selectNote
  } from '../features/notes/notesSlice'

const Note = ({title} : {title:string}) => {
    const note = useAppSelector(selectNote);
    const dispatch = useAppDispatch();
    console.log("NOTE",note);
    return (
        <div className='flex flex-col'>
            <span>{title}</span>
            {/* <span>{note[0]}</span> */}
            {/* <button onClick={() => dispatch(change("text"))} className='bg-slate-600 text-white rounded-md w-36'>change note</button> */}
            <button onClick={() => dispatch(erase(2))} className='bg-slate-600 text-white rounded-md w-36'>erase note</button>
            <button onClick={() => dispatch(addNote({id:2, content:"Second Note"}))} className='bg-slate-600 text-white rounded-md w-36'>add note</button>
        </div>
    )
}
export default Note;
