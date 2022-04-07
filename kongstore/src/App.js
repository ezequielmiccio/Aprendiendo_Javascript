import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App(){

  const onAdd = (quantity) => {
    console.log(quantity);
  }
    
  return (
    <div>
      <header id="header">
        <NavBar/>
      </header>

      <ItemCount initial={1} stock={20} onAdd={onAdd}/>
      
      <ul>
        <ItemListContainer/>
      </ul>

    </div>
  )

}

export default App;
