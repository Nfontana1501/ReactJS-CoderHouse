import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  function clText(text){
    console.log(text)
  }

  return (
    <div className="">
        <NavBar />
        <ItemListContainer 
          color={["red", "blue", "green"]}
          id={[1,2,3]}
          clText={clText}
          />
    </div>
  );
}

export default App;