"use client";//use this for client components
import { useState } from "react";

const Header = () => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <h2>my awesome header</h2>
            <p>count : {count}</p>
            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>increase</button>

        </div>
    );
};

export default Header;