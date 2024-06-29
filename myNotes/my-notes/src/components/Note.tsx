import { useAppSelector, useAppDispatch } from '../lib/hooks'
import {
    erase,
    // change,
    addNote,
    selectNote
  } from '../features/notes/notesSlice'
const Note = ({title, id} : {title:string, id:number}) => {
    const dispatch = useAppDispatch();
    return (
        <div className='flex flex-col flex-1 rounded-md p-4 bg-yellow-500'>
            <span>{title}</span>
            <button onClick={() => dispatch(erase(id))} className='bg-slate-600 text-white rounded-md w-36'>erase note</button>
            {/* <span>{note[0]}</span> */}
            {/* <button onClick={() => dispatch(change("text"))} className='bg-slate-600 text-white rounded-md w-36'>change note</button> */}
        </div>
    )
}
export default Note;
