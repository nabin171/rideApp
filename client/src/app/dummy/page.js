'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const page = () => {
  let [number,setNumber]=useState('');

  return (
    <div>
      {number}
      <br></br>
      <Button onClick={() => setNumber(number + "0")}>0</Button>
      <Button onClick={() => setNumber(number + "1")}>1</Button>
      <Button onClick={() => setNumber(number + "2")}>2</Button>
      <Button onClick={() => setNumber(number + "3")}>3</Button>
      <Button onClick={() => setNumber(number + "4")}>4</Button>
      <Button onClick={() => setNumber(number + "5")}>5</Button>
      <Button onClick={() => setNumber(number + "6")}>6</Button>
      <Button onClick={() => setNumber(number + "7")}>7</Button>
      <Button onClick={() => setNumber(number + "+")}>+</Button>
      <Button onClick={() => setNumber(number + "-")}>-</Button>
      <Button onClick={() => setNumber(eval(number))}>=</Button>
    </div>
  );
}

export default page