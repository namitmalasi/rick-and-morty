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
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

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
  const getCharacters = async (page = 1) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const response = await data.json();
      setCharacters(response.results);
      setInitData(response.results);
      setTotalCharacters(response.info.count);
      setTotalPages(response.info.pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    getCharacters(newPage);
  };

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
      {totalPages && (
        <div className="flex justify-center my-4 gap-2">
          <Button
            classes={
              currentPage === 1
                ? "bg-gray-400 text-white p-2 rounded-md"
                : "bg-black text-white p-2 rounded-md"
            }
            clickHandler={() => {
              handlePageChange(currentPage - 1);
            }}
            ButtonLabel="Prev"
            disabled={currentPage === 1}
          />
          <p className="flex items-center">
            Page {currentPage} of {totalPages}
          </p>
          <Button
            classes={
              currentPage === totalPages
                ? "bg-gray-400 text-white p-2 rounded-md"
                : "bg-black text-white p-2 rounded-md"
            }
            clickHandler={() => {
              handlePageChange(currentPage + 1);
            }}
            ButtonLabel="Next"
            disabled={currentPage === totalPages}
          />
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Home;
