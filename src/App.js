import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import {CartProvider} from './context/CartContext';


function App() {

  return (

    <>
    <CartProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/product/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>

      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;