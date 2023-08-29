import React, { useState, useEffect} from "react";

function Homepage () {

    const [getPhones , setPhones] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/phone_models")
        .then((response) => response.json())
        .then((data) => setPhones(data))
    },[])

function handleClick(phone){

}

    return ( 
        <div className="home">
            {getPhones.map((phone) =>(
                <div  className='phones' key={phone.id}>
                    <img src={phone.img} alt ={phone.name}/>
                    <h3>Brand: {phone.brand}</h3>
                    <h4>Name: {phone.name}</h4>
                    <p>Price: {phone.price}USD</p>
                    <button onClick={() => handleClick(phone)}>View More Details</button>
                </div>
            ))}

        </div>
     );
}
 
export default Homepage;