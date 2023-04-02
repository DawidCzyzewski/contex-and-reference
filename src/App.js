import { useEffect, useState } from "react";

const App = () => {
  // Nasze założenie jest takie, że chcemy mieć wartość i button, który będzie zwiększał tę wartość o jeden.
  //wartość
  //button wartość + 1
  // // const [value, setValue] = useState(initialState);
  // const [value, setValue] = useState(0);
  // const [second, setSecond] = useState(5);
  // // Function used in third button as reference
  // const handleChange = () => {
  //   setValue((prevValue) => prevValue + 3);
  // };
  // <div>
  //   {value} , {second}
  //   <button
  //     type="button"
  //     onClick={() => {
  //       setValue(value + 1);
  //     }}
  //   >
  //     Increase by 1
  //   </button>
  //   <button
  //     type="button"
  //     onClick={() => {
  //       setValue((prevValue) => prevValue + 2);
  //     }}
  //   >
  //     Increase other way, by 2
  //   </button>
  //   <button type="button" onClick={handleChange}>
  //     Increase other way, by 3
  //   </button>
  //   <button
  //     type="button"
  //     onClick={() => {
  //       setValue(1);
  //     }}
  //   >
  //     Set first as 1
  //   </button>
  //   <button
  //     type="button"
  //     onClick={() => {
  //       setSecond(second + 1);
  //     }}
  //   >
  //     Increase second by 1
  //   </button>
  // </div>
  // ONE OF POSSIBLE WAYS BUT I SHOULDN'T DO LIKE THAT:
  // state not always is start value, so lets create something else
  // const [userValue, setUserValue] = useState({
  //   username: "Dawid",
  //   todos: [{ text: "Clean up!" }],
  //   isCleaned: false,
  // });
  // return (
  //   <div>
  //     {userValue.username} should do: {userValue.todos.toString()}. And is it
  //     done? {userValue.isCleaned}
  //   </div>
  // );
  // // It's better to make smaller hooks for each element:
  // const [username, setUsername] = useState({
  //   firstName: "Dawid",
  //   secondName: "Czyżewski",
  // });
  // const [todos, setTodos] = useState([{ text: "H" }]);
  // const [isActive, setIsActive] = useState(true);
  // // if I need to use if, I must do if before setFunction, inside it won't work
  // const handleChange = (value) => {
  //   if (isActive) {
  //     setUsername({
  //       ...username,
  //       firstName: value,
  //     });
  //   }
  // };
  // // I also can't use useState in if, this below won't work!
  // // if (isActive) {
  // //   const [donut, setDonut] = useState("awesome!");
  // // }
  //   return (
  //     <div>
  //       {username.firstName} {username.secondName} {todos.toString()} {isActive}
  //       <button onClick={() => handleChange("Some new first name")}>some</button>
  //       {/* If I need to use hook in other module, I do it same like in classes */}
  //       {/* <UsersNames names={username} /> */}
  //     </div>
  //   );

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  // Sth like ComponentDidUpdate. When I don't give anything after ()=>{}, it will render always anything will change.
  // useEffect(() => {
  //   console.log(
  //     `Look in your browser card. You clicked ${value} times! It's use like ComponentDidUpdate`
  //   );
  //   document.title = `Look in your browser card. You clicked ${value} times!`;
  // });

  // Sth like ComponentDidMount. When I give empty array after ()=>{}, it will render only once, like ComponentDidMount:
  // useEffect(() => {
  //   console.log(
  //     `Look in your browser card. You clicked ${value} times! It's use like ComponentDidUpdate`
  //   );
  //   document.title = `Look in your browser card. You clicked ${value} times!`;
  // }, []);

  // When I give sth in array after ()=>{}, it will render only when this will change. Now in card will update only when I will click first button. Nothing will happens when I will click second.
  // useEffect(() => {
  //   console.log(
  //     `Look in your browser card. You clicked first button ${value} times! It's use like ComponentDidUpdate`
  //   );
  //   document.title = `Look in your browser card. You clicked first button ${value} times!`;
  // }, [value]);

  // If I use more things in function after function, it is better to listen in array all of them
  // useEffect(() => {
  //   console.log(
  //     `Look in your browser card. You clicked first button ${value} times and second button ${value1} times! It's use like ComponentDidUpdate`
  //   );
  //   document.title = `Look in your browser card. You clicked first button ${value} times!`;
  // }, [value, value1]);

  return (
    <></>
    // <div>
    //   <p>
    //     You clicked {value} times and second button {value1} times
    //   </p>
    //   <button type="button" onClick={() => setValue(value + 1)}>
    //     Click!
    //   </button>
    //   <button type="button" onClick={() => setValue1(value1 + 1)}>
    //     Click!
    //   </button>
    // </div>
  );
};

export default App;
