import React from "react";
import Doodle_2 from "../assets/Miroodles Color Composition_2.png";
import Doodle_3 from "../assets/Miroodles Color Composition_3.png";
import Doodle_4 from "../assets/Miroodles Color Composition_4.png";
import { motion } from "framer-motion";

function ServiceSection() {
  let url = "#";
  return (
    <div className="service-section">
      <p>
        Still more?
        <a href={url}>
          <span id="link-games">Take a look to our features games</span>
        </a>
      </p>
      <h3>How does Kurtis work?</h3>
      <div className="line-div"></div>
      <motion.div
        className="create-container"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 2 }}
        initial="hidden"
        whileInView="visible"
      >
        <img src={Doodle_2} className="doodle" alt="doodle-2" />
        <div className="service-text">
          <h3>Create</h3>
          <p>
            It only takes minutes to create a learning game or trivia quiz on
            any topic, in any language.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="host-container"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 2 }}
        initial="hidden"
        whileInView="visible"
      >
        <div id="service-text-2" className="service-text">
          <h3>Host or share</h3>
          <p>
            Host a live game with questions on a big screen or share a game with
            remote players.
          </p>
        </div>
        <img
          src={Doodle_3}
          className="doodle"
          id="doodle-host"
          alt="doodle-3"
        />
      </motion.div>
      <motion.div
        className="play-container"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 2 }}
        initial="hidden"
        whileInView="visible"
      >
        <img src={Doodle_4} className="doodle" alt="doodle-4" />
        <div className="service-text">
          <h3>Play</h3>
          <p>
            Game on! Join a kahoot with a PIN provided by the host and answer
            questions on your device.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceSection;
