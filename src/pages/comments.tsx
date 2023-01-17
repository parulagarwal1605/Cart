import {useState, useEffect} from "react";
import axios from "axios";


export function About() {
 const[myData, setMyData] = useState([])
 useEffect(()=>{
  axios
  .get("https://fakestoreapi.com/products?limit=8")
   .then((res)=> setMyData(res.data))

 },[]);

    return(
      <>
      <h1>Comments</h1>
      {myData.map((post)=>{
        const{id,title}=post;
        return<div className="card" key={id}>
          <h5>{title}</h5>

        </div>

      })}
      </>

    )}