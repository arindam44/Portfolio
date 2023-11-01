"use client";
import React, { useCallback, useState } from "react";
import "./contacts.css";
import { sendContactForm } from "@/utils/api";
import Loader from "@/assets/icons/Loader";

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
    <section className="contacts-container">
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
          {loading && <Loader />}
        </button>
      </div>
    </section>
  );
};

export default Contacts;
