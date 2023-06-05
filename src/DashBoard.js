import React from "react";
import Base from "./Base/Base";
import Navbar from "./Component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import Tabs from "./Component/Tabs.js";
import Chart from "chart.js/auto";

import {
  faDownload,
} from "@fortawesome/free-solid-svg-icons";


import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

const DashBoard = () => {

// progress bar
const testData = [
  // { bgcolor: "#D21312", completed: 20 , name : "Server Migration" },
  { bgcolor: "#F9D949", completed: 40 , name : "Sales Tracking"},
  { bgcolor: "#3E6D9C", completed: 60 ,name : "Customer Database"},
  { bgcolor: "#A6D0DD", completed: 80 , name : "Payout Details"}, 
  {bgcolor:"#367E18", completed: 100 ,name : "Account Setup"},

];
//progress bar end


  const anchor = (
    <a target="_blank" rel="nofollow" href="https://undraw.co/">
      unDraw
    </a>
  );
  return (
    <Base>
    <Navbar/>
      {/* Dashboard body content */}
      <div className="childone">
        <h3 className="dashtext">Dashboard</h3>
        <button className="generatebtn">
          {" "}
          <FontAwesomeIcon className="dashnavenvo" icon={faDownload} /> Generate
          Report
        </button>
      </div>


      <Tabs/>

      <div className="dashchart">
        <div className="dashchartchildone">
          <div className="chartheader">
            <h6>Earnings Overview</h6>
            <div className="chartdropdown">{SplitBasicExample()}</div>
          </div>
          <div className="chartbody">
            <LineChart />
          </div>
        </div>
        <div className="dashchartchildtwo">
          <div className="chartheader">
            <h6>Revenue Sources</h6>
            <div className="chartdropdown">{SplitBasicExample()}</div>
          </div>
          <div className="chartbody">{PieChart()}</div>
        </div>
      </div>

      <div className="dashchart">
        <div className="dashprojectone">
          <div className="chartheader">
            <h6>Projects</h6>
          </div>
          <div className="chartbody">
          {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}  name={item.name}/>
      ))}
          </div>
        </div>
        <div className="dashprojecttwo">
          <div className="chartheader">
            <h6>Illustrations</h6>
          </div>
          <div className="chartbody">
            <img
              src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
              alt=""
            />
            <p>
              Add some quality, svg illustrations to your project courtesy of
              {anchor}, a constantly updated collection of beautiful svg images
              that you can use completely free and without attribution!
            </p>
            <a target="_blank" rel="nofollow" href="https://undraw.co/">
              Browse Illustrations on unDraw →
            </a>
          </div>
        </div>
      </div>

      <div className="dashchart">
        <div className="dashprojectone">
          <div className="chartheader">
            <h6>Projects</h6>
          </div>
          <div className="chartbodycolor">
          <div className="colorchildone">
            <div className="colortext">
            Primary
            </div>
            <div className="colorcode">
              #4e73df
            </div>
          </div>
          <div className="colorchiltwo">
            <div className="colortext">
            Success
            </div>
            <div className="colorcode">
              #1cc88a
            </div>
          </div>
          </div>
          <div className="chartbodycolor">
          <div className="colorchilthree">
            <div className="colortext">
            Info
            </div>
            <div className="colorcode">
              #36b9cc
            </div>
          </div>
          <div className="colorchilfour">
            <div className="colortext">
            Warning
            </div>
            <div className="colorcode">
              #f6c23e
            </div>
          </div>
          </div>
          <div className="chartbodycolor">
          <div className="colorchilfive">
            <div className="colortext">
            Danger
            </div>
            <div className="colorcode">
              #e74a3b
            </div>
          </div>
          <div className="colorchilsix">
            <div className="colortext">
            Secondary
            </div>
            <div className="colorcode">
              #858796
            </div>
          </div>
          </div>
          <div className="chartbodycolor">
          <div className="colorchilseven">
            <div className="colortext">
            Light
            </div>
            <div className="colorcodeA">
              #f8f9fc
            </div>
          </div>
          <div className="colorchileight">
            <div className="colortext">
            Dark
            </div>
            <div className="colorcode">
              #5a5c69
            </div>
          </div>
          </div>
        </div>
        <div className="dashprojecttwo">
          <div className="chartheader">
            <h6>Development Approach</h6>
          </div>
          <div className="chartbody">
            <p>
              SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
              order to reduce CSS bloat and poor page performance. Custom CSS
              classes are used to create custom components and custom utility
              classes.
            </p>
           <p>
           Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
           </p>
          </div>
        </div>
      </div>
      {/* Dashboard body content Ends */}
    </Base>
  );
};

export default DashBoard;

function SplitBasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle />
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" disabled>
          Dropdown Header:
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Another action</Dropdown.Item>
        <div class="dropdown-divider"></div>
        <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const labels = ["January", "February", "March", "April", "May", "June"];
const chartdata = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const LineChart = () => {
  return (
    <div>
      <Line data={chartdata} />
    </div>
  );
};

function PieChart() {
  const data = {
    labels: ["Go", "Python", "Kotlin", "JavaScript", "R", "Swift"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22, 20, 18, 15],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: 400, textAlign: "center" }}>
      <Pie data={data} width={50} height={50} />
    </div>
  );
}

const ProgressBar = (props) => {
  const { bgcolor, completed, name} = props;

  const containerStyles = {
    height: 20,
    width: '80%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  const namestyle = {
    position: "relative",
    bottom:"25px",
    color: 'black',
    float:"left",
    fontSize: 14,

  }
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <p style={namestyle}>{`${name}`}</p>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

