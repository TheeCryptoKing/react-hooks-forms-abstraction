// Intial Function 
// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;

// We can imagine that adding more input fields to this form is going to get repetitive pretty fast. For every new input field, we'd need to add:
// a new state variable by calling useState() to hold the value of that input
// a new handleChange function to update that piece of state
// As a first refactor, let's use useState just once, and make an object representing all of our input fields. We will also need to update our onChange handlers and the variable names in our JSX 

// import React, { useState } from "react";


// function Form() {
//   const [formData, setFormData] = useState({
//     firstName: "John",
//     lastName: "Henry",
//   });
//   // Step 1:
//   //Since our initial state is an object, in order to update state in our onChange handlers, we have to copy all the key/value pairs from the current version of that object into our new state — that's what the spread operator here is doing.


//   function handleFirstNameChange(event) {
//     setFormData({
//       ...formData,
//       firstName: event.target.value,
//     });
//   }

//   function handleLastNameChange(event) {
//     setFormData({
//       // formData is an object, so we need to copy all the key/value pairs
//       ...formData,
//        // we want to overwrite the lastName key with a new value
//       lastName: event.target.value,
//     });
//   }
//   // Step 2
//   // As long as the name attributes of our <input> fields match the keys in our state, we can write a generic handleChange function like so
//   function handleChange(event) {
//     // name is the KEY in the formData object we're trying to update
//     const name = event.target.name;
//     const value = event.target.value;
  
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }
//   // Each input's name attribute will change which part of state is actually updated


//   // Since event is being passed in as the argument, we have access to some of the event.target attributes that may be present.
//   // If we give our inputs name attributes, we can access them as event.target.name
//   return (
//     <form>
//       <input
//         type="text"
//         name="firstName"
//         onChange={handleFirstNameChange}
//         value={formData.firstName}
//       />
//       <input
//         type="text"
//         name="lastName"
//         onChange={handleLastNameChange}
//         value={formData.lastName}
//       />
//     </form>
//   );
// }

// export default Form;

// Step 3 final function 
// //Step 3
// // Now, if we want to add a new input field to the form, we just need to add two things:
// // a new key/value pair in our formData state, and
// // a new <input> field where the name attribute matches our new key
// // We can take it one step further, and also handle checkbox inputs in our handleChange input. Since checkboxes have a checked attribute instead of the value attribute, we'd need to check what type our input is in order to get the correct value in state.

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Woods",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

