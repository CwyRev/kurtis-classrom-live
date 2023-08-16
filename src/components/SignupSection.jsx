import React from "react";
import Doodle_5 from "../assets/Miroodles Color Composition_5.png";
import { motion } from "framer-motion";

function SignupSection() {
  return (
    <div className="signup-section">
      <div className="highlights">
        <motion.p
          className="highlights-1"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 2 }}
          initial="hidden"
          whileInView="visible"
        >
          More than 50% of US teachers use Kurtis
        </motion.p>
        <motion.p
          className="highlights-2"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 2 }}
          initial="hidden"
          whileInView="visible"
        >
          Players in more than 200 countries
        </motion.p>
        <motion.p
          className="highlights-3"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 2 }}
          initial="hidden"
          whileInView="visible"
        >
          Over 30 million public games available
        </motion.p>
        <motion.p
          className="highlights-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 2 }}
          initial="hidden"
          whileInView="visible"
        >
          97% of the Fortune 500 use Kurtis
        </motion.p>
      </div>
      <motion.div
        className="flex-container"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 2 }}
        initial="hidden"
        whileInView="visible"
      >
        <img src={Doodle_5} className="doodle-signup" alt="doodle-5" />
        <div className="signup-text">
          <h2 id="ready-text">Ready for make learning fun!</h2>
          <button
            id="signup-button-2"
            className="signup-button btn btn-primary"
          >
            Sign up for free
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default SignupSection;
