import { useState, useEffect } from 'react'
import './App.css'
import SignupForm from './components/form';

function App() {

  return (
    <>
      <SignupForm />
    </>
  )
}

export default App

// function App() {
//   const [usename, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [phoneType, setPhoneType] = useState("Home");
//   const [staff, setStaff] = useState("Instructor")
//   const [bio, setBio] = useState("");
//   const [notification, setNotification] = useState(false)
//   const [errors, setErrors] = useState([]);

//   const handleFormSubmit = async(e) => {
//     // prevent default button behavior
//     e.preventDefault();
//     // prevent propagation
//     e.stopPropagation();

//     // create a new errors array to force render on state change
//     const newErrors = [];
//     if (usename.length < 6) {
//       newErrors.push("username must be longer than 6 characters");
//     }
//     if (password.length < 5) {
//       newErrors.push("password must be longer than 6 characters")
//     }

//     // email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim()) {
//       newErrors.email = 'Email is required.';
//     } else if (!emailRegex.test(email)) {
//       newErrors.email = 'Email is not valid.';
//     }

//     // phone validation
//     const phoneRegex = /^[0-9]{10}$/;
//     if (phone && !phoneRegex.test(phone)) {
//       newErrors.phone = 'Phone number is not valid. It must be 10 digits.';
//     }

//     // Phone type validation
//     if (phone && !phoneType) {
//       newErrors.phoneType = 'Phone type must be selected if a phone number is provided.';
//     }

//     // Bio validation
//     if (bio.length > 280) {
//       newErrors.bio = 'Bio must be 280 characters or less.';
//     }

//     if (newErrors.length > 0) {
//       setErrors(newErrors);
//     } else {
//         const form = {
//           usename,
//           password,
//         };
//         const option = {
//           method: "POST",
//           header: { "Content-Type": "application/json"},
//           body: JSON.stringify(form)
//         };

//         console.log("form submitted")
//     }
//   }

//   return (
//     <form onSubmit={(e) => handleFormSubmit(e)}>
//       {errors.length ? errors.map((err, idx) => (
//         <div key={`${err}-${idx}`}>
//           <p style={{color: 'red'}} > {err} </p>
//         </div>
//       )):
//         null
//       }
//       <div className = "input-label-div">
//         <label htmlFor='usename'>Usename: </label>
//         <input
//           id='usename'
//           type='text'
//           value={usename}
//           onChange={e => setUsername(e.target.value)}
//         />
//       </div>
//       <div className = "input-label-div">
//         <label htmlFor='password'>Password:</label>
//         <input
//           id='password'
//           type='password'
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//       </div>
//       <div className = "input-label-div">
//         <label htmlFor='phoneNumber'>Phone Number: </label>
//         <input
//           id='phoneNumber'
//           type='tel'
//           value={phoneNumber}
//           onChange={e => setPhoneNumber(e.target.value)}
//         />
//       </div>
//       <div className = "input-label-div">
//         <label htmlFor='phoneType'>Phone Type: </label>
//         <select
//           id='phoneType'
//           // type='tel'
//           value={phoneType}
//           onChange={e => setPhoneType(e.target.value)}
//         >
//           <option value="Home">Home</option>
//           <option value="Work">Work</option>
//           <option value="Mobile">Mobile</option>
//         </select>
//       </div>
//       <div className = "input-label-div">
//         <label htmlFor='staff'>
//           <input
//             id='staff'
//             type='radio'
//             value="Instructor"
//             checked={staff === "Instructor"}
//             onChange={e => setStaff(e.target.value)}
//           />
//         Instructor 
//         </label>
//         <label htmlFor='staff'>
//           <input
//             id='staff'
//             type='radio'
//             value="Student"
//             checked={staff === "Student"}
//             onChange={e => setStaff(e.target.value)}
//           />
//         Student
//         </label>
//       </div>

//       <div className = "input-label-div">
//         <label htmlFor='bio'>Bio: </label>
//         <input
//           id='bio'
//           type='text'
//           value={bio}
//           onChange={e => setBio(e.target.value)}
//         />
//       </div>
//       <div className = "input-label-div">
//         <label htmlFor='notification' >
//           <input
//             id='notification'
//             type='checkbox'
//             checked={notification}
//             onChange={e => setNotification(e.target.checked)}
//           />
//           Sign up for email notification: 
//         </label>
        
//       </div>

//       <button onClickCapture={(e) => handleFormSubmit(e)}>Submit</button>
//     </form>
//   )
// }

// export default App