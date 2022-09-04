import './App.css';
import ItemListContainer from './components/IemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/Counter/Contador';
import FetchListContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  function clText(text){
    console.log(text)
  }

  function onAdd (text){
    alert(text)
  }

  return (
    <div className="">
        <NavBar />
      
        <ItemListContainer />

        <Contador 
          stock={10}
          initial={1}
          onAdd={onAdd}
        />
        
        <FetchListContainer />

    </div>
  );
}

export default App;