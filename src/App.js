import React, { useState, useEffect } from "react";
import Card from "./components/card/Card";

function App() {
  const [books, setBooks] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {books && books.results.map((book) => <Card inf={book} />)}
    </div>
  );
}

export default App;
