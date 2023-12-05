import { React, useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { BASE_URL } from "../data/data";
import { Loader } from "./Loader";

const dummydata = [
  {
    dayNo: 1,
    title: "HTML AND CSS BASICS",
    description:
      "<p>HTML and CSS are fundamental technologies for web development. HTML is used for structuring web content, while CSS is used for styling. Understanding these basics is crucial for building modern websites.</p>",
  },
  {
    dayNo: 2,
    title: "JavaScript Fundamentals",
    description:
      "JavaScript is a versatile programming language that adds interactivity to web pages. Learn the basics of variables, functions, and control flow to start your journey into web development.",
  },
  {
    dayNo: 3,
    title: "Responsive Web Design",
    description:
      "Create web designs that look good on all devices. Learn about media queries and flexible grid layouts to make your websites responsive and user-friendly.",
    link: "https://example.com/responsive-web-design",
  },
  {
    dayNo: 4,
    title: "Introduction to Git and GitHub",
    description:
      "Version control is essential for collaborative coding. Git and GitHub are widely used tools for tracking changes and managing collaborative projects. Learn the basics of commits, branches, and pull requests.",
    link: "https://example.com/git-and-github",
  },
  {
    dayNo: 5,
    title: "AJAX and Asynchronous JavaScript",
    description:
      "AJAX allows you to update parts of a web page without reloading the entire page. Explore asynchronous JavaScript and learn how to make requests to a server, handle responses, and update your website dynamically.",
    link: "https://example.com/ajax-and-async-js",
  },
  {
    dayNo: 6,
    title: "Introduction to Node.js",
    description:
      "Node.js is a powerful JavaScript runtime that allows you to run JavaScript on the server side. Explore the basics of Node.js and understand how it can be used to build scalable and fast server-side applications.",
    link: "https://example.com/intro-to-nodejs",
  },
  {
    dayNo: 7,
    title: "RESTful API Design",
    description:
      "Learn the principles of designing RESTful APIs. Understand HTTP methods, status codes, and resourceful URL design. Create APIs that are scalable, maintainable, and follow best practices.",
    link: "https://example.com/restful-api-design",
  },
  {
    dayNo: 8,
    title: "Introduction to React.js",
    description:
      "React.js is a popular JavaScript library for building user interfaces. Learn the basics of React components, state, and props. Understand the virtual DOM and how React makes building UIs more efficient.",
    link: "https://example.com/intro-to-reactjs",
  },
  {
    dayNo: 9,
    title: "State Management with Redux",
    description:
      "Redux is a predictable state container for JavaScript apps. Explore how Redux manages the state of your application and facilitates state changes in a predictable way. Understand actions, reducers, and the store.",
    link: "https://example.com/redux-state-management",
  },
  {
    dayNo: 10,
    title: "Deploying a Website",
    description:
      "Explore various methods of deploying your website to make it accessible to the world. Learn about hosting options and best practices for a smooth deployment process.",
    link: "https://example.com/deploying-a-website",
  },
];

function Taskset() {
  const [activeTab, setActiveTab] = useState("Web Development");
  const [taskData, setTaskData] = useState({});
  const [clickDay, setClickDay] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(dummydata);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const endpointMap = {
      "Web Development": `${BASE_URL}/task/all/web`,
      "Mobile Development": `${BASE_URL}/task/all/android`,
      "Machine Learning": `${BASE_URL}/task/all/ml`,
    };

    const fetchDataForActiveTab = async () => {
      const url = endpointMap[activeTab];
      if (url) {
        fetchData(url);
      }
    };
    fetchDataForActiveTab();
  }, [activeTab]);


  // ---
  function getDayDifferenceFromSpecificDate(targetDate) {
    // Convert the target date string to a Date object
    const targetDateTime = new Date(`${targetDate}T00:00:00+05:30`);

    // Get the current date in IST
    const currentDate = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - targetDateTime;

    // Convert the time difference to days
    const dayDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

    return dayDifference;
  }

  const targetDate = "2023-12-04";
  const curDay = getDayDifferenceFromSpecificDate(targetDate);

  // ---

  const handleClick = (platform) => {
    setActiveTab(platform);
  };

  const handleCheck = (e) => {
    setTaskData(e);
  };
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div id="taskset">
      <div className="dropdown dropdown-hover flex hoverBox justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          {activeTab} &#x25BC;
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
      <div className="taskList">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Day</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                // Check if item.day is greater than curDay before rendering
                if (item.dayNo > curDay) {
                  return null; // Skip rendering this row
                }

                return (
                  <tr key={index}>
                    <th>{item.dayNo}</th>
                    <td>{item.title}</td>
                    <td>
                      <label
                        htmlFor="my_modal_7"
                        className="btn"
                        onClick={() => handleCheck(item)}
                      >
                        Check
                      </label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">
            Day {taskData.dayNo} : {taskData.title}
          </h3>
          <div className="py-4">{ReactHtmlParser(taskData.description)}</div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
}

export default Taskset;
