//bts
import 'bootstrap/dist/css/bootstrap.min.css';
//comp.
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        {/* <ItemListContainer /> */}
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
