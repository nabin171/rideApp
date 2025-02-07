"use client"
import { setUserSelection } from '@/redux/reducerSlices/gameSlice'
import { icons } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

const GameCard = ({icon,item}) => {
    const dispatch = useDispatch()
    const handleUserSelection=()=>{
        dispatch(setUserSelection(item))
    }
  return (
    <div onClick={handleUserSelection} className='bg-gray-300 p-4 m-2 w-16'>{icon}-{item}</div>
  )
}

export default GameCard