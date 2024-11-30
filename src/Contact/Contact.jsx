import React from 'react'
import './Contact.css'

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d6a57435-dd0c-4489-b191-e0e1e57c9be6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
     <div className="contact-title">
      <h1>Get in touch</h1>
    </div>
    <div className="contact-section">
      <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I am currently available to take on new projects,so feel free to send me a message about anything that you want me to work. You can contact anytime.</p>
        <div  className="contact-details">
      <div className="contact-details" ><p>Email: madaramoniraghu@gmail.com</p> </div>
      <div className="contact-detail" ><p>Call: 8341972928</p></div>
      <div className="contact-detail"><p>Location: Hyderabad</p></div>
      </div>
    </div>
  </div>
  <form onSubmit={onSubmit} className='contact-right'>
    <label htmlFor="" >Your Name:</label>
    <input type="text" placeholder='Enter your name' name='name'  outfill="off" />
    <label htmlFor="">Your Eamil:</label>
    <input type="email" placeholder='Enter Yor email' name='email' outfill="off" />
    <label htmlFor="">Write your message here</label>
    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
    <button type='submit' className="contact-submit">Submit Now</button>
  </form>
  </div>
  )
}

export default Contact

