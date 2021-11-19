import React, { useState, useEffect } from "react";
import Card from "./components/card/Card";

function App() {
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
