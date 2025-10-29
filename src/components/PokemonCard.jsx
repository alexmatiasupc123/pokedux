import  { Card } from  'antd';
import Meta from 'antd/es/card/Meta';
import './PokemonList.css';
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = () => {
  return (
    <Card 
       
        title="Ditto"
        cover={ <img alt="Ditto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
        />         
      }
      extra={<StarOutlined />}
    >

    <Meta description="fire,magic" />
    </Card>
  );
}   

export default PokemonCard;
