import React from "react";
import "../css/home.css";

import Contact_form from "../components/contact_form";
import {
  blog_list,
  contact_details,
  faq,
  review,
  trends,
} from "../Data/details";
import Search_form from "../components/search_form";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="Top">
        <h1>Welcome to GreenGenie</h1>
        <h2>
          Make a difference today: GreenGenie - Wear the change you want to see.
        </h2>
        <Search_form />
      </div>

      {/* Top Recycling partners  */}
      <div className="stats">
        <h2>Yearly Disturbing Trends</h2>
        <h3>Unraveling Your Wardrobe: The Shocking Story of Your Clothes</h3>
        <ul>
          {trends.map((item, index) => (
            <li key={index}>
              <div>
                <p className="value">{item.value}</p>
                <p className="desc">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Clients */}
      <div>
        <div>
          <img className="map"></img>
        </div>
        <div className="clients">
          <div>
            <p>Donors</p>
            <p>5000+</p>
          </div>
          <div>
            <p>NGOs</p>
            <p>150+</p>
          </div>
          <div>
            <p>Recycling Factories</p>
            <p>100+</p>
          </div>
        </div>
      </div>

      {/* div containing detalils about selling clothes online */}
      <div className="sell">
        <h2>Become a GreenGenie Seller & Make Sustainability Pay!</h2>

        <p>
          Join the GreenGenie community and give your pre-loved clothes a second
          life. It's easy, fun, and helps the planet!
        </p>

        <div className="steps">
          <h3>1. Sign Up for Free</h3>
          <p>
            Register as a GreenGenie Seller - just an email and active bank
            account is all you need!
          </p>

          <h3>2. List Your Treasures</h3>
          <p>
            Upload your clothing photos and tell their story. Choose where they
            go: donate to NGOs or sell to recycling hubs.
          </p>

          <h3>3. Get GreenGenie Approval</h3>
          <p>
            Our team reviews your listings and sets fair prices for your
            sustainable gems.
          </p>

          <h3>4. Orders & Happy Customers</h3>
          <p>
            Receive notifications when someone falls in love with your clothes
            and confirm their order.
          </p>

          <h3>5. Secure Payments in Your Bank</h3>
          <p>
            GreenGenie deposits your earnings directly to your bank account -
            cash on delivery included!
          </p>
        </div>
        <NavLink to="/login">Ready to join the movement? Sign up today!</NavLink>
      </div>

      {/* Customer feedback  */}
      <div className="feedback">
        <h1>What Our Wonderful Customers Say</h1>

        <div className="testimonial">
          {review.map((item, index) => (
            <div key={index}>
              <img src="/assets/logo.jpeg" />
              <div className="quote">
                <p className="name">{item.name}</p>
                <p>{item.review}</p>
                <p className="rating">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact us */}
      <div className="contact-wrap">
        <h2>Connect with GreenGenie</h2>

        <p>
          Have questions, suggestions, or just want to say hello? We'd love to
          hear from you! Drop us a message using the form below or reach out
          directly through our various channels.
        </p>

        <Contact_form />

        {/* <div className="contact-details">
          <h2>Get in Touch Directly</h2>

          <ul>
            {contact_details.map((item, index) => (
              <li key={index}>
                <span className="icon">
                  <i className={item.icon}></i>
                </span>
                <span>{item.type}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      {/* Recent Blogs */}
      <div className="blog-section">
        <h2>Dive into Sustainable Style</h2>

        <h3>Explore the Latest Buzz in Eco-Conscious Fashion</h3>

        <ul className="blog-list">
          {blog_list.map((item, index) => (
            <li key={index}>
              <a href={item.url}>
                <span>{item.title}</span>
              </a>
              <p>Uncover the story&nbsp;&rarr;</p>
            </li>
          ))}
        </ul>

        <a href="/blog" className="see-more-btn">
          See More
        </a>
      </div>

      {/* freqently asked questions */}
      <div className="faq">
        <h2>GreenGenie's FAQs</h2>

        <div className="faq-item">
        {faq.map((item, index) => (
          <li key={index}>
            <h3> {'>'} {item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
        </div>
        <a href="/faq" className="see-more-btn">
          Get More Answers
        </a>
      </div>
    </div>
  );
};

export default Home;