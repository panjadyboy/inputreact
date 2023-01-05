import React,{useState, useEffect} from 'react'
import ProductList from './ProductList';
import Cartdetails from './Cartdetails';


const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {


  const [products, setProducts]=useState([
    {
      name :' Asparagus Salad ',
      price : 300,
      image:'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg'
  },
  {
    
      name :'Chocolate Souffle',
      price : 200,
      image:'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg'
  },
  {
    
    name :'Chicken Curry',
    price : 300,
    image:'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg'
},
{
    
  name :'Pancakes ',
  price : 200,
  image:'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg'
},
{
    
  name :'Pancakes ',
  price : 500,
  image:'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg'
},
{
    
  name :'Delicious Orange Mousse',
  price : 400,
  image:'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg'
},
{
    
  name :'Salad',
  price : 400,
  image:'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg'
},
  ],getDatafromLS());
    

  
  const [name, setName]=useState('');
  const [price, setPrice]=useState('');
  const [image, setImage]=useState('');

  
  const handleAddProductSubmit=(e)=>{
    e.preventDefault();
    
    let product={
      name,
      price,
      image
    }
    setProducts([...products,product]);
    setName('');
    setPrice('');
    setImage('');
  }

console.log(products)
  


  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(products));
  },[products])

  const [cart , setCart] = useState([]);
  const [showCart , setShowCart] = useState(false);

const addToCart =  (data) => {
console.log(data)
setCart([...cart ,{...data , quantity:1}])
}

const handleShow = (value) => {
setShowCart(value)
}

  return (
    <div className='wrapper'>
    
      <div style={{width:'100%' , height:50 ,backgroundColor:'lightsalmon' ,paddingBottom:30}}>
        
      <div style={{display:'flex' , justifyContent:"space-between" , backgroundColor:'black' , padding:10}}>
              <div onClick={() => handleShow(false)} style={{fontSize:30 , fontWeight:500 ,color:'white'}}>Shopping Cart App</div>
              <div onClick={() => handleShow(true)} style={{fontSize:30 , fontWeight:500 ,color:'white'}}>Cart
        
              </div>
        </div>
      <div className='main'>

        <div style={{backgroundColor:'black'}} >
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddProductSubmit}>
            <label style={{fontSize:20  , margin:30 , fontWeight:'400' , color:'white'}}>Name :</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name} style={{width:300 , height:30 ,borderRadius:10, borderBlockColor:'black' , margin:10 , marginLeft:43}}></input>
            <br></br>
            <label style={{fontSize:20 , color:'white' , margin:30 , fontWeight:'400'}}>Price :</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setPrice(e.target.value)} value={price} style={{width:300 , height:30 ,borderRadius:10 , borderBlockColor:'black' , margin:10 , marginLeft:50}}></input>
            <br></br>
          
          <label style={{fontSize:20 , color:'white', margin:30 , fontWeight:'400'}}>Image url :</label>
            
                
          
            <input  type="url"  value={image} onChange={(e)=>setImage(e.target.value)} style={{width:300 ,borderRadius:10, height:30 , borderBlockColor:'black' , margin:10}} />
          <br></br>
          <div style={{display:'flex' , justifyContent:'center' , paddingBottom:30}}>
            <button type="submit" className='btn btn-success btn-md' style={{width:70 , height:40 , borderRadius:5 , backgroundColor:"red" , color:'black' , }}>
              ADD
            </button>
            </div>
          </form>
        
        </div>

        {showCart ? <Cartdetails cart={cart}></Cartdetails> : <ProductList product={products} addToCart={addToCart}></ProductList>}

      </div>
    </div>
    </div>
  )
}

export default App