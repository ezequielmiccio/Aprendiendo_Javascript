import './App.css';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App(){
    
  return (
    <div>
      <header id="header">

        <div class="logo">
            <ItemListContainer logo="KONGSTORE>"/>
        </div>

        <NavBar/>
      </header>
    </div>
  )
}

export default App;
