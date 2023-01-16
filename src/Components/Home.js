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
                  You can organize, track and monitor activities that are
                  related to your mental well-being here. It includes self-care
                  tasks, therapy homework, medication reminders and other
                  activities that can help in managing and improving mental
                  health. It can also include specific tasks related to
                  achieving certain goals, such as practicing relaxation
                  techniques, engaging in physical activities, or journaling. By
                  regularly reviewing and monitoring the tasks, you can gain
                  insight into your progress and make adjustments as needed.
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
                  Meditation is a practice that involves focusing the mind on a
                  specific thought, feeling, or activity to achieve a mentally
                  clear and emotionally calm state. Meditation has positive
                  effects on mental health, including reducing symptoms of
                  anxiety and depression, improving attention and focus, and
                  promoting overall well-being. Regular meditation practice may
                  lead to structural changes in the brain, such as increased
                  gray matter in areas related to emotional regulation and
                  self-referential processing.
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
                  Mood tracking is a process of regularly monitoring and
                  recording one's emotional state. By tracking moods over time,
                  patterns and triggers for certain emotions can be identified
                  and addressed. This can help in managing mental health
                  conditions, such as depression and anxiety, and can also aid
                  in overall self-awareness and self-improvement. This Feature
                  would be made available in the nearest future.
                </p>
              </div>
            </div>
          </div>

          <div className="section mt-5">
            <div className="inner">
              <div>
                <h3>Planner</h3>
                <p>
                  A mental health planner is a tool that can be used to organize
                  and keep track of appointments, therapy sessions, medication
                  schedules, and other important information related to mental
                  health. It can also be used to set goals, track progress, and
                  record self-care activities. It can be helpful in managing and
                  improving mental health, by providing a clear overview of
                  one's treatment plan and enabling individuals to take an
                  active role in their own care. This Feature would be made
                  available in the nearest future.
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
