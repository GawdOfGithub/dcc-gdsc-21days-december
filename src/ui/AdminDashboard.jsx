import "./styles.css";
import { useState, useEffect } from "react";
import useApiStore from "../api/ApiStore";
import { useQuery } from "react-query";
import { BASE_URL } from "../data/data";
import axios from "../api/axiosConfig";


const AdminDashboard = () => {
  const dummySelectSubmission = {
    username: "bhupendra_jogi",
    dayNo: 69,
    driveLink: "www.google.com",
    status: "pending",
    liveLink: "www.google.com",
    submissionId: "123456789",
  };
  const [adminSubmissionData, setAdminSubmissionData] = useState([]);
  const { getAdminSubmission } = useApiStore();
  const [selectedOption, setSelectedOption] = useState("Web Development");
  const [points, setPoints] = useState();
  const [selectSubmission, setSelectSubmission] = useState(dummySelectSubmission);

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
  };

  const handleDataSubmit = () => {
    const data = {
      submissionId: selectSubmission.submissionId,
      points: points,
    };

    axios
      .post(`${BASE_URL}/submission/evaluation`, data)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      setSelectSubmission(dummySelectSubmission);
      setPoints(0);
  };

  const handleSubmissionSelect = (item) => {
    console.log(item);
    setSelectSubmission(item);
  };

  return (
    <div className="admin-dashboard">
      <div className="custom-bg-color bounded flex flex-col items-center justify-center">
        <h1 className="py-5 mt-20">Admin Dashboard</h1>

        <label className="form-control w-full flex items-center max-w-xs">
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

        <div className="submission-form rounded-lg flex flex-col items-center justify-center h-4/6 mb-20 p-8">
          <div className="overflow-x-auto table-box">
            <table className="table my-5">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Day</th>
                  <th>Drive Link</th>
                  <th>Live Link</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {adminSubmissionData.map((item) => (
                  <tr key={item.submissionId}>
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
                      <button
                        className="btn"
                        onClick={() => handleSubmissionSelect(item)}
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full">
            <div className="flex items-center mt-10 w-full justify-center">
              <div className="badge badge-accent w-48 text-xl h-10">
                SUBMISSION
              </div>
            </div>
            <hr className="m-2"></hr>
            <div></div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">UserName?</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-success">
                {selectSubmission?.username}
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">Day?</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-success">
                {selectSubmission?.dayNo}
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">Domain?</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-success">
                {selectedOption}
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">Points?</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-success">
                <input
                  type="text"
                  value={points}
                  placeholder="Type here"
                  className="input input-bordered input-secondary bg-zinc-100 w-32"
                  onChange={(e) => setPoints(e.target.value)}
                />
              </div>
            </div>

            <button className="btn" onClick={handleDataSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
