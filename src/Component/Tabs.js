import React from 'react'
import {
    faCalendar,
    faClipboardList,
    faComment,
    faDollarSign,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
function Tabs() {
    const data = [
        {
          title: "EARNINGS (MONTHLY)",
          price: "$40,000",
          icon: faCalendar,
        },
        {
          title: "EARNINGS (ANNUAL)",
          price: "$215,000",
          icon: faDollarSign,
        },
        {
          title: "TASKS",
          price: "50%",
          icon: faClipboardList,
        },
        {
          title: "PENDING REQUESTS",
          price: "18",
          icon: faComment,
        },
      ];
  return (
    <div className="dashcomp">
    {data.map((dashboard) => (
      <div key={dashboard} className="dashcompchildone">
        <div className="card-body">
          <div className="no-gutters">
            <div className="col">
              <div className="col-text">{dashboard.title}</div>
              <div className="text-gray">{dashboard.price}</div>
            </div>
            <div className="col-auto">
              <FontAwesomeIcon
                className="childoneicon"
                icon={dashboard.icon}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )

}

export default Tabs