//bts
import 'bootstrap/dist/css/bootstrap.min.css';
//comp.
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import {useState} from "react";
//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  
  const [totalQtyBought, setTotalQtyBought] = useState(0);
  let addPurchase = desiredAmount => setTotalQtyBought(totalQtyBought + desiredAmount)
  
  console.log(totalQtyBought);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar totalQtyBought={totalQtyBought} />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route path="/item/:productId" element={ <ItemDetailContainer addPurchase={addPurchase} /> } />
          <Route path="/cart" element={ <CartContainer totalQtyBought={totalQtyBought} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
