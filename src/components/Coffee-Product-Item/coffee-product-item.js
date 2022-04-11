import './coffee-product-item.css';
import { IoTrashSharp } from "react-icons/io5";

const CoffeeProductItem = ({name,onDelete}) =>{
    return(
        <div className='card'>
            <div className='card_part'>
                <img src={require('./coffee.png')} alt="coffee" className='card_img'/>
                <div className='description'>
                    <div className='desc_1'>AROMISTICO Coffee 1 kg</div>
                    <div className='desc_2'>{name}</div>
                    <div className='desc_3'>6.99$</div>
                   <button type="button" onClick={onDelete}>
                       <i><IoTrashSharp/></i>
                   </button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeProductItem;