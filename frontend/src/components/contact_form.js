import React from "react";

const Contact_form = () => {
    return (
        <>
            <form className="contact-form">
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Your Name" required />
                </div>

                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Your Email Address" required />
                </div>

                <div className="field">
                    <label htmlFor="phone">Phone Number (Optional):</label>
                    <input type="tel" id="phone" placeholder="(555) 555-5555" />
                </div>

                <div className="field">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" placeholder="Share your thoughts, questions, or feedback"></textarea>
                </div>

                <button type="submit" className="green-btn">Send Message</button>
            </form>
        </>
    )
}

export default Contact_form;