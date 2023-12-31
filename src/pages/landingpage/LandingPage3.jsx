import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage1 from "../../assets/landingpages/landingpage5.png";
import backgroundImage2 from "../../assets/landingpages/landingpage6.png";
import search from "../../assets/search.svg";
import locate from "../../assets/locate.svg";
import logoImage from "../../assets/LandingPages/Logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./LandingPage.css";

const LandingPage3 = () => {
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
              currently at
            </motion.h3>
            <motion.h1 className="subtitle" variants={textVariants}>
            <div className="flex mt-5">
            <input
             className="transparent z-0"
             type="text"
             placeholder=""
             />
             <img src={locate} className="w-9 z-10 -ml-10" />
            </div>
            <hr className="w-80 my-1 border-2 bg-white"/>
            </motion.h1>
          </div>

          <div className="headerinnerDiv mt-14">
            <motion.h3 className="title text-3xl" variants={textVariants}>
              want to go to
            </motion.h3>
            <motion.h1 className="subtitle" variants={textVariants}>
            <div className="flex mt-5">
            <input
             className="transparent z-0"
             type="text"
             placeholder=""
             />
             <img src={search} className="w-9 z-10 -ml-10" />
            </div>
            <hr className="w-80 my-1 border-2 bg-white"/>
            </motion.h1>
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
          className="about"
        >
          <h1 className="text-white">Popular Activities</h1>
          <Carousel autoplay>
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <h2>{activity.title}</h2>
                <p>{activity.description}</p>
                <p>{activity.plan}</p>
                <p>{activity.cost}</p>
              </div>
            ))}
          </Carousel>
        </motion.div>
       
      </div>
    </AnimatePresence>
  );
};

export default LandingPage3;