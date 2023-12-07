import { useState, useEffect } from "react";
import "./styles.css";
// import { useDayNumber } from "../hooks/useDayNo";
import { useMutation } from "react-query";
import { useQuery } from "react-query";
import useApiStore from "../api/ApiStore";
import { Loader } from "../components/Loader";
const UserDashBoard = () => {

  const { submission, getSubmission } = useApiStore();
  const mutation = useMutation(submission);

  // const onSuccess = async (result) => {
  //   try {
  //     console.log(result);
  //     await setDayNo((result) => setDayNo(result));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useDayNumber(onSuccess);


  const fullName = localStorage.getItem('fullName');
  const [underReviewSubmissions, setUnderReviewSubmissions] = useState({ results: [] });
  const [acceptedSubmissions, setAcceptedSubmissions] = useState({ results: [] });
  const { isLoading, onError } = useQuery('getSubmission', getSubmission,
    {
      onSuccess: (data) => {
        const { accepted, underReview } = data;
        console.log(accepted);
        console.log(underReview);
        setAcceptedSubmissions((prev) => ({ ...prev, results: accepted }));
        setUnderReviewSubmissions((prev)=>({...prev,results:underReview}))
        console.log(acceptedSubmissions);
      }
    });


    const [activeTab, setActiveTab] = useState("");
  const [dayNo, setDayNo] = useState(1);
  const [driveLink, setDriveLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [selectedOption, setSelectedOption] = useState("web");
  const handleDriveLinkChange = (e) => {
    setDriveLink(e.target.value);
  };
  const handleDayNoChange = (e) => {
    setDayNo(e.target.value);
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };
  const handleLiveLinkChange = (e) => {
    setLiveLink(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const isValidUrl = urlRegex.test(driveLink);

    if (!isValidUrl) {
      console.error("Invalid URL");
      alert(`Invalid link`);
      return;
    }


    console.log(dayNo);
    console.log("Form submitted:", {
      driveLink,
      liveLink,
      domain: selectedOption,
      dayNo: parseInt(dayNo)
    });
    const data = {
      driveLink,
      liveLink,
      domain: selectedOption,
      dayNo,
    };
    mutation.mutate(data, {
      onSuccess: () => {
        alert("Data reached dcc successfully");
      },
      onError: (error) => {
        alert(error);
      },

    });
  };

  if (mutation.isLoading) {
    return <Loader />;
  }
  else {

    return (
      <>
        <div className="custom-bg-color bounded flex flex-col items-center justify-center  z-50">
          <h1 className="pb-7 text-red-500 ">{`${fullName ? `${fullName}'s` : "User"} DashBoard`}</h1>

          <div className="submission-form rounded-lg lg:flex items-center justify-center p-8 w-[50wh]">
            <select
              className="select select-bordered w-full max-w-xs"
              value={selectedOption}
              onChange={handleChange}
            >
              <option disabled selected>
                Select Domain
              </option>
              <option name="web" value="web">
                Web Development
              </option>
              <option name="android" value="android">
                Android Development
              </option>
              <option name="ml" value="ml">
                Artificial Intelligence & Machine Learning
              </option>
            </select>
            <label className="form-control w-full max-w-xs p-3 mb-9 ">
              <div className="label ">
                <span className="label-text text-white">Day Number</span>
                <span className="label-text-alt text-red-500">*</span>
              </div>
              <input
                type="number"
                placeholder="Mandatory"
                name="day"
                value={dayNo}
                onChange={handleDayNoChange}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs p-3 mb-9 ">
              <div className="label ">
                <span className="label-text text-white">Drive Link</span>
                <span className="label-text-alt text-red-500">*</span>
              </div>
              <input
                type="text"
                placeholder="Mandatory"
                name="driveLink"
                value={driveLink}
                onChange={handleDriveLinkChange}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs mb-9">
              <div className="label flex-col">
                <span className="label-text text-white ">Live Link</span>
              </div>
              <input
                type="text"
                placeholder="Live sample (optional)"
                name="liveLink"
                value={liveLink}
                onChange={handleLiveLinkChange}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <button
            className="btn -mt-9 mb-8 text-white hover:bg-green-500 hover:text-white"
            onClick={handleSubmit}
            disabled={!driveLink}
          >
            Submit
          </button>
         
          <div className="custom-bg-color bounded flex flex-col items-center justify-center ">
        
        <div className="submission-form rounded-lg lg:flex items-center justify-center p-8 w-[1000wh]">
          <div role="tablist" className="tabs-lg tabs-lifted">
            <a
              role="tab"
              className={`tab ${activeTab === "/underReview" ? "tab-active text-black" : "text-white"}`}
              onClick={() => setActiveTab("/underReview")}
            >
              Under Review
            </a>
            <a
              role="tab"
              className={`tab ${activeTab === "/acceptedSubmissions" ? "tab-active text-black" : "text-white"}`}
              onClick={() => setActiveTab("/acceptedSubmissions")}
            >
              Accepted Submissions
            </a>
          </div>
        </div>
        <div className="table-box-prev">
          {activeTab === "" ? (
            <h2 className="text-white items-center mt-8">Track Status</h2>
          ) : (
            <div className="table-box overflow-x-auto">
              {activeTab && (
                <table className="table-lg my-2 w-[100vh]">
                  <thead>
                    <tr>
                      <th>DayNo</th>
                      <th>Submission Link</th>
                      <th>Domain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeTab === "/underReview" ? (
                      underReviewSubmissions.results && underReviewSubmissions.results.length > 0 ? (
                        underReviewSubmissions.results.map((item) => (
                          <tr key={item.dayNo}>
                            <td>{item.dayNo}</td>
                            <td><a className="hover:text-red-500" href={item.driveLink}>{item.driveLink}</a></td>
                            <td>{item.domain}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2">No submission found</td>
                        </tr>
                      )
                    ) : (
                      acceptedSubmissions.results && acceptedSubmissions.results.length > 0 ? (
                        acceptedSubmissions.results.map((item, index) => (
                          <tr key={index}>
                           <td>{item.dayNo}</td>
                           <td><a>{item.driveLink}</a></td>
                            <td>{item.domain}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2">No submission found</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
        </div>
      </>
    );
  }
};

export default UserDashBoard;
