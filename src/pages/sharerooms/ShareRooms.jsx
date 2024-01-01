import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage1 from "../../assets/landingpages/landingpage1.png";
import backgroundImage2 from "../../assets/landingpages/landingpage2.png";
import logoImage from "../../assets/landingpages/Logo.png";
import "./sharerooms.css";
import TinderCard from "react-tinder-card";
const dummyData = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    feedback: "Great person!",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    feedback: "Awesome personality!",
    image: "https://via.placeholder.com/200",
  },
];

const ShareRooms = () => {
  const [scrolling, setScrolling] = useState(false);
  const [characters, setCharacters] = useState(dummyData);
  const [lastDirection, setLastDirection] = useState();
  const screenSize = window.innerWidth;
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardFlip = (cardId) => {
    setFlippedCard(cardId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolling(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);

    setCharacters((prevCharacters) =>
      prevCharacters.filter((character) => character.name !== nameToDelete)
    );
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

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

  if (screenSize > 700) {
    return <div>Please open in mobile.</div>;
  }

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

  return (
    <AnimatePresence>
      <div>
        <div className="logodiv">
          <img src={logoImage} alt="Logo" className="logo" />
          <motion.h3 className="logotitle" variants={textVariants}>
            Share a Room
          </motion.h3>
        </div>
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
              Find rooms to share at
            </motion.h3>
            <motion.h1 className="subtitle" variants={textVariants}>
              Chandigarh
            </motion.h1>
          </div>
          <div className="swipe-down-container">
            <button>Find a room</button>
            <p>see more listings</p>
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
          <h1>Recent Listings</h1>
          <div className="cardContainer">
            {characters.map((character) => (
              <TinderCard
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
                preventSwipe={["up", "down"]}
              >
                <div
                  className={`card ${
                    flippedCard === character.id ? "flipped" : ""
                  }`}
                >
                  {flippedCard === character.id ? (
                    // Back side content with dummy data
                    <div className="backSide">
                      <p>About: Lorem ipsum dolor sit amet...</p>
                      <p>Places Visited: Lorem ipsum dolor sit amet...</p>
                      <p>Music Genre: Lorem ipsum dolor sit amet...</p>
                    </div>
                  ) : (
                    // Front side content
                    <>
                      <button
                        className="changeButton"
                        onClick={() => handleCardFlip(character.id)}
                      >
                        Change
                      </button>
                      <div
                        style={{
                          backgroundImage: "url(" + character.url + ")",
                        }}
                      >
                        <h3>{character.name}</h3>
                      </div>
                    </>
                  )}
                </div>
              </TinderCard>
            ))}
          </div>
          {lastDirection ? (
            <h2 className="infoText">You swiped {lastDirection}</h2>
          ) : (
            <h2 className="infoText" />
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ShareRooms;
