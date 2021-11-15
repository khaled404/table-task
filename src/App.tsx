import Header from "./components/Header";
import Tables from "./components/Tables";
import data from "./json/tables.json";

function App() {
  return (
    <>
      <Header />
      <Tables data={data} />
    </>
  );
}

export default App;
