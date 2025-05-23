// "use client";
// import { decrement, increment } from "@/redux/reducerSlices/counterSlice";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// const page = () => {
//   const dispatch = useDispatch();
//   const { value } = useSelector((state) => state.counter);

//   return (
//     <div>
//       <button
//         onClick={() => dispatch(increment())}
//         className="bg-red-50 m-3 p-2"
//       >
//         +
//       </button>
//       {value}
//       <button
//         onClick={() => dispatch(decrement())}
//         className="bg-red-50 m-3 p-2"
//       >
//         -
//       </button>
//     </div>
//   );
// };

// export default page;
// //in which case we should use redux?
// //what are the differences between usecontext and redux?

"use client";
import { increment } from "@/redux/reducerSlices/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      {value}
      <button
        onClick={() => dispatch(increment())}
        className="m-2 p-2 bg-red-200"
      >
        +
      </button>
    </div>
  );
};

export default page;
