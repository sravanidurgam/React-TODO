import React,{useState} from 'react';

function Inputfiled(){
    const[name,setName]=useState();
    const[quantity,setquantity]=useState(0);
    const[comment,setcommnet]=useState();
    const[payment,setpayment]=useState();
    const[shipping,setshipping]=useState();
    function updateName(event){
        setName(event.target.value);
    }
    function updateQuantity(event){
        setquantity(event.target.value);
    }
    function updatecomment(event){
        setcommnet(event.target.value);
    }
    function updatepayment(event){
        setpayment(event.target.value);
    }
    function updateShipping(event){
        setshipping(event.target.value);
    }

    return(
        <div>
              <input value={name} onChange={updateName}  />
              <p>Name:{name}</p>
              <input value={quantity} onChange={updateQuantity} type="number"/>
              <p>Quantity:{quantity}</p>
              <textarea  value={comment} onChange={updatecomment} placeholder='enter your comment here'/>
              <p>comment:{comment}</p>
              <select value={payment} onChange={updatepayment}>
                <option value=" ">select option</option>
                <option value="visa">Visa</option>
                <option value="mastecard">MasterCard</option>
                <option value="gifts">Gifts</option>


              </select>
              <p>Payment:{payment}</p>
              <label>
                <input type="radio" value="pickup"
                          checked={shipping === "pickup"}
                          onChange={updateShipping}
                ></input>
                PickUp
              </label>
              <label>
                <input type="radio" value="delivary"
                      checked={shipping == "delivary"}
                       onChange={updateShipping}
                      />
                Delivery
              </label>
              <p>Shipping:{shipping}</p>

              

        </div>
             
        
    );
}
export default Inputfiled;