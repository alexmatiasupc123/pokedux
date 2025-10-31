import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        //dispatch loader
        //fetch
        //dispatch loader    
        dispatch(setLoading(true));   
        const pokemonRes = await getPokemon();  
        const pokemonsDetailed = await Promise.all(pokemonRes.map(pokemon => getPokemonDetails(pokemon)));                   
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
        state.pokemons = action.payload;
        },
    setFavorite: (state, action) => {
        const pokemonIndex = state.pokemons.findIndex(
            (pokemon) => pokemon.id === action.payload.pokemonId
            );

        if (pokemonIndex >= 0) {
            state.pokemons[pokemonIndex].favorite = 
                !state.pokemons[pokemonIndex].favorite;
            }
        },

    }
});

export const { setFavorite, setPokemons } = dataSlice.actions;
export default dataSlice.reducer;