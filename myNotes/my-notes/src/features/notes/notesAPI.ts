// A mock function to mimic making an async request for data
interface Note{
    id:number,
    content:string
}
export function fetchNote(note = {}) {
    return new Promise<{ data: Note | {} }>(resolve =>
        setTimeout(() => resolve({ data: note }), 500)
    )
}
  

//   export function fetchNote(note = "") {
//     return new Promise<{ data: string }>(resolve =>
//       setTimeout(() => resolve({ data: note }), 500)
//     )
//   }
  