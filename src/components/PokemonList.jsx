import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    
    return (
        <div className="PokemonList">
            {pokemons && pokemons.map((pokemon) => {
                return (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        types={pokemon.types}
                        id={pokemon.id}
                        favorite={pokemon.favorite}
                    />
                );
            })}
        </div>
    );
};


export default PokemonList;

