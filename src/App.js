//bts
import 'bootstrap/dist/css/bootstrap.min.css';
//comp.
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route path="/item/:productId" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <CartContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
