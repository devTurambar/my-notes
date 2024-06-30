const InsideNote = () => {
    return(
        <div className="flex flex-col gap-6">
            <input type="text" placeholder="Title..." className="text-5xl bg-black focus:outline-none"/>
            <input type="text" placeholder="Content" className="text-sm bg-black focus:outline-none"/>
        </div>
    )
}

export default InsideNote;