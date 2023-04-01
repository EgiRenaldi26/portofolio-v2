import React, { useContext } from "react";
import "./Works.css";
import Css from "../../img/css.png";
import Js from "../../img/js.png";
import html from "../../img/html.png";
import Figma from "../../img/figma.png";
import Mysql from "../../img/mysql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>My Skills?</span>
          <span>...</span>
          {/* <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane> */}
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={html} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Figma} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mysql} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
