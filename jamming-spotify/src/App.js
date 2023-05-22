import './App.css';
import Playlist from './component/Playlist';
import SaveToSpotify from './component/SaveToSpotify';
import SearchBar from './component/SearchBar';
import SearchButton from './component/SearchButton';

function App() {
   return(
      <>
      <Playlist/>
      <SaveToSpotify/>
      <SearchBar/>
      <SearchButton/>
      </>
   )
}

export default App;
