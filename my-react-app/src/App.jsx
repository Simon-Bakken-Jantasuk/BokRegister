import { useState } from "react";
import "./App.css";

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
  const [name, setName] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [topic, setTopic] = useState("");
  const [books, setBooks] = useState([]);

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

  return (
    <div id="app">
      <div id="registering">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Navn"
        />
        <input
          type="text"
          value={publicationYear}
          onChange={(event) => setPublicationYear(event.target.value)}
          placeholder="Utgivelseår"
        />
        <input
          type="text"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
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
