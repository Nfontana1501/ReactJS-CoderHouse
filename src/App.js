import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';

function App() {

  return (

    <>
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/product/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>

    </BrowserRouter></>
  );
}

export default App;