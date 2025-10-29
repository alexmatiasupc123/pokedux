import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    return (
        <div className="PokemonList">
            {pokemons && pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon} />;
            })}
        </div>
    );
};


export default PokemonList;

