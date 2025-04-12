import RegisterBook from "./components/RegisterBook";
import Books from "./components/Books";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <RegisterBook books={books} setBooks={setBooks} />
      <Books books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
