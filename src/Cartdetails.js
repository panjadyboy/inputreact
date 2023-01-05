import React, { useState } from 'react';

function Cartdetails({cart}) {


    return (
        <div>
            {
                cart.map((cartItem , cartIndex) => {
return (
    <div>
{
    <div >
    <img src={cartItem.image} width={45} style={{borderRadius:10 , width:300 , height:300 , marginBottom:50 , marginTop:40}}/>
    <span style={{fontSize:20 , fontWeight:500 , color:'red' ,padding:50 , marginBottom:50}}> model :{cartItem.name}</span>
    <span style={{fontSize:20 , fontWeight:500 , color:'red' ,padding:50 , marginBottom:50}}>price : {cartItem.price}</span>
    <div style={{width:'100%' , height:3 , backgroundColor:'black' , margin:10}}></div>
    </div>
}
    </div>
                )
                })
            }
            <p style={{fontSize:40 , fontWeight:500 , color:'black'}}> Total Amount :
                {
                    cart.map(item => item.price).reduce((total , value) => 
                    total+value , 0)
                } rupees
            </p>

            <button style={{width:150 , height:40 , borderRadius:30 ,color:'black' , margin:40}}>Proceed to pay</button>
        </div>
    );
}

export default Cartdetails;