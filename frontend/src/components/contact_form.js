import React from "react";

const Contact_form = () => {
    return (
        <>
            <form class="contact-form">
                <div class="field">
                    <label for="name">Name:</label>
                    <input type="text" id="name" placeholder="Your Name" required />
                </div>

                <div class="field">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Your Email Address" required />
                </div>

                <div class="field">
                    <label for="phone">Phone Number (Optional):</label>
                    <input type="tel" id="phone" placeholder="(555) 555-5555" />
                </div>

                <div class="field">
                    <label for="message">Message:</label>
                    <textarea id="message" placeholder="Share your thoughts, questions, or feedback"></textarea>
                </div>

                <button type="submit" class="green-btn">Send Message</button>
            </form>
        </>
    )
}

export default Contact_form;