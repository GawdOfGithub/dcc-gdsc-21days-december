import "./styles.css";
import { useState, useEffect } from "react";
import useApiStore from "../api/ApiStore";
import { useQuery } from "react-query";
import { BASE_URL } from "../data/data";
import axios from "../api/axiosConfig";

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
const AdminDashboard = () => {
  const [adminSubmissionData, setAdminSubmissionData] = useState(data2);
  const { getAdminSubmission } = useApiStore();
  const [selectedOption, setSelectedOption] = useState("Web Development");
  const [points, setPoints] = useState();

  // const { error, isLoading, refetch } = useQuery(
  //   ["adminSubmission", selectedOption],

  //   () => getAdminSubmission(selectedOption),
  //   {
  //     enabled: false,
  //     onSuccess: (data) => {
  //       console.log(data);
  //       setAdminSubmissionData(data);
  //     },
  //   }
  // );

  // ----

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setAdminSubmissionData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const endpointMap = {
    "Web Development": `${BASE_URL}/submission/all/web`,
    "Mobile Development": `${BASE_URL}/submission/all/android`,
    "Machine Learning": `${BASE_URL}/submission/all/ml`,
  };

  const fetchDataForSelectedOption = async () => {
    const url = endpointMap[selectedOption];
    if (url) {
      console.log(url);
      fetchData(url);
    }
  };

  useEffect(() => {
    fetchDataForSelectedOption();
  }, [selectedOption]);

  // ----

  const handleClick = (optionselct) => {
    setSelectedOption(optionselct);
    console.log(optionselct);
  };

  const handlePointSubmit = () => {
    alert(points);
    setPoints();
  };

  return (
    <div className="admin-dashboard">
      <div className="custom-bg-color bounded flex flex-col items-center justify-center h-[100vh]">
        <h1 className="py-5 mt-20">Admin Dashboard</h1>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select your domain admin..</span>
          </div>
          <div className="dropdown dropdown-hover flex hoverBox justify-center">
            <div tabIndex={0} role="button" className="btn m-1">
              {selectedOption} &#x25BC;
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu mt-14 p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <a onClick={() => handleClick("Web Development")}>
                  Web Development
                </a>
              </li>
              <li>
                <a onClick={() => handleClick("Mobile Development")}>
                  Mobile Development
                </a>
              </li>
              <li>
                <a onClick={() => handleClick("Machine Learning")}>
                  Machine Learning
                </a>
              </li>
            </ul>
          </div>
        </label>

        <div className="submission-form rounded-lg flex flex-col items-center justify-center p-8 w-[50wh]">
          <div className="overflow-x-auto table-box">
            <table className="table my-5">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Day</th>
                  <th>Drive Link</th>
                  <th>Live Link</th>
                  <th>Give Points</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {adminSubmissionData.map((item) => (
                  <tr key={item.username}>
                    <td>{item.username}</td>
                    <td>{item.dayNo}</td>
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
                      <input
                        type="text"
                        value={points}
                        placeholder="Type here"
                        className="input input-bordered input-accent w-32"
                        onChange={(e) => setPoints(e.target.value)}
                      />
                    </td>
                    <td>
                      <button className="btn" onClick={handlePointSubmit}>
                        Submit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <input
                type="text"
                value={points}
                placeholder="Type here"
                className="input input-bordered input-accent w-32"
                onChange={(e) => setPoints(e.target.value)}
              />
              <input
                type="text"
                value={points}
                placeholder="Type here"
                className="input input-bordered input-accent w-32"
                onChange={(e) => setPoints(e.target.value)}
              />
              <button className="btn" onClick={handlePointSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
