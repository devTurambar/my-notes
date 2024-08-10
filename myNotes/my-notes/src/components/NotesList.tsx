import Note from "./Note"
import { useAppSelector, useAppDispatch } from '../lib/hooks'
import { erase, addNote, change, selectNote} from '../features/notes/notesSlice';
import { useNavigate } from "react-router-dom";

const NodesList = () => {
    const navigate = useNavigate();

    const notes = useAppSelector(selectNote);
    const dispatch = useAppDispatch();

    console.log(notes)

    const newNote = () => {
        dispatch(addNote({id:(notes.length == 0 ? 1 : notes[notes.length-1].id+1), title:"New", content:""}));
        // navigate("/pages/InsideNote");
    };
    return (
        <div className="grid-notes">
            {notes.map((e) => {
                return (
                    <Note key={e.id} title={e.title} id={e.id} content={e.content}/>
                )
            })}
            <button onClick={newNote} className='bg-slate-600 text-white rounded-md w-36'>add note</button>
        </div>
    )
}
export default NodesList;