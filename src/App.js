import { Col } from 'antd';
import './App.css';
import Searcher from './components/Searcher';
import PokemonCard from './components/PokemonCard';
import PokemonList from './components/PokemonList';

const pokemons = Array(10).fill('');

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
