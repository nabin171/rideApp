"use client"
import { decrement, increment } from "@/redux/reducerSlices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        className="bg-red-200 m-2 p-2 "
      >
        +
      </button>
      {value}
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-200 m-2 p-2 "
      >
        -
      </button>
    </div>
  );
};

export default page;
