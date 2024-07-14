import { useLocation } from "react-router-dom";
import { erase, addNote, change, selectNote} from '../../features/notes/notesSlice';
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InsideNote = () => {
    const refContent = useRef<HTMLTextAreaElement>(null);

    let { state } = useLocation();
    console.log("state",state);

    const notes = useAppSelector(selectNote);
    console.log("notes",notes);
    const dispatch = useAppDispatch();

    const [inputTitle, setInput] = useState(notes.find(e => e.id == state.id)?.title);
    const [inputContent, setContent] = useState(notes.find(e => e.id == state.id)?.content);

    useEffect(() => {
        setTextAreaHeight();
    })

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaHeight();
        setContent(e.target.value);
        console.log(e.target.value);
    }
    const setTextAreaHeight = () => {
        if (refContent.current) {
            //So by now the height should be resizing correctly when the size is increasing but if you delete a line you'll see that the height don't go shorter. To fix that, I set the height to auto before and it will do the job for us.
            refContent.current.style.height = "auto";
            refContent.current.style.height = `${refContent.current.scrollHeight}px`;
        }
    }
    
    return(
        <div className="flex flex-col gap-6">
            <input type="text"  placeholder="Title..." className="text-5xl bg-black focus:outline-none" onChange={(e) => {setInput(e.target.value);console.log(e.target.value)}} value={inputTitle} />
            <textarea  ref={refContent} placeholder="Write your note here" className="text-sm bg-black focus:outline-none overflow-y-hidden resize-none" 
                onChange={(e) => {handleChange(e)}} value={inputContent}>
            </textarea>
            <Link to="/pages/Home">
                <button className="bg-white text-black pt-2 pb-2 pl-6 pr-6 rounded-md" onClick={() => dispatch(change({id:state.id,title:inputTitle,content:inputContent}))}>Save</button>
            </Link>
            <button className="bg-white text-black pt-2 pb-2 pl-6 pr-6 rounded-md" onClick={() => dispatch(change({id:state.id,title:inputTitle,content:inputContent}))}>Save</button>
        </div>
    )
}

export default InsideNote;