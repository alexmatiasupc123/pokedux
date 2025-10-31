import { Col, Spin } from 'antd';
import { shallowEqual, useSelector,useDispatch } from 'react-redux';
import './App.css';
import logo from './statics/logo.svg';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { useEffect } from 'react';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
 

function App() {  

  const pokemons = useSelector((state) => 
    state.data.pokemons,shallowEqual  
);
  
   const loading = useSelector((state) => 
     state.ui.loading);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())    
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col offset={12} >
        <Spin spinning size="large" />
      </Col> : <PokemonList pokemons={pokemons} />}
      
    </div>
  );
}



export default App;
