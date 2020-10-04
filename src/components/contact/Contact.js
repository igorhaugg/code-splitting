import React, { useState } from 'react';

import Layout from '../../layouts';
import './Contact.css';

const ContactContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(email) {
      alert(`Sending email to ${email}!`);
    }
  }
  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <div className="contact__input-group">
          <label>Name</label>
          <input name="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="contact__input-group">
          <label>Email</label>
          <input type="email" name="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

const Contact = () => <Layout><ContactContent /></Layout>;

export default Contact;
