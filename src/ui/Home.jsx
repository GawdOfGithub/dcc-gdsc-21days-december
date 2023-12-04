import { Link } from 'react-router-dom';
const Home = () => {



 return (
   <>
   <div className="min-h-screen flex flex-col items-center justify-center z-[1] custom-bg-color min-w-[100vh]">
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
   </div>
   </>
 );
};


export default Home;