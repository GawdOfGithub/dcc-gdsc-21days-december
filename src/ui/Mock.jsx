import { useState, useEffect } from "react";
import "./styles.css";
import { useMutation } from "react-query";
import { useQuery } from "react-query";
import useApiStore from "../api/ApiStore";
import { Loader } from "../components/Loader";

const Mock = () => {
  const { submission, getSubmission } = useApiStore();
  const [acceptedSubmissions, setAcceptedSubmissions] = useState({ results: [] });
  const [underReviewSubmissions, setUnderReviewSubmissions] = useState({ results: [] });

  useQuery('getSubmission', getSubmission, {
    onSuccess: (Data) => {
      const { accepted, underReview } = Data;
      console.log(accepted);
      console.log(underReview);
      setAcceptedSubmissions({ results: accepted });
      setUnderReviewSubmissions({ results: underReview });
      console.log(acceptedSubmissions);
    }
  });

  const [activeTab, setActiveTab] = useState("");
  const [dayNo, setDayNo] = useState(1);
  const [driveLink, setDriveLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [selectedOption, setSelectedOption] = useState("web");

  const handleDriveLinkChange = (e) => setDriveLink(e.target.value);
  const handleDayNoChange = (e) => setDayNo(e.target.value);
  const handleChange = (event) => setSelectedOption(event.target.value);
  const handleLiveLinkChange = (e) => setLiveLink(e.target.value);

  const mutation = useMutation((data) => {
    console.log(dayNo);
    console.log("Form submitted:", { driveLink, liveLink, domain: selectedOption, dayNo: parseInt(dayNo) });
    return submission(data); // Assuming submission function returns a promise
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const isValidUrl = urlRegex.test(driveLink);

    if (!isValidUrl) {
      console.error("Invalid URL");
      alert(`Invalid link`);
      return;
    }

    mutation.mutate({
      driveLink,
      liveLink,
      domain: selectedOption,
      dayNo,
    });
  };

  if (mutation.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="custom-bg-color bounded flex flex-col items-center justify-center h-[100vh]">
        <h1 className="text-white m-7" action="/">Leader Board</h1>
        <div className="submission-form rounded-lg lg:flex items-center justify-center p-8 w-[50wh]">
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
                <table className="table-lg my-2">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Enrollment No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeTab === "/underReview" ? (
                      underReviewSubmissions.results && underReviewSubmissions.results.length > 0 ? (
                        underReviewSubmissions.results.map((item, index) => (
                          <tr key={index}>
                            <td>{item.dayNo}</td>
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
    </>
  );
};

export default Mock;
