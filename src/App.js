import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (

    <>
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/product/:id' element={<ItemDetailContainer />}/>
      </Routes>

    </BrowserRouter></>
  );
}

export default App;