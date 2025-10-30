import { Col } from 'antd';
import './App.css';
import logo from './statics/logo.svg';
import Searcher from './components/Searcher';
import PokemonCard from './components/PokemonCard';
import PokemonList from './components/PokemonList';
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';
import { connect } from 'react-redux';

function App({pokemons, setPokemons}) {  

  useEffect(() => {
    const fetchPokemons = async () => {
          
      const pokemonRes = await getPokemon();
      setPokemons(pokemonRes);
    };

    fetchPokemons();
    
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPokemons: (value) => dispatch(setPokemonsActions(value)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
