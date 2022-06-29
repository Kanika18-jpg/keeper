import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "./Notes";
import Createarea from "./Createarea";


// function App() {
//     return (
//       <div>
//         <Header />
//         {notes.map(noteItem => (
//           <Note
//             key={noteItem.key}
//             title={noteItem.title}
//             content={noteItem.content}
//           />
//         ))}
//         <Footer />
//       </div>
//     );
//   }
  
// we can write in a simpler form as below



function App() {

    const [notes , setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }


    function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }


    return(
        <><Header />
        <Createarea onAdd={addNote}/>
        {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
        <Footer />
         </>
    );
}

export default App;