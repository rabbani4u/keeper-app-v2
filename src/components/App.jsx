import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function CreateNotes(noteItem) {
  return <Note title={noteItem.title} content={noteItem.content} />;
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map(noteItem => (
        <Note title={noteItem.title} content={noteItem.content} />
      ))}
    </div>
  );
}

export default App;
