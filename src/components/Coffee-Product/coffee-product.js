import CoffeeProductItem  from "../Coffee-Product-Item/coffee-product-item";
import './coffee-product.css';
import {Fragment} from "react";

const CoffeeProduct = ({data,onDelete}) =>{

    const products = data.map(item =>{
        const {id,...itemProps} = item;
        return(
            <CoffeeProductItem key = {id}
                               {...itemProps}
                onDelete = {() =>onDelete(id)}

            />
        )
    });

    return(
        <Fragment>

            <div className='cards_first'>
                {products}
            </div>

        </Fragment>
    )
}

export default CoffeeProduct;