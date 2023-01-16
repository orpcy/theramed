import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import FeaturedSlide from "./extras/FeaturedSlide";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Home = () => {
  const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The road to success is always under construction.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking.",
    "Positive thinking will let you do everything better than negative thinking will.",
    "Your only limit is the one you set for yourself.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only thing to fear is fear itself.",
    "The best way to predict your future is to create it.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
  ];

  const [randQuote, setRandQuote] = useState(quotes[1]);

  setTimeout(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setRandQuote(randomQuote);
  }, 10000);

  return (
    <div className="app-content">
      <Navbar />

      <main>
        <div className="quote">
          <span className="quote-left">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          <span className="quote-text">{randQuote}</span>
          <span className="quote-right">
            <i class="fa-solid fa-quote-right"></i>
          </span>
        </div>

        <div className="featured">
          <h5 className="section-title">Featured</h5>
          <div className="section featured">
            <FeaturedSlide />
          </div>
        </div>

        <div className="activities">
          <h5 className="section-title">Today's Activities</h5>
          <div className="section">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="task">
                    <div>
                      <img src="/img/task.png" alt="task" />
                      <div>
                        <h6>Tasks</h6>
                        <span>3/5 is completed</span>
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="meditation">
                    <div>
                      <img src="/img/meditation.png" alt="task" />
                      <div>
                        <h6>Meditation</h6>
                        <span>10 of 20 mins</span>
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="upcoming">
          <h5 className="section-title">Upcoming Features</h5>
          <div className="section">
            <div className="inner">
              <div className="img-wrap">
                <img src="/img/mood2.png" alt="mood tracking" />
                <img src="/img/mood.png" alt="mood tracking" />
              </div>
              <div>
                <h3>Mood Tracking</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  cumque qui deserunt, aspernatur vel mollitia perspiciatis
                  voluptatem culpa dolores labore dolor quod ducimus blanditiis
                  magni deleniti magnam perferendis. Corrupti, sapiente?
                </p>
              </div>
            </div>
          </div>

          <div className="section mt-5">
            <div className="inner">
              <div>
                <h3>Planner</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  cumque qui deserunt, aspernatur vel mollitia perspiciatis
                  voluptatem culpa dolores labore dolor quod ducimus blanditiis
                  magni deleniti magnam perferendis. Corrupti, sapiente?
                </p>
              </div>
              <div className="img-wrap">
                <img src="/img/planner.png" alt="mood tracking" />
                <img src="/img/planner2.png" alt="mood tracking" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Home;
