//bts
import 'bootstrap/dist/css/bootstrap.min.css';
//comp.
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer";
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import CartContainer from './components/containers/CartContainer';
import { CartContextProvider } from './context/CartContext';
//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
            <Route path="/item/:productId" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={ <CartContainer /> } />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
