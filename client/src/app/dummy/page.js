// import React from 'react'

// const page = () => {
//      const vehicles = {
//        economy: { price: 100, time: "15 min", icon: "🚗", color: "primary" },
//        standard: { price: 160, time: "12 min", icon: "🚙", color: "secondary" },
//        premium: { price: 200, time: "10 min", icon: "🚘", color: "success" },
//      };
//   return (
//     <div>
//         Time: ${time} for ${type of vehicles} and $ {price}
//     </div>
//   )
// }

// export default page

"use client"
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
const page=()=>{
  const [count,setCount]=useState(0)
  const increment=()=>{
    setCount(count+1);
  }
  return (
    <div>
      {count} <br />
      <br />
      <Button onClick={increment}>Click Me</Button>
      <Button onClick={increment}>Click Me</Button>
    </div>
  );
}
export default page;