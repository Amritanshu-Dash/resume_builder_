import React from 'react';
import React, { useState } from 'react';
import Profile from './profile';
import axios from 'axios';

const Main = () => {
  const [state, setState] = useState({
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    college: '',
    // Add other education details and additional properties
  });

  const nextStep = () => {
    setState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  const prevStep = () => {
    setState((prevState) => ({
      ...prevState,
      step: prevState.step - 1,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const data = {
      firstName: state.firstname,
      lastName: state.lastname,
      // Add other data fields
    };

    axios.post('http://localhost:5000/api/submit', data)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  const { step } = state;

  // Render different components based on the current step
  switch (step) {
    case 1:
      return (
        <div>
          <h1>Main</h1>
          <Profile values={state} handleChange={handleChange} />
          {/* Render other components based on step */}
          <button onClick={nextStep}>Next</button>
        </div>
      );
    // Add cases for other steps and corresponding components
    case 2:
      return (
        <div>
          <h1>Main</h1>
          {/* Render other components based on step */}
          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    default:
      return null;
  }
};

export default Main;
