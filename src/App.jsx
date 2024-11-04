import Card from "./components/card";
import Filter from "./components/filter";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Marka from "./components/marka";
import Service from "./service";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Filter />
      <Card />
      <Service />
      <Marka />
    </div>
  );
}

export default App;
