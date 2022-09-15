//bts
import 'bootstrap/dist/css/bootstrap.min.css';
//comp.
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer greeting="Reserved container for products input."/>
      </header>
    </div>
  );
}

export default App;
