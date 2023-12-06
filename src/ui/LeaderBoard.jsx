import { useState } from "react";
import "./styles.css";
import useApiStore from "../api/ApiStore";
import { useQuery } from "react-query";

const LeaderBoard = () => {
const [webData, setWebData] = useState({webResults:[]});
const [androidData, setAndroidData] = useState({androidResult:[]});
const [mlData, setMlData] = useState({mlResults:[]});
const a = webData.setWebData


  const{getLeaderBoard} = useApiStore()
   useQuery('leaderboard',getLeaderBoard, {

    onSuccess: (Data)=>
    {
      console.log(Data);
    const {web,android,ml} = Data
    setWebData((prev) => ({ ...prev,webResults:web }));
    setAndroidData((prev) => ({ ...prev,androidResult:android }));
    setMlData((prev) => ({ ...prev,mlResults:ml }));
    console.log(webData);
  console.log(androidData);
  console.log(mlData);
    }
  })
 const [activeTab, setActiveTab] = useState("");
 

 return (
   <>
     <div className="custom-bg-color bounded flex flex-col items-center justify-center h-[100vh]">
       <h1 className="text-white m-7" action="/">Leader Board</h1>
       <div className="submission-form rounded-lg lg:flex items-center justify-center p-8 w-[50wh]">
         <div role="tablist" className="tabs-lg tabs-lifted  ">
           <a
             role="tab"
             action="/web"
             className={`tab ${
               activeTab === "/web" ? "tab-active text-black" : "text-white"
             }`}
             onClick={() => setActiveTab("/web")}
           >
             Web
           </a>
           <a
             role="tab"
             className={`tab ${
               activeTab === "/android"
                 ? "tab-active text-black"
                 : "text-white"
             }`}
             onClick={() => setActiveTab("/android")}
           >
             Android
           </a>
           <a
             role="tab"
             className={`tab ${
               activeTab === "/ml" ? "tab-active text-black" : "text-white"
             }`}
             onClick={() => setActiveTab("/ml")}
           >
             AI/ML
           </a>
         </div>
       </div>
       <div className="table-box-prev">
         {activeTab === "" ? (
           <h2 className="text-white items-center mt-8">Select Domain</h2>
         ) : (
           <div className="table-box overflow-x-auto">
             {activeTab && (
               <table className="table-lg my-2">
                 <thead>
                   <tr>
                     <th>Username</th>
                     <th>Enrollment No.</th>
                   </tr>
                 </thead>
                 <tbody>
  {activeTab === "/web" &&
    webData.webResults.map((item) => (
      <tr key={item.username}>
        <td>{item.username}</td>
        <td>{item.score}</td>
      </tr>
    ))}
  {activeTab === "/android" &&
    androidData.androidResult.map((item) => (
      <tr key={item.username}>
        <td>{item.username}</td>
        <td>{item.score}</td>
      </tr>
    ))}
  {activeTab === "/ml" &&
    mlData.mlResults.map((item) => (
      <tr key={item.username}>
        <td>{item.username}</td>
        <td>{item.score}</td>
      </tr>
    ))}
</tbody>
               </table>
             )}
           </div>
         )}
       </div>
     </div>
   </>
 );
};


export default LeaderBoard;



