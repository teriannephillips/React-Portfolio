import React, {useState } from "react";
import "../styles/Main.css";

function Contact() {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <>
    <h2>CONTACT</h2>
    <section className="contactMain">
        
<form className="contactForm" onSubmit={handleSubmit}>
      <div>
      
        <label className="label" htmlFor="name">Name:</label>
        <input
        className="entryField"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="label" htmlFor="email">Email:</label>
        <input
        className="entryField"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="label" htmlFor="message">Message:</label>
        <textarea
        className="entryField"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    
    </form>
    
    
    <div className = "contactInfo">
   
        <ul>
        <li>Phone/Text: 613-889-7740</li> 
        <li>E-mail: phillips.terianne@gmail.com</li>  
            </ul>
      
    </div>
    </section>
    </>
  );
}

export default Contact;
