import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage1 from "../../assets/landingpages/landingpage7.png";
import backgroundImage2 from "../../assets/landingpages/landingpage6.png";
import locate from "../../assets/landingpages/locate.svg";
import logoImage from "../../assets/landingpages/Logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./emergency.css";

import medical from "../../assets/landingpages/medical.svg";
import hospital from "../../assets/landingpages/hospital.png";
import police from "../../assets/landingpages/police.svg";
import Map from "../../components/Map";

const Emergency = () => {
  const [scrolling, setScrolling] = useState(false);
  const screenSize = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // if (screenSize > 700) {
  //   return <div>Please open in mobile.</div>;
  // }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const secondContainerVariants = {
    hidden: { opacity: 0, y: scrolling ? 0 : 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const activities = [
    {
      title: "Bachelors’ Trip to Spiti Valley",
      description: "Group of 15 (Boys’ only)",
      plan: "Plan includes: Kibber, Kaza, Kee Gompa, Langza, Spititi valley and more",
      cost: "₹ 15,000/head (fooding & lodging included)",
    },
    {
      title: "Bachelors’ Trip to Spiti Valley",
      description: "Group of 15 (Boys’ only)",
      plan: "Plan includes: Kibber, Kaza, Kee Gompa, Langza, Spititi valley and more",
      cost: "₹ 15,000/head (fooding & lodging included)",
    },
  ];

  return (
    <AnimatePresence>
      <div>
        <img src={logoImage} alt="Logo" className="logo" />
        <motion.div
          key="first"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="header"
          style={{
            background: `url(${backgroundImage1})`,
          }}
        >
          <div className="headerinnerDiv">
            <motion.h3 className="title text-3xl" variants={textVariants}>
              near me
            </motion.h3>
            <motion.h1 className="subtitle" variants={textVariants}>
              <div className="flex mt-5">
                <input className="transparent z-0" type="text" placeholder="" />
                <img src={locate} className="w-9 z-10 -ml-10" />
              </div>
              <hr className="w-80 my-1 border-2 bg-white" />
            </motion.h1>
          </div>

          <div className="w-full">
            <div className="boxes mt-12 flex justify-evenly ">
              <div className="box p-2 w-28 flex justify-center">
                <img src={medical} className="w-14" />
              </div>
              <div className="box p-2 py-3 w-28 flex justify-center">
                <img src={hospital} className="w-14" />
              </div>
              <div className="box p-2 w-28 flex justify-center">
                <img src={police} className="w-14" />
              </div>
            </div>
          </div>

          <div className="swipe-down-container">
            <p style={{ color: "white", marginBottom: "10px" }}>Swipe Down</p>
            <div className="vertical-line"></div>{" "}
          </div>
        </motion.div>

        <motion.div
          key="second"
          variants={secondContainerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{
            background: `url(${backgroundImage2})`,
          }}
          className="about flex justify-center px-10 "
        >
          <Map className="w-3/4 " />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Emergency;
