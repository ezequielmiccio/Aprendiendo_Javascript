import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App(){

  return(
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainer />}/>
          <Route path = '/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

/*   const onAdd = (quantity) => {
    console.log(quantity);
  } */
    
/*   return (
    <div>
      <header id="header">
        <NavBar/>
      </header>

      <ItemCount initial={1} stock={20} onAdd={onAdd}/>
      
      <ul>
        <ItemListContainer/>
      </ul>

    </div>
  ) */

}

export default App;
