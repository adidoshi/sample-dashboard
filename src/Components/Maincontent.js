import React from "react";
import Card from "./Card";
import PageHeading from "./PageHeading";

export default function Maincontent() {
  const projectData = [
    {
      heading: "Server Migration",
      value: "20%",
      status: "20%",
      bgColor: "danger",
    },
    {
      heading: "Sales Tracking",
      value: "40%",
      status: "40%",
      bgColor: "warning",
    },
    {
      heading: "Customer Database",
      value: "60%",
      status: "60%",
      bgColor: "primary",
    },
    {
      heading: "Payout Details",
      value: "80%",
      status: "80%",
      bgColor: "info",
    },
    {
      heading: "Account Setup",
      value: "100%",
      status: "Complete!",
      bgColor: "success",
    },
  ];

  const cardColorData = [
    {
        bgColor: "primary",
        btn: "Primary",
        code: "#4e73df",
        text: "white"
       },
       {
        bgColor: "success",
        btn: "Success",
        code: "#1cc88a",
        text: "white"
       },
       {
        bgColor: "info",
        btn: "Info",
        code: "#36b9cc",
        text: "white"
       },
       {
        bgColor: "warning",
        btn: "Warning",
        code: "#f6c23e",
        text: "white"
       },
       {
        bgColor: "danger",
        btn: "Danger",
        code: "#e74a3b",
        text: "white"
       },
       {
        bgColor: "secondary",
        btn: "Secondary",
        code: "#858796",
        text: "white"
       },
       {
        bgColor: "light",
        btn: "Light",
        code: "#f8f9fc",
        text: "black"
       },
       {
        bgColor: "dark",
        btn: "Dark",
        code: "#5a5c69",
        text: "white"
       },
  ]
  return (
    <div className="container-fluid">
    <PageHeading />
    <Card />
      {/* <div className="row"> */}

      {/* <!-- Area Chart --> */}
      {/* <div className="col-xl-8 col-lg-7"> */}
      {/* <div className="card shadow mb-4"> */}
      {/* <!-- Card Header - Dropdown --> */}
      {/* <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="/">Action</a>
                                            <a className="dropdown-item" href="/">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Something else here</a>
                                        </div>
                                    </div>
                                </div> */}
      {/* <!-- Card Body --> */}
      {/* <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* <!-- Pie Chart --> */}
      {/* <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4"> */}
      {/* <!-- Card Header - Dropdown --> */}
      {/* <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="/">Action</a>
                                            <a className="dropdown-item" href="/">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Something else here</a>
                                        </div>
                                    </div>
                                </div> */}
      {/* <!-- Card Body --> */}
      {/* <div className="card-body">
                                    <div className="chart-pie pt-4 pb-2">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div className="mt-4 text-center small">
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-primary"></i> Direct
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-success"></i> Social
                                        </span>
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-info"></i> Referral
                                        </span>
                                    </div>
                                </div> */}
      {/* </div>
                        </div>
                    </div> */}

      <div className="row">
        {/* <!-- Content Column --> */}
        <div className="col-lg-6 mb-4">
          {/* <!-- Project Card Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              {projectData.map((elem, proj) => {
                  return (<div key={proj}>
              <h4 className="small font-weight-bold" >
                {elem.heading} <span className="float-right">{elem.status}</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className={`progress-bar bg-${elem.bgColor}`}
                  role="progressbar"
                  style={{ width: `${elem.value}` }}
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              </div>)
               })}
             
            </div>
            
          </div>

          {/* <!-- Color System --> */}
          <div className="row">
              {cardColorData.map((elem, card) => {
                  return (
                <div className="col-lg-6 mb-4" key={card}>
              <div className={`card bg-${elem.bgColor} text-${elem.text} shadow`}>
                <div className="card-body">
                  {elem.btn}
                  <div className={`text-${elem.text}-50 small`}>{elem.code}</div>
                </div>
              </div>
            </div>
            )
              })}
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          {/* <!-- Illustrations --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Illustrations
              </h6>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "25rem" }}
                  src="img/undraw_posting_photo.svg"
                  alt="..."
                />
              </div>
              <p>
                Add some quality, svg illustrations to your project courtesy of
                <a href="https://undraw.co/">unDraw</a>, a constantly updated
                collection of beautiful svg images that you can use completely
                free and without attribution!
              </p>
              {/* <a target="_blank"  rel="noreferrer" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                        unDraw &rarr;</a> */}
            </div>
          </div>

          {/* <!-- Approach --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Development Approach
              </h6>
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p className="mb-0">
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
