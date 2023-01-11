import React, {useState} from 'react'
import { useAppDispatch } from '../store.customHook'
import { addProduct, Product, addProductAsync, getErrorMessage } from './product.slice';
import { useSelector } from 'react-redux';


const ProductForm: React.FC= () => {

const dispatch = useAppDispatch()  
const errorMessage = useSelector(getErrorMessage)   


const [product, setProduct] = useState<Product>({
    id: '',
    title: '',
    price: 0
})

const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>)=>setProduct(prev =>{
    (prev as any)[name] = value;
    const newValue ={...prev}
    return  newValue
})

const handleSubmit =(e: React.FormEvent)=>{
    e.preventDefault()
    dispatch(addProductAsync(product))
    dispatch(addProduct(product))

    console.log({product})
}
    const{id, price, title }= product;
        
        return (<>
        <div className='AddGame'>
        <h2>Add Game ro the Store</h2>
        {errorMessage && <span>error: {errorMessage}</span>}
        <form onSubmit={handleSubmit}>
            <div><label> Game Name</label>
            <input style = {{border: errorMessage ? '1px solid black':'1px solid black'}}type= "text" placeholder='Game title' name="title" value={title} onChange={handleChange}/>
            </div>
            <div><label> Price</label>
            <input style = {{border: errorMessage ? '1px solid black':'1px solid black'}}type= "number" placeholder='Price' name="price" value={price} onChange={handleChange}/>
            </div>
                        
            
            <button style={{backgroundColor: errorMessage?'red':'#f2f5f9'}}type="submit">Add Price</button>
        </form>
        </div>
        </>

        );
}

export default ProductForm