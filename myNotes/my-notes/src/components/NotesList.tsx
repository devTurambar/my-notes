import Note from "./Note"
import { useAppSelector, useAppDispatch } from '../lib/hooks'
import {
    erase,
    // change,
    addNote,
    selectNote
  } from '../features/notes/notesSlice';
  import { useState } from "react";

const NodesList = () => {
    const notes = useAppSelector(selectNote);
    const dispatch = useAppDispatch();
    console.log(notes);
    return (
        <div className="flex flex-col md:flex-row gap-4">
            {notes.map((e) => {
                return (
                    <Note key={e.id} title={e.title} id={e.id} content={e.content}/>
                )
            })}
            <button onClick={() => dispatch(addNote({id:notes.length+1, title:"Título", content:"Second Note"}))} className='bg-slate-600 text-white rounded-md w-36'>add note</button>
        </div>
    )
}
export default NodesList;