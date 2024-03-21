import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Button from "./components/Button";
import CardsList from "./components/CardsList";
import Error from "./components/Error";

const Home = () => {
  const [initData, setInitData] = useState();
  const [characters, setCharacters] = useState();
  const [searchTermCharacters, setSearchTermCharacters] = useState();
  const [noResult, setNoResult] = useState(false);
  const [totalCharacters, setTotalCharacters] = useState();

  const searchTerm = (e) => {
    setSearchTermCharacters(e.target.value);
    searchCharacters();
  };

  const searchCharacters = () => {
    if (searchTermCharacters) {
      const searchResult = characters.filter((character) =>
        character.name
          .toLowerCase()
          .includes(searchTermCharacters.toLowerCase())
      );
      setCharacters(searchResult);
      setNoResult(searchResult.length === 0);
    } else {
      setCharacters(initData);
    }
  };
  const getCharacters = async () => {
    try {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const response = await data.json();
      setCharacters(response.results);
      setInitData(response.results);
      setTotalCharacters(response.info.count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <section>
      <Header />
      <Input
        type="search"
        placeholder="type your character..."
        changeHandler={searchTerm}
      />
      {totalCharacters && (
        <p className="mt-4">
          Total Characters are:{" "}
          <span className="font-bold">{totalCharacters}</span>
        </p>
      )}
      {noResult ? <Error /> : <CardsList characters={characters} />}{" "}
      <Button clickHandler={() => {}}>Next</Button>
      <Footer />
    </section>
  );
};

export default Home;
