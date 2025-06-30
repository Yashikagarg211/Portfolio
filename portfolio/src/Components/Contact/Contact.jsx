import React from 'react'
import { useRef } from 'react'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'



export default function Contact() {

    const formRef = useRef(null);

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "08e77448-91d8-4c5f-8c76-985880af4105");

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
      toast.success("Thank you! Your message has been received. I'll get back to you soon.", {
       className: "toast-success",
       bodyClassName: "toast-body",
       progressClassName: "toast-progress"
});
      formRef.current.reset();
    } else {
    toast.error("Sorry! Something went wrong. Please try again or contact me at yashikagarg1124@gmail.com.", {
       className: "toast-error",
       bodyClassName: "toast-body",
       progressClassName: "toast-progress"
});
  }
  };

  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Actively seeking exciting opportunities to contribute and grow—let's connect!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt='' /> <p>yashikagarg1124@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt='' /> <p>+91 8427732300</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt='' /> <p>Abohar, Punjab, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} ref={formRef} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type="submit" className="contact-submit">Submit Now</button>

            </form>

        </div>
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}
