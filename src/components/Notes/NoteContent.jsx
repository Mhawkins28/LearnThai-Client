import { useEffect, useState } from "react";
import { NoteContainer, NoteTitle, NoteContent} from "./NoteElements";


// The content of each note will be displayed here 

// useEffect to fetch data from the backend (${id})

// notes will be in state/props depending on where we are displaying them and/or where we are fetching them from

function NotesContnet() {
  return (


<NoteContainer>  {/* (may not need this container) */}

  {/* <NoteTitle {notes.title} />
  <NoteContent {notes.content} /> */}
  
</NoteContainer>


  )
}

export default NotesContent;



