import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Contador from './components/Contador';
import Asd from './components/Asd';


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
      
        <ItemListContainer 
          color={["red", "blue", "green"]}
          id={[1,2,3]}
          clText={clText}
        />
        
        <Contador 
          stock={10}
          initial={1}
          onAdd={onAdd}
        />

    </div>
  );
}

export default App;