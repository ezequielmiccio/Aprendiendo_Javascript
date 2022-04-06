import './App.css';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App(){

  const onAdd = (quantity) => {
    console.log(quantity);
  }
    
  return (
    <div>
      <header id="header">

        <div class="logo">

            <ItemListContainer logo="KONGSTORE>"/>
            
            <ItemCount initial={1} stock={20} onAdd={onAdd}/>
        </div>

        <NavBar/>
      </header>
    </div>
  )
}

export default App;
