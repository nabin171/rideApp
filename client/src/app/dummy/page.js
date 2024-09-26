import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
  import {Input} from "@nextui-org/react";


const dummy = () => {
    const sizes = ["sm", "md", "lg"];
 return(
 





 
    <div className="w-full flex flex-col gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input size={size} type="email" label="Email" />
          <Input size={size} type="email" label="Email" placeholder="Enter your email" />
        </div>
      ))}  
    </div>  
  );
}


export default dummy


           /* <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here...">*/
