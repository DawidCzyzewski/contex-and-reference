// import { Component, useEffect } from "react";
import { useState } from "react";
// import { useToggle } from "react-use";
import { useToggle } from "./hooks/useToggle";

// // CLASS COMPONENT:

// class App2 extends Component {
//   handleKeyDown = (e) => {
//     console.log("keydown event: ", e);
//   };

//   componentDidMount() {
//     initThirdPartyLibrary();
//     document.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.value !== this.props.value) {
//       // Do stuff when value prop changes
//     }

//     if (prevState.isLoggedIn !== this.state.isLoggedIn) {
//       // Do stuff when isLoggedIn state changes
//     }

//     if (prevProps.username !== this.props.username) {
//       // Fetch user when username prop changes
//       fetchUser(this.props.username);
//     }
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handleKeyDown);
//   }
// }

// //   SAME FUNC HOOKS COMPONENT:
// instead componentDidMount
// const App2 = () => {
//   // 1. Run effect only on mount to init some library
//   useEffect(() => {
//     initThirdPartyLibrary();
//   }, []);

//   // 2. Run effect only when username prop changes
// instead componentDidUpdate
//   useEffect(() => {
//     fetchUser(username);
//   }, [username]);

//   // 3. Run effect on value prop change
// instead componentDidUpdate
//   useEffect(() => {
//     // Do stuff when value prop changes
//   }, [value]);

//   // 4. Run effect on isLoggedIn state change
// instead componentDidUpdate
//   useEffect(() => {
//     // Do stuff when isLoggedIn state changes
//   }, [isLoggedIn]);

//   // 5. Run effect on mount and clean up on unmount
// instead componentWillUnmount
//   useEffect(() => {
//     const handleKeyDown = (e) => console.log("keydown event: ", e);
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);
// };

// export default App2;

// Making own hook

const App2 = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const openModal = () => setIsOpen(true);
  //   const closeModal = () => setIsOpen(false);

  const { isOpen, open, close } = useToggle(true);

  return (
    // <div>
    //   <button onClick={openModal}>OpenModal</button>
    //   {isOpen && <p>This is my modal!</p>}
    //   <button onClick={closeModal}>Close modal</button>
    // </div>

    // <div>
    //   {isOpen ? (
    //     <p>
    //       This is my Modal!
    //       <button onClick={closeModal}>Close modal</button>
    //     </p>
    //   ) : (
    //     <button onClick={openModal}>Open modal</button>
    //   )}
    // </div>

    // hooks from toggle
    <div>
      {isOpen ? (
        <p>
          This is my Modal!
          <button onClick={close}>Close modal</button>
        </p>
      ) : (
        <button onClick={open}>Open modal</button>
      )}
    </div>
  );
};
export default App2;
