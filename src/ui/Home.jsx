import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
import timeline from '../../public/timeline.png';
import { useState, useEffect } from 'react';
const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    'Web Development',
    'Mobile Development',
    'Machine Learning',
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
    } else if (isDeleting && updatedText === '') {
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
          <img src="/timeline.png" alt="timeline" className="custom-bg-color" />
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
              data-rotate='[ "Developer", "Crickter", "Competitive Programmer" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h2>
        </div>
      </div>
      {/* <div className="min-h-screen flex flex-col items-center justify-center z-[1] custom-bg-color min-w-[100vh]">
     <div className="text-6xl font-extrabold text-orange-400">21 Days Challenge</div>
     <div className="text-3xl">
       <span className="text-red-500 mr-2">Web</span>
       <span className="text-green-500 mr-2">Android</span>
       <span className="text-black">ML</span>
     </div>
     <Link to="/register" className="mt-6 font-extrabold border-4 border-solid border-sky-600 hover:border-t-8 hover:border-black p-3 rounded transition-all duration-300 z-10">Register Now</Link>
    
   </div>
   <div className="flex items-center align-center custom-bg-color min-w-[100vh]">
   <img src="/timeline.png" alt="timeline" className='w-full   custom-bg-color' />
   </div> */}
    </div>
  );
};

export default Home;
