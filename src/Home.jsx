import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Button from "./components/Button";
import CardsList from "./components/CardsList";

const Home = () => {
  const [characters, setCharacters] = useState();

  const getCharacters = async () => {
    try {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const response = await data.json();
      setCharacters(response.results);
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
        changeHandler={() => {}}
      />
      <CardsList characters={characters} />
      <Button clickHandler={() => {}}>Next</Button>
      <Footer />
    </section>
  );
};

export default Home;
