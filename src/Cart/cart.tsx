import React from 'react'
import { getCartProducts, getTotalPrice, removeFromCart } from './cart.slice';
import { useAppSelector, useAppDispatch } from '../store.customHook';
import './Cart.css'
const Cart: React.FC= () => {
    const cartProducts = useAppSelector(getCartProducts)
    const totalPrice = useAppSelector(getTotalPrice)
    const dispatch = useAppDispatch()
    const handleRemoveFromCart =(productId: string) => dispatch(removeFromCart)
        return (<>
        <div className='Cart'>
        <h2>Cart</h2>
        <div className='AddedGame'>
        <h5>Total Price: {totalPrice}</h5>
        {cartProducts.map(product => (
            <li key={product.id}>
            <span>{product.title}</span>
            <span>{product.amount}</span>
       </li>
        ))}
        </div>
        </div>
        </>);
}

export default Cart