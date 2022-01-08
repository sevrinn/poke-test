import './App.css';
import PokemonList from './components/PokemonList'
import CapturedPokemons from './components/CapturedPokemons';
import { PokemonProvider } from './components/PokemonProvider';


function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <CapturedPokemons />
      </div>
    </PokemonProvider>
  );
}

export default App;
