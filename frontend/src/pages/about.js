import React from "react";
import "../css/about.css";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="contact-section">
            <div className="contact-details">
              <h1>How To Find Us </h1>
              <ul>
                <li>
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>Email:</span>
                  <a href="mailto:support@greengenie.com">
                    support@greengenie.com
                  </a>
                </li>
                <li>
                  <span className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span>Phone:</span>
                  <a href="tel:1-555-555-5555">1-555-555-5555</a>
                </li>
                <li>
                  <span className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span>Address:</span>
                  <span>Hisar, Haryana, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="fashion-section">
            <h1>Redefining Fashion </h1>
            <h3>Hisar, Haryana, India</h3>
            <div className="icons">
              <ul className="socials">
                <li>
                  <FaFacebook size={24} aria-label="Facebook" />
                </li>
                <li>
                  <FaTwitter size={24} aria-label="Twitter" />
                </li>
                <li>
                  <FaGoogle size={24} aria-label="Google" />
                </li>
                <li>
                  <FaYoutube size={24} aria-label="YouTube" />
                </li>
                <li>
                  <FaLinkedin size={24} aria-label="LinkedIn" />
                </li>
              </ul>
            </div>
          </div>

          <div className="story-section">
            <h2>Our Story: Weaving a Greener Future, One Thread at a Time </h2>
            <p>
              We, the four friends behind GreenGenie, weren't just fashion
              enthusiasts. We were concerned citizens watching the ever-growing
              mountain of discarded clothes cast a shadow on our planet and our
              communities. Fast fashion's relentless cycle of "trend, wear,
              discard" felt unsustainable, both environmentally and ethically.
            </p>
            <p>
              We saw the pressure it placed on individuals, fueling a culture of
              overconsumption and constant wardrobe updates. We also saw the
              environmental costs of this, including rising greenhouse gas
              emissions, the waste of precious resources, and overflowing
              landfills. Most troubling of all, we realized that this waste
              would eventually harm future generations and society as a whole.
            </p>
          </div>

          <div className="mission-section">
            <h2>Our Mission and Vision</h2>
            <p>
              But amidst this mounting concern, a spark of hope ignited. We
              envisioned a platform that could connect the dots. A platform
              where people could give their pre-loved clothes a second chance,
              where recycling factories and NGOs could access gently used
              garments, and where local communities could benefit from this
              sustainable cycle.
            </p>
          </div>

          <div className="solution-section">
            <h2>The Solution</h2>
            <p>
              GreenGenie was born from this vision. We built a web platform
              where people could list their unwanted clothes online, donate them
              to worthy causes, or even get a fair price for their gently used
              treasures. We partnered with ethical recycling facilities and
              responsible NGOs, ensuring responsible end-of-life solutions for
              clothing that couldn't be worn again.
            </p>
          </div>

          <div className="impact-section">
            <h2>The Impact</h2>
            <p>
              Our journey hasn't been without its challenges, but the stories we
              encounter every day fuel our passion. We've seen the joy of
              children receiving donated clothes, the pride of individuals
              decluttering their wardrobes responsibly, and the satisfaction of
              communities working together to make a difference.
            </p>
          </div>

          <div className="movement-section">
            <h2>The Movement</h2>
            <p>
              GreenGenie is more than just a platform; it's a movement. It's a
              community of conscious individuals united by a shared goal: to
              break free from the clutches of fast fashion and embrace a more
              sustainable future for clothing. We believe that every thread,
              every garment, has a story to tell, and GreenGenie gives them a
              platform to continue that story, woven with purpose and
              responsibility.
            </p>
          </div>

          <div className="call-to-action-section">
            <h2>The Call to Action</h2>
            <p>
              Join us on this journey. Let's rewrite the narrative of fashion,
              one thread at a time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
