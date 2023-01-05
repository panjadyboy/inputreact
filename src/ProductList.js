import React from 'react';

function ProductList({product , addToCart}) {
    return (
        <div style={{display:'flex' ,flexWrap:'wrap',  backgroundColor:'lightgoldenrodyellow'}}>
            {
                product.map((productItem , productIndex) => {
                    return (
                        <div style={{width:'50%' }}>
                            <div style={{marginLeft:120}}>

                            
                                <img src={productItem.image} width="100%" style={{width:400 , height:400 , borderRadius:10 , marginTop:20}}/>
                                <p style={{fontSize:40 , fontWeight:600 , color:'black' , marginLeft:30}}>{productItem.name}</p>
                                 <p style={{fontSize:30 , fontWeight:500 ,marginLeft:30 , color:'black'}}>Price : Rs {productItem.price}</p>
                                 <button onClick={() => addToCart(productItem)} style={{width:130 , height:30 , borderRadius:10 , marginLeft:30, backgroundColor:'red' , color:'black', fontSize:15 , fontWeight:'400' , marginBottom:70}}>Add To Cart</button>
                                
                                </div>
                            
                            
                            </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;