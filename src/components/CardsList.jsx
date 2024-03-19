import Card from "./Card";

const CardsList = ({ characters }) => {
  const createCards = () => {
    return characters.map((character, id) => {
      return <Card key={id} character={character} />;
    });
  };
  return <ul>{characters && createCards()}</ul>;
};

export default CardsList;
