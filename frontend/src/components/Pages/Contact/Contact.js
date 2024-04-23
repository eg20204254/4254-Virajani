import React, { useState } from 'react';
import classes from './contact.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [msg, setMsg] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform form validation here, e.g., checking if fields are not empty.
      if (!name || !email || !number || !msg) {
        setError('Please fill in all fields.');
        return;
      }

      // Send data to the server using fetch or an API call.
      // Replace the API endpoint with your server's endpoint.
      const response = await fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, number, msg }),
      });

      if (response.ok) {
        setMessage('Message sent successfully!');
        // Clear the form after successful submission.
        setName('');
        setEmail('');
        setNumber('');
        setMsg('');
      } else {
        setError('Error sending the message.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred.');
    }
  };

  return (
    <div className={classes.contact}>
      <h1 className={classes.title}>GET IN TOUCH</h1>

      {message && <div className={classes.success-message}>{message}</div>}
      {error && <div className={classes.error-message}>{error}</div>}

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.box}
          required
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.box}
          required
          placeholder="Enter your email"
        />
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          min="0"
          className={classes.box}
          required
          placeholder="Enter your number"
        />
        <textarea
          name="msg"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className={classes.box}
          required
          placeholder="Enter your message"
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="Send message" className={classes.btn} />
      </form>
    </div>
  );
};

export default ContactForm;