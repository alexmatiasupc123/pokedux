import  { Card } from  'antd';
import Meta from 'antd/es/card/Meta';
import './PokemonList.css';
import Starbutton from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';


const PokemonCard = ({name, image, types, id, favorite}) => {
  const dispatch = useDispatch(); 
  const typesString = types.map(typeInfo => typeInfo.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  }

  return (
    <Card        
        title={name}
        cover={ <img alt={name} src={image}   /> }      
        extra={<Starbutton isFavorite={favorite} onClick={ handleOnFavorite } />}
    >

    <Meta description={typesString} />
    </Card>
  );
}   

export default PokemonCard;
