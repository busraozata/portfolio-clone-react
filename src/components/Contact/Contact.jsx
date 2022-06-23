import React, { useRef } from "react";
import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bjbe2sf",
      "template_n0n5dqn",
      form.current,
      "b_4ujO4HWlQQEYf-d"
    );
    toast.success("Başarılı");
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="container">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__options d-flex justify-content-center align-items-center flex-column">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>dummyegator@gmail.com</h5>
                <a
                  href="mailto:busraozata1998@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Send a message
                </a>
              </article>
              <article className="contact__option">
                <RiMessageLine className="contact__option-icon" />
                <h4>Messenger</h4>
                <h5>egatutorials</h5>
                <a href="/#" rel="noreferrer" target="_blank">
                  Send a message
                </a>
              </article>
              <article className="contact__option">
                <BsWhatsapp className="contact__option-icon" />
                <h4>Whatsapp</h4>
                <h5>+123456789</h5>
                <a
                  href="https://api.whatsapp.com/send?phone=905547493125&text=Merhaba%20"
                  rel="noreferrer"
                  target="_blank"
                >
                  Send a message
                </a>
              </article>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group col-lg-12 mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="form-group col-lg-12 mb-3">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group col-lg-12">
                <textarea
                  name="message"
                  className="form-control"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
