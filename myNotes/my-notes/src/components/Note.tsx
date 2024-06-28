import { useAppSelector, useAppDispatch } from '../lib/hooks'
import {
    erase,
    change,
    selectNote
  } from '../features/notes/notesSlice'

const Note = ({title} : {title:string}) => {
    const note = useAppSelector(selectNote);
    const dispatch = useAppDispatch();
    return (
        <div className='flex flex-col'>
            <span>{title}</span>
            <span>{note}</span>
            <button onClick={() => dispatch(change("text"))} className='bg-slate-600 text-white rounded-md w-36'>change note</button>
        </div>
    )
}
export default Note;
