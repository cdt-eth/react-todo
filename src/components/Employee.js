import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

// const Employee = (props) => {
//   const { firstname: first, lastname: last, job: myJob } = props;
//   return (
//     <div>
//       <h1>
//         {" "}
//         Name: {first} {last}{" "}
//       </h1>
//       <h2> Job: {myJob} </h2>
//     </div>
//   );
// };

export default function Employee() {
  const [count, setCount] = useState(0);

  // no array
  useEffect(() => {
    console.log("useEffect ran");
  });

  //   // componentDidMount
  //   useEffect(() => {
  //   console.log("component Did Mount");
  //   }, []);

  //   // componentDidUpdate
  //   useEffect(() => {
  //     console.log("useEffect ran");
  //   }, [count]);

  //   // componentWillUnmount
  //   useEffect(() => {
  //     console.log("useEffect ran");
  //     return () => {
  //       console.log("component Did Unmount");
  //     };
  //   }, []);

  //   useEffect(() => {
  //     console.log("The component mounted");
  //     return () => {
  //       console.log("The component did unmount");
  //     };
  //   });

  return (
    <div>
      <h3>The count is: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// const Employee = (props) => {
//   const { firstname: first, lastname: last, age, job } = props;

//   return (
//     <div>
//       <h1>
//         {" "}
//         Name: {first} {last}
//       </h1>
//       <h2> Age: {age} </h2>
//       <h2> Job: {job} </h2>
//     </div>
//   );
// };

// export default Employee;
