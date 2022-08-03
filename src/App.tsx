import React, { useState ,useEffect} from "react";
import WordBinder from "./components/WordBinder";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.css";

export default function App() {
  const [inputWord, setWord] = useState("");
  const [searchWord, setSearchWord] = useState("Nice");
  const RandWordApi = "https://github.com/mcnaveen/Random-Words-API"
  const [randWord,setRandDay] = useState("run");
  
  async function fetchRandWord() {
    const res = await fetch(RandWordApi);
    res
      .json()
      .then((res) => {
        setRandDay(res[0].word)
      })
      .catch((err) => console.log(err));
  }
  useEffect(()=>{
    fetchRandWord();
  },[])
  return (
    <div className="App">
      <div className="word-day">
        <h2>Word of The Day : </h2>
        <WordBinder searchedWord={randWord} limit="5" />
      </div>
      <label className="sub-container input-style">
        <input
          placeholder="Enter any word to search"
          onChange={(e) => setWord(e.target.value)}
          type="text"
        />
        <button onClick={(e) => setSearchWord(inputWord)}>
          <SearchIcon />
        </button>
      </label>
      <WordBinder searchedWord={searchWord} limit="10" />
    </div>
  );
}
