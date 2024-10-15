import { useState, useEffect } from 'react'


function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("---");
  const [staff, setStaff] = useState("Instructor")
  const [bio, setBio] = useState("");
  const [notification, setNotification] = useState(false)
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = async(e) => {
    // prevent default button behavior
    e.preventDefault();
    // prevent propagation
    e.stopPropagation();

    // create a new errors array to force render on state change
    const newErrors = [];
    if (username.length < 6) {
      newErrors.push("username must be longer than 6 characters");
    }
    // if (password.length < 5) {
    //   newErrors.push("password must be longer than 6 characters")
    // }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.push('Email is required.');
    } else if (!emailRegex.test(email)) {
      newErrors.push('Email is not valid.');
    }

    // phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      newErrors.push('Phone number is not valid. It must be 10 digits.');
    }

    // Phone type validation
    if (phoneNumber && !phoneType) {
      newErrors.push('Phone type must be selected if a phone number is provided.');
    }

    // Bio validation
    if (bio.length > 280) {
      newErrors.push('Bio must be 280 characters or less.');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
        const form = {
          username,
          email,
          phoneNumber,
          phoneType,
          staff,
          bio,
          notification,
        };
        const option = {
          method: "POST",
          header: { "Content-Type": "application/json"},
          body: JSON.stringify(form)
        };

        console.log("form submitted")
    }
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      {errors.length ? errors.map((err, idx) => (
        <div key={`${err}-${idx}`}>
          <p style={{color: 'red'}} > {err} </p>
        </div>
      )):
        null
      }
      <div className = "input-label-div">
        <label htmlFor='username'>Username: </label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className = "input-label-div">
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className = "input-label-div">
        <label htmlFor='phoneNumber'>Phone Number: </label>
        <input
          id='phoneNumber'
          type='tel'
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className = "input-label-div">
        <label htmlFor='phoneType'>Phone Type: </label>
        <select
          id='phoneType'
          // type='tel'
          value={phoneType}
          onChange={e => setPhoneType(e.target.value)}
        >
          <option value="---">---</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>
      <div className = "input-label-div">
        <label htmlFor='staff'>
          <input
            id='staff'
            type='radio'
            value="Instructor"
            checked={staff === "Instructor"}
            onChange={e => setStaff(e.target.value)}
          />
        Instructor 
        </label>
        <label htmlFor='staff'>
          <input
            id='staff'
            type='radio'
            value="Student"
            checked={staff === "Student"}
            onChange={e => setStaff(e.target.value)}
          />
        Student
        </label>
      </div>

      <div className = "input-label-div">
        <label htmlFor='bio'>Bio: </label>
        <input
          id='bio'
          type='text'
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
      </div>
      <div className = "input-label-div">
        <label htmlFor='notification' >
          <input
            id='notification'
            type='checkbox'
            checked={notification}
            onChange={e => setNotification(e.target.checked)}
          />
          Sign up for email notification: 
        </label>
        
      </div>

      <button onClickCapture={(e) => handleFormSubmit(e)}>Submit</button>
    </form>
  )
}

export default SignupForm;