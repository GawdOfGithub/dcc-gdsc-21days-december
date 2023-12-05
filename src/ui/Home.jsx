import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
import timeline from "../assets/timeline.png";
import { useState, useEffect } from "react";
const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Development",
    "Mobile Development",
    "Machine Learning",
  ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="homePage">
      <div className="homeContent">
        <div className="homeImage">
          <img src={timeline} alt="timeline" className="custom-bg-color" />
        </div>
        <div className="text">
          <h1>
            <span className="bg-gradient-to-r from-sky-300 to-fuchsia-700 text-transparent bg-clip-text ">
              DECEMBOTHONE
            </span>
          </h1>
          <p className="bg-gradient-to-r from-teal-300 to-fuchsia-300 text-transparent bg-clip-text">
            Welcome to a playground of possibilities! Join our month-long coding
            challenge and sculpt your skills amidst a community of passionate
            developers. Ignite your code, conquer challenges, and code your way
            to greatness – because here, innovation is not just a goal, it's a
            journey.
          </p>
          <h2>
            <span
              className="txt-rotate"
              dataPeriod="100"
              data-rotate='[ "Web Development", "Mobile Development", "Machine Learning", ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h2>
          <div className="mt-20 flex justify-center">
            <button className="btn">
              <Link
                to="/register"
                className="font-extrabold"
              >
                Register Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
