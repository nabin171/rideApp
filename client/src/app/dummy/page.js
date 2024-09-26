import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'

const dummy = () => {
  return (
    <Button className="border-2 border-black  bg-white ">
      <div className="bg-white text-black rounded-md p-2  ">
        {" "}
        <Link href="#">Learn More</Link>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent text-blue-200 text-base   "
          endContent={icons.chevron}
          radius="sm"
          variant="light"
        >
          Our Services
        </Button>

        <Button
          as={Link}
          className=" bg-clip-text text-base text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
          href="/login"
          variant="flat"
        >
          Rider
        </Button>
      </div>
    </Button>
    
  );
}

export default dummy


           /* <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here...">*/
