import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [sentence, setSentence] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:8080/api/sentence")
    axios.get("/api/sentence") //TODO: proxy strategy used / can whitelist the url from backend
    .then((response) => {
      setSentence(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }); //!know when dependency Array elements are required

  return (
    <>
      <h1>chai aur fulllll stack!</h1>
      <p>SENTENCE: {sentence.length}</p>

      {
        sentence.map((sentence) => (
          <div key={sentence.id}>
            <h3>{sentence.title}</h3>
            <p>{sentence.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
