import React, { useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cp6goyz",
        "template_8y71v0z",
        form.current,
        "UepSQoLFZ3L_JeNWN"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text == "OK") {
            alert("message sent");
          } else {
            alert("Someting went wrong, please contanct me in an other way");
          }
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a href="https://linkedin.com" target="_blank">
            <BsLinkedin />
          </a>
          <a href="mailto:ahmedsa39d999@gmail.com">
            <IoMdMailOpen />
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
