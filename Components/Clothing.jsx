import React, {useState, useEffect} from "react"
import { Outlet, Link } from "react-router-dom";

const Clothing = ()=>{
    const [item , setItem] = useState([]);

    useEffect(()=>{
        // async function getdata(){
            const fetchData = () =>{
                fetch('https://fakestoreapi.com/products').then(res=>res.json())
                .then((data=>{

                    setItem(data);
                }))
            }
            fetchData()
 
    },[])

    const handleHigh = () =>{
        
        
             const nw_price =  item.sort((a,b)=>a.price-b.price);
              setItem([...nw_price]);
              console.log(nw_price);
    }
    const handleLow =()=>{
        const old_price =  item.sort((a,b)=>b.price-a.price);
              setItem([...old_price]);
              console.log(old_price);
    }
    const filterItem = (categItem)=>{
      
        const updateItem = item.filter((curElem)=>{
            return curElem.category === categItem;
        });
        setItem([...updateItem, item]);
    }
    
    return (
       <>
        <div>
           <button onClick = {()=>handleHigh()}>Price Low to High</button>
           <button onClick = {()=>handleLow()}>Price High to Low</button>
          
       </div>
       <div>
           <button onClick = {()=>filterItem("men's clothing")}>Men's Clothing</button>
           <button onClick = {()=>filterItem("jewelery")}>Jewelery</button>
           <button onClick = {()=>filterItem("women's clothing")}>Women's Clothing</button>
           <button onClick = {()=>filterItem("electronics")}>Electronics</button>
       </div>

       {
           item.map((val)=>{
            console.log(val)

               return (
               
                  <div className ="box">
                  <img className = "prod_img"  src = {val.image}/>
                  <Link to="/product"><h4>{val.title}</h4></Link>
                   {/* <h4>{val.title}</h4> */}
                   <h4>{val.price}</h4>
                  </div>
               )
               
           })
       }
      
      
        </>
    )
   
}

export default Clothing