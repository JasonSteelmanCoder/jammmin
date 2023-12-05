import './App.css';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {
  return (
    <div className="App">
      <header>  
        <h1>Jammmin</h1>
      </header>
      <SearchBar />
      <SearchButton />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;
