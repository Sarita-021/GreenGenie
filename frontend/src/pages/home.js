import React from "react";
import "../css/home.css"

const Home = () => {
    return (
        <>
            <div className="Top">
                <h1>Weclome to GreenGenie</h1>
                <h2>Make a difference today: GreenGenie - Wear the change you want to see.</h2>
                <form class="search-form">
                    <div class="field">
                        <label for="location">Location:</label>
                        <input type="text" id="location" placeholder="Enter City" />
                    </div>
                    <div class="field">
                        <label for="type">Type:</label>
                        <select id="type">
                            <option value="">Select Type</option>
                            <option value="Kids">Kids</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                        </select>
                    </div>
                    <div class="field">
                        <label for="category">Category:</label>
                        <select id="category">
                            <option value="">Select Category</option>
                            <option value="Jenes">Jenes</option>
                            <option value="Jackets">Jackets</option>
                            <option value="Shirts">Shirts</option>
                            <option value="Kurtis">Kurtis</option>
                            <option value="Saree">Saree</option>
                        </select>
                    </div>
                    <button type="submit">Search</button>
                </form>

            </div>

            {/* Top Recycling partners  */}
            <div>
                <h2>Yearly Disturbing Trends</h2>
                <h3>Unraveling Your Wardrobe: The Shocking Story of Your Clothes</h3>
                <div>
                    <p>92 Million Tones</p>
                    <p>Textile Waste</p>
                </div>
                <div>
                    <p>10%</p>
                    <p>Of Microplastic Dispersed in Ocean from textiles</p>
                </div>
                <div>
                    <p>85%</p>
                    <p>Clothes Ends in Landfills</p>
                </div>
                <div>
                    <p>1%</p>
                    <p>Clothes get Recycled</p>
                </div>
                <div>
                    <p>10K - 20K</p>
                    <p>Of Water to produce 1kg Cotton</p>
                </div>
            </div>

            {/* Our Clients */}
            <div>
                <div><img className="map"></img></div>
                <div>
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

                <p>Join the GreenGenie community and give your pre-loved clothes a second life. It's easy, fun, and helps the planet!</p>

                <div class="steps">

                    <h3>1. Sign Up for Free</h3>
                    <p>Register as a GreenGenie Seller - just an email and active bank account is all you need!</p>

                    <h3>2. List Your Treasures</h3>
                    <p>Upload your clothing photos and tell their story. Choose where they go: donate to NGOs or sell to recycling hubs.</p>

                    <h3>3. Get GreenGenie Approval</h3>
                    <p>Our team reviews your listings and sets fair prices for your sustainable gems.</p>

                    <h3>4. Orders & Happy Customers</h3>
                    <p>Receive notifications when someone falls in love with your clothes and confirm their order.</p>

                    <h3>5. Secure Payments in Your Bank</h3>
                    <p>GreenGenie deposits your earnings directly to your bank account - cash on delivery included!</p>

                </div>
                <p>Ready to join the movement? Sign up today!</p>
            </div>


            {/* Customer feedback  */}
            <div>
                <h1>What Our Wonderful Customers Say</h1>

                <div class="testimonial">
                    <img src="image_url_1" />
                    <div class="quote">
                        <p class="name">Sarah Jones</p>
                        <p>GreenGenie made selling my unwanted clothes a breeze! Their team was helpful and supportive throughout the process.</p>
                        <p class="rating">⭐⭐⭐⭐⭐</p>
                    </div>
                </div>

                <div class="testimonial">
                    <img src="image_url_2" />
                    <div class="quote">
                        <p class="name">Michael Smith</p>
                        <p>Thrilled with my experience with GreenGenie! My clothes found new homes while I made some extra cash and helped the planet. Win-win!</p>
                        <p class="rating">⭐⭐⭐⭐⭐</p>
                    </div>
                </div>

                <div class="testimonial">
                    <img src="image_url_3" />
                    <div class="quote">
                        <p class="name">Emily Davies</p>
                        <p>GreenGenie is a fantastic platform for giving my pre-loved clothes a second life. I feel good knowing they're not going to waste, and the process was incredibly smooth.</p>
                        <p class="rating">⭐⭐⭐⭐⭐</p>
                    </div>
                </div>

                <div class="testimonial">
                    <img src="image_url_4" />
                    <div class="quote">
                        <p class="name">David Miller</p>
                        <p>GreenGenie exceeded my expectations! I was skeptical at first, but their commitment to sustainability and customer service won me over.</p>
                        <p class="rating">⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
            </div>


            {/* Contact us */}
            <div class="contact-wrap">
                <h2>Connect with GreenGenie</h2>

                <p>Have questions, suggestions, or just want to say hello? We'd love to hear from you! Drop us a message using the form below or reach out directly through our various channels.</p>

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

                <div class="contact-details">
                    <h2>Get in Touch Directly</h2>

                    <ul>
                        <li>
                            <span class="icon"><i class="fas fa-envelope"></i></span>
                            <span>Email:</span>
                            <a>support@greengenie.com</a>
                        </li>
                        <li>
                            <span class="icon"><i class="fas fa-phone-alt"></i></span>
                            <span>Phone:</span>
                            <a >1-555-555-5555</a>
                        </li>
                        <li>
                            <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                            <span>Address:</span>
                            <span>Hisar, Haryana, India</span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Recent Blogs */}
            <div class="blog-section">
                <h3>Dive into Sustainable Style</h3>

                <h2>Explore the Latest Buzz in Eco-Conscious Fashion</h2>

                <ul class="blog-list">
                    <li>
                        <a href="#">
                            <h2>Second Chance Threads: Upcycling Your Way to Fashion Freedom</h2>
                        </a>
                        <p>Uncover the story&nbsp;&rarr;</p>
                    </li>
                    <li>
                        <a href="#">
                            <h2>The Future is Fair Fashion: Brands Leading the Way</h2>
                        </a>
                        <p>Uncover the story&nbsp;&rarr;</p>
                    </li>
                    <li>
                        <a href="#">
                            <h2>Beyond the Label: The Hidden Cost of Cheap Clothes</h2>
                        </a>
                        <p>Uncover the story&nbsp;&rarr;</p>
                    </li>
                    <li>
                        <a href="#">
                            <h2>Closing the Loop: Circular Fashion for a Brighter Future</h2>
                        </a>
                        <p>Uncover the story&nbsp;&rarr;</p>

                    </li>
                </ul>

                <a href="/blog" class="see-more-btn">See More</a>
            </div>


            {/* freqently asked questions */}
            <div>
                <h2>Your GreenGenie FAQs Answered</h2>

                <div class="faq-item">
                    <h3>Why choose GreenGenie to sell your clothes?</h3>
                    <p>GreenGenie takes the hassle out of decluttering your wardrobe! Get fair prices for your pre-loved clothes, enjoy online convenience with doorstep pick-up, and choose a destination that aligns with your values, be it supporting NGOs or contributing to sustainable recycling.</p>
                </div>

                <div class="faq-item">
                    <h3>How fast is the approval process for listing clothes?</h3>
                    <p>Expect a decision on your clothing within 48 hours of submitting them. We work hard to get your items listed and ready to find a new home!</p>
                </div>

                <div class="faq-item">
                    <h3>Who buys my clothes on GreenGenie?</h3>
                    <p>Your pre-loved treasures can find new life through various channels. We partner with ethical recycling factories, responsible NGOs, and other registered users seeking sustainable wardrobe options.</p>
                </div>

                <div class="faq-item">
                    <h3>What about my payment?</h3>
                    <p>Once your clothes find a buyer, the sale proceeds are securely deposited into your bank account within 15 days. Relax and let GreenGenie handle the transaction process.</p>
                </div>

                <div class="faq-item">
                    <h3>Can I donate clothes instead of selling them?</h3>
                    <p>Absolutely! GreenGenie makes it easy to donate your unwanted clothes to worthy causes. Simply choose the "Donate" option when listing your items, and we'll ensure they reach the appropriate NGOs.</p>
                </div>

                <div class="faq-item">
                    <h3>What types of clothes do you accept?</h3>
                    <p>We welcome a wide range of gently used clothing, shoes, and accessories. Check our website for guidelines on acceptable items and condition requirements.</p>
                </div>

                <div class="faq-item">
                    <h3>How can I learn more about GreenGenie's impact?</h3>
                    <p>Visit our "About Us" page or explore our blog for stories about the positive impact we're making on the environment and communities. We're always happy to share our passion for sustainable fashion!</p>
                </div>

                <a href="/faq" class="see-more-btn">Get More Answers</a>

            </div>

        </>
    );

};

export default Home;