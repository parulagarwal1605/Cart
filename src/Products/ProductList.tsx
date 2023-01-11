import React from 'react'
import { useSelector } from 'react-redux'
import { addToCart } from '../Cart/cart.slice';
import { getProductsSelector , removeProduct, Product} from './product.slice'
import { useAppDispatch } from '../store.customHook';



const ProductList: React.FC=()=>{
    
    const  products = useSelector(getProductsSelector)
    const dispatch = useAppDispatch()
    const removeFromStore =(id:string)=>{
        dispatch(removeProduct(id))
    }
    const addToCardHandler =(product: Product)=>  dispatch(addToCart(product))

    return(
        <div className='GameList'>
          <h2>Game List</h2>
          {products.map(product=><div key={product.id}>
            <span>{`${product.title} : ${product.price}`}</span>
            <button onClick={()=>{addToCardHandler(product)}}> Add to Cart</button>
            <button onClick={()=>{removeFromStore(product.id)}}>Remove added item</button>
          </div>)}

           
</div>
    );
}
export default ProductList;
