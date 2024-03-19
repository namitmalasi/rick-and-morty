import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Button from "./components/Button";

const Home = () => {
  return (
    <section>
      <Header />
      <Input
        type="search"
        placeholder="type your character..."
        changeHandler={() => {}}
      />
      <Button clickHandler={() => {}}>Next</Button>
      <Footer />
    </section>
  );
};

export default Home;
