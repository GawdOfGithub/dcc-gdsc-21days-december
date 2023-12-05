import "./styles.css";
import { useState, useEffect } from "react";
import useApiStore from "../api/ApiStore";
import { useQuery } from "react-query";

const AdminDashboard = () => {
  const [adminSubmissionData, setAdminSubmissionData] = useState({});
  const { getAdminSubmission } = useApiStore();
  const [selectedOption, setSelectedOption] = useState("web");

  const { error, isLoading,refetch } = useQuery(
    ["adminSubmission", selectedOption],

    
    () => getAdminSubmission(selectedOption),
    {
      enabled: false,
      onSuccess: (data) => {
        console.log(data);
        setAdminSubmissionData(data);
        
      },
    
    }
  );

  
  const data2 = [
    {
      username: "samrat_53",
      day: 1,
      driveLink: "www.google.com",
      status: "pending",
      liveLink: "www.google.com",
    },
    {
      username: "samrat_53",
      day: 1,
      driveLink: "www.google.com",
      status: "pending",
      liveLink: "www.google.com",
    },
  ];



const handleSelectedOption = (e)=>
{
setSelectedOption(e.target.value)
console.log(e.target.value);

}
  return (
    <>
      <div className="custom-bg-color bounded flex flex-col items-center justify-center h-[100vh]">
      <h1 className="py-5  ">Admin Dashboard</h1>

      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Select your domain admin..</span>
    sp
  </div>
  <select className="select select-bordered" value={selectedOption} onChange={handleSelectedOption}>
   
    <option disabled selected ="">Chose now </option>
    <option value="web">Web Dev</option>
    <option value="android">Android Dev</option>
    <option value="ml">Machine Learning</option>
  </select>
  <div className="label">
 
  </div>
</label>
<button className="btn btn-primary" onClick={refetch}>Load Submissions</button>
    
        <div className="submission-form rounded-lg flex flex-col items-center justify-center p-8 w-[50wh]">
          <div className="overflow-x-auto table-box">
            <table className="table my-5">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Day</th>
                  <th>Drive Link</th>
                  <th>Live Link</th>
                  <th>Accept / Reject</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item) => (
                  <tr key={item.username}>
                    <td>{item.username}</td>
                    <td>{item.day}</td>
                    <td>
                      <a
                        href={item.driveLink}
                        className="underline overflow-hidden truncate ext-ellipsis block"
                      >
                        Inspect Drive Link
                      </a>
                    </td>
                    <td>
                      <a
                        href={item.liveLink}
                        className="underline overflow-hidden truncate max-w-xs block"
                      >
                        Inspect Live Link
                      </a>
                    </td>
                    <td>
                      {item.status == "pending" ? (
                        <div className="btn-array flex space-x-3">
                          <button
                            name="accepted"
                            value="accepted"
                            className="btn-sm btn-accept bg-green-700"
                          >
                            Accept
                          </button>
                          <button
                            name="rejected"
                            value="rejected"
                            className="btn-sm btn-reject bg-red-700"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        "Seen"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
