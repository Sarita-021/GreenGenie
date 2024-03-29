import React from "react";
import "../css/contact_form.css";

const Contact_form = () => {
    return (
        <form className="contact-form">
            <div className="head">Send us a Message today</div>
            <div className="field">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className="field">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email Address"
                    required
                />
            </div>

            <div className="field">
                <label htmlFor="phone">Phone Number (Optional):</label>
                <input type="tel" id="phone" placeholder="+91 (555) 555-5555" />
            </div>

            <div className="field">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    placeholder="Share your thoughts, questions, or feedback"
                ></textarea>
            </div>

            <button type="submit" className="submit-btn">
                Send Message
            </button>
        </form>
    );
};

export default Contact_form;
