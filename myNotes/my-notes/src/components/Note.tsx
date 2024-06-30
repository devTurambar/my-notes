import { useAppSelector, useAppDispatch } from '../lib/hooks'
import {erase, addNote, selectNote } from '../features/notes/notesSlice';
import deleteIcon from "../img/deleteIcon.svg"
import { Link } from 'react-router-dom';

const Note = ({title, content, id} : {title:string, content:string, id:number}) => {
    const dispatch = useAppDispatch();
    return (
        <div className='flex flex-1 rounded-md p-4 bg-yellow-500'>
            <Link to="/pages/InsideNote" className="flex flex-col flex-1">
                <span className="text-2xl font-bold">{title}</span>
                <span className="text-sm">{content}</span>
            </Link>
            <img className="cursor-pointer w-8" onClick={() => dispatch(erase(id))} src={deleteIcon}/>
            {/* <span>{note[0]}</span> */}
            {/* <button onClick={() => dispatch(change("text"))} className='bg-slate-600 text-white rounded-md w-36'>change note</button> */}
        </div>
    )
}
export default Note;
