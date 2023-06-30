import React from "react";
import {Header} from "../../components/header";
import { useState } from "react";
import "./styles.css"
const Home = () => {

    const [number,setNumber]=useState(null)
  return (
    <div className="home-container">
      <Header />
     {number&& <span>{number}</span>}
      <button onClick={()=>setNumber(number ? number+1 : 1)}>
        Counter
      </button>
      <footer>
        <p>Footer</p>

      </footer>
    </div>
  );
};

export default Home
