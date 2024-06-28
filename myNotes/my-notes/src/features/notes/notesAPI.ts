// A mock function to mimic making an async request for data
export function fetchNote(note = "") {
    return new Promise<{ data: string }>(resolve =>
      setTimeout(() => resolve({ data: note }), 500)
    )
  }
  