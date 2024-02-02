import React from "react";
import "../css/home.css";
import Contact_form from "../components/contact_form";
import { blog_list, clients, contact_details, faq, review, trends } from "../Data/details";
import Search_form from "../components/search_form";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="Top">
                    <h1>GreenGenie</h1>
                    <h2>Wastemakers - Dress the part, be the change.</h2>
                    <img src="/assets/img1.png" alt="" />
                    <Search_form />
                </div>

                {/* Top Recycling partners  */}
                <div className="stats">
                    <div className="container">
                        <h2>Fashion's Dirty Runway</h2>
                        <h3>Quantifying the Waste in Fast Fashion</h3>
                        <ul>
                            {trends.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        <p className="text"><span>{item.value}</span> {item.desc}</p>
                                        {/* <p className="desc">{item.desc}</p> */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Our Network */}
                <div className="network">
                    <div className="container">
                        <div className="network-top">
                            <div className="top-left">
                                <h4>Our Network</h4>
                                <h1>Explore Most of Us</h1>
                            </div>
                            <div className="top-right">
                                <div className="donor">
                                    <div className="box">
                                        <p>Top Donor</p>
                                        <div>Henry Moore</div>
                                    </div>
                                </div>
                                <div className="ngo">
                                    <div className="box">
                                        <p>Top-rated NGO</p>
                                        <div>Threads of Life</div>
                                    </div>
                                </div>
                                <div className="factory">
                                    <div className="box">
                                        <p>Top-rated Factory</p>
                                        <div>ReMake Magic</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="network-bottom">
                            {clients.map((item, index) => (
                                <div key={index}>
                                    <div className="clients">
                                        <p className="desc"><span>{item.count}</span> {item.network}</p>
                                        {/* <p className="value">{item.network}</p> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Customer feedback  */}
                <div className="feedback">
                    <h1>What Our Wonderful Customers Say</h1>

                    <div className="testimonial">
                        {review.map((item, index) => (
                            <div key={index}>
                                <img src={item.img} />
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
                    <p>Have questions, suggestions, or just want to say hello? We'd love to hear from you! Drop us a message using the form below or reach out directly through our various channels. </p>

                    <Contact_form />

                    <div className="contact-details">
                        <h2>Get in Touch Directly</h2>

                        <ul>
                            {contact_details.map((item, index) => (
                                <li key={index}>
                                    <span className="icon">
                                        <i className={item.icon}></i>
                                    </span>
                                    <span>{item.type}</span>
                                    <a>{item.value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Recent Blogs */}
                <div className="blog-section">
                    <h3>Dive into Sustainable Style</h3>
                    <h3>Explore the Latest Buzz in Eco-Conscious Fashion</h3>

                    <ul className="blog-list">
                        {blog_list.map((item, index) => (
                            <li key={index}>
                                <a href={item.url}>
                                    <h2>{item.title}</h2>
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
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </li>
                        ))}
                    </div>
                    <a href="/faq" className="see-more-btn">
                        Get More Answers
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;
