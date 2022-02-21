import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemlistconteiner from './components/Itemlistcontainer/Itemlistconteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Itemlistconteiner/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
