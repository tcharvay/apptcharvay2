import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemlistconteiner from './components/Itemlistcontainer/Itemlistconteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
         
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/'element={<Itemlistconteiner/>}/>
              <Route path='/category/:categoryId'element={<Itemlistconteiner/>}/>
              <Route path='/detail/:productId'element={<ItemDetailContainer/>}/>
            </Routes>          
          </BrowserRouter>
        </div>
     
  );
}

export default App;
