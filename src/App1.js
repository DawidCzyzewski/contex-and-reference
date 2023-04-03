import { useEffect, useState } from "react";

// const App1 = () => {
//   const [firstValue, setFirstValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(0);
//   const [sum, setSum] = useState(firstValue + secondValue);

//   return (
//     <div>
//       <p>Sum is: {sum}</p>
//       <button type="button" onClick={() => setSum(firstValue + secondValue)}>
//         Calculate Sum
//       </button>

//       <button type="button" onClick={() => setFirstValue(firstValue + 1)}>
//         Add 1 to firstValue. Now is {firstValue}
//       </button>

//       <button type="button" onClick={() => setSecondValue((prev) => prev + 1)}>
//         Add 1 to secondValue. Now is {secondValue}
//       </button>
//     </div>
//   );
// };

const App1 = () => {
  // const [firstValue, setFirstValue] = useState(getDataFromOtherFunction());

  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(2);
  const [sum, setSum] = useState(firstValue + secondValue);

  let sumOf;

  // Now it work like componentDidUpdate
  // useEffect(() => {
  //   setSum(firstValue + secondValue);
  // }, [firstValue, secondValue]);

  // In useEffect I can use also return, it will work like didComponentUnmount
  useEffect(() => {
    // sumOf = firstValue + secondValue

    setSum(firstValue + secondValue);
    return console.log("Unmounted! So it works like componentWillUnmount");
  }, [firstValue, secondValue]);

  // So shortly:

  // // Like componentDidMount:
  // useEffect(() => {
  //   setSum(firstValue + secondValue);
  // }, []);

  // // Like componentDidUpdate:
  // useEffect(() => {
  //   setSum(firstValue + secondValue);
  // }, [firstValue, secondValue]);

  // // OR

  // useEffect(() => {
  //   setSum(firstValue + secondValue);
  // });

  // // Like componentDidUnmount:
  // useEffect(() => {
  //   setSum(firstValue + secondValue);
  //   return console.log("Unmounted! So it works like componentDidUnmount");
  // }, [firstValue, secondValue]);

  return (
    <div>
      <p>Sum is: {sum}</p>
      <button
        type="button"
        onClick={() => {
          console.log(
            "with empty array, it will colidate with useEffect setSum!. With array with whole variables, it will work better"
          );
          setSum(10);
        }}
      >
        set sum on 10.
      </button>

      <button type="button" onClick={() => setFirstValue(firstValue + 1)}>
        Add 1 to firstValue. Now is {firstValue}
      </button>

      <button type="button" onClick={() => setSecondValue((prev) => prev + 1)}>
        Add 1 to secondValue. Now is {secondValue}
      </button>
    </div>
  );
};

export default App1;
