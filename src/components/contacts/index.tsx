import React, { useCallback, useState } from "react";
import "./contacts.css";
import { sendContactForm } from "@/utils/api";
import Loader from "@/assets/icons/Loader";
import Phone from "@/assets/icons/Phone";
import Email from "@/assets/icons/Email";
import { motion } from "framer-motion";

type Props = {};

const Contacts = (props: Props) => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "+91",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((value: string, key: string) => {
    setContactDetails((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await sendContactForm(contactDetails);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  }, [contactDetails]);

  return (
    <motion.section
      className="contacts-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <span className="contacts-header">Contact Me</span>
      <div className="contacts-form">
        <div className="contact-three-input-container">
          <input
            type="text"
            className="contact-input"
            value={contactDetails.name}
            onChange={(e) => handleInputChange(e.target?.value, "name")}
            placeholder="Your Name"
          />
          <input
            type="email"
            className="contact-input"
            value={contactDetails.email}
            onChange={(e) => handleInputChange(e.target?.value, "email")}
            placeholder="Your Email Address"
          />
          <input
            type="phone"
            className="contact-input"
            value={contactDetails.phone}
            onChange={(e) => handleInputChange(e.target?.value, "phone")}
            placeholder="Your Phone Number"
          />
        </div>

        <input
          type="text"
          className="contact-input"
          value={contactDetails.subject}
          onChange={(e) => handleInputChange(e.target?.value, "subject")}
          placeholder="Subject"
        />
        <textarea
          className="contact-input"
          value={contactDetails.message}
          onChange={(e) => handleInputChange(e.target?.value, "message")}
          placeholder="Message"
          rows={15}
        />
        <button
          className={`contact-btn fill-btn ${loading ? "loading" : ""}`}
          onClick={handleSubmit}
        >
          Submit
          {(loading) && <Loader />}
        </button>
        <div className="contacts-footer">
          <div className="contacts-footer-inner">
            <Email />
            <a
              className="contacts-footer-text"
              href="mailto:arindam44roy@gmail.com"
            >
              arindam44roy@gmail.com
            </a>
          </div>
          <div className="contacts-footer-inner">
            <Phone />
            <a className="contacts-footer-text" href="tel:+919874652463">
              +91-9876543210
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
