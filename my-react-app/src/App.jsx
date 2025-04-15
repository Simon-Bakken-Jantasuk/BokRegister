import { useState } from "react";
import "./App.css";

/*
Eksempel på en hook
Istedenfor å definere state-management rett fra komponentet, så kan vi lage en hook.
Det er en funksjon som bare returnerer noe annet enn JSX, fra slik jeg forstår.
*/
function useBook() {
  const [name, setName] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [topic, setTopic] = useState("");
  const [books, setBooks] = useState([]);
  /*
    Det er lurt at disse er sine egne funksjoner, 
    I tilfellet vi ønsker å gjøre noe mer før state.
  */
  const onName = (event) => setName(event.target.value);

  const onPublicationYear = (event) => setPublicationYear(event.target.value);

  const onTopic = (event) => setTopic(event.target.value);

  const addBook = () => {
    switch ("") {
      case name:
        alert("Navn må være definert");
        break;
      case publicationYear:
        alert("Utgivelseår må være definert");
        break;
      case topic:
        alert("Sentral tema må være definert");
        break;
      default:
        const newBook = { name, publicationYear, topic };
        setBooks([...books, newBook]);
        break;
    }
  };

  const deleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  return [
    // state seg selv
    name,
    publicationYear,
    topic,
    books,
    // prosedyrer for å endre på state
    addBook,
    deleteBook,
    onName,
    onPublicationYear,
    onTopic,
  ];
}

function Book({ name, publicationYear, topic, deleteBook }) {
  return (
    <div className="book">
      <table>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{publicationYear}</td>
            <td>{topic}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={deleteBook}>Slett bok</button>
    </div>
  );
}

function App() {
  /*
    Logikken som var her er nå flyttet over til useBook-hooken og 
    App-komponentet blir forenklet mer:
  */
  const [
    name,
    publicationYear,
    topic,
    books,
    addBook,
    deleteBook,
    onName,
    onPublicationYear,
    onTopic,
  ] = useBook(); // kan brukes i andre komponenter også!

  return (
    <div id="app">
      <div id="registering">
        <input type="text" value={name} onChange={onName} placeholder="Navn" />
        <input
          type="text"
          value={publicationYear}
          onChange={onPublicationYear}
          placeholder="Utgivelseår"
        />
        <input
          type="text"
          value={topic}
          onChange={onTopic}
          placeholder="Sentralt tema"
        />
        <button onClick={addBook}>Submit</button>
      </div>
      <div id="books">
        {books.map((book, index) => {
          return (
            <Book
              key={index}
              name={book.name}
              publicationYear={book.publicationYear}
              topic={book.topic}
              deleteBook={() => deleteBook(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
