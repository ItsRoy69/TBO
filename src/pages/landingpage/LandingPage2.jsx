import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage1 from "../../assets/landingpages/landingpage3.png";
import backgroundImage2 from "../../assets/landingpages/landingpage4.png";
import logoImage from "../../assets/LandingPages/Logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./LandingPage.css";

const LandingPage2 = () => {
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
            <motion.h3 className="title" variants={textVariants}>
              Find Rooms To Share In
            </motion.h3>
            <motion.h1 className="subtitle" variants={textVariants}>
              Travel Buddies
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
          <h1>Popular Activities</h1>
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
          <h1>One Place for All Travel</h1>
          <Carousel autoplay>
            <div>
              <div className="fourth-item">
                <p>Join up</p>
              </div>

              <div className="fourth-item">
                <img src="path_to_image1" alt="Image 1" />
              </div>

              <div className="fourth-item">
                <img src="path_to_image2" alt="Image 2" />
              </div>

              <div className="fourth-item">
                <p>Details of Place</p>
              </div>
            </div>
            <div>
              <div className="fourth-item">
                <p>Join up</p>
              </div>

              <div className="fourth-item">
                <img src="path_to_image1" alt="Image 1" />
              </div>

              <div className="fourth-item">
                <img src="path_to_image2" alt="Image 2" />
              </div>

              <div className="fourth-item">
                <p>Details of Place</p>
              </div>
            </div>
            <div>
              <div className="fourth-item">
                <p>Join up</p>
              </div>

              <div className="fourth-item">
                <img src="path_to_image1" alt="Image 1" />
              </div>

              <div className="fourth-item">
                <img src="path_to_image2" alt="Image 2" />
              </div>

              <div className="fourth-item">
                <p>Details of Place</p>
              </div>
            </div>
            <div>
              <div className="fourth-item">
                <p>Join up</p>
              </div>

              <div className="fourth-item">
                <img src="path_to_image1" alt="Image 1" />
              </div>

              <div className="fourth-item">
                <img src="path_to_image2" alt="Image 2" />
              </div>

              <div className="fourth-item">
                <p>Details of Place</p>
              </div>
            </div>
          </Carousel>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LandingPage2;
