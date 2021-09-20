import React from "react";

export default function Card() {
  const cardData = [
    {
      title: "Earnings (Monthly)",
      price: "$40,000",
      symbol: "fas fa-calendar fa-2x text-gray-300",
      color: "primary",
      range: false
    },
    {
      title: "Earnings (Annual)",
      price: "$215,000",
      symbol: "fas fa-dollar-sign fa-2x text-gray-300",
      color: "success",
      range: false
    },
    {
      title: "Tasks",
      price: "50%",
      symbol: "fas fa-clipboard-list fa-2x text-gray-300",
      color: "info",
      range: true
    },
    {
      title: "Pending Requests",
      price: "18",
      symbol: "fas fa-comments fa-2x text-gray-300",
      color: "warning",
      range: false
    },
  ];
  return (
    <div className="row">
      {cardData.map((element, val) => {
        return (
          <div className="col-xl-3 col-md-6 mb-4" key={val}>
            <div
              className={`card border-left-${element.color} shadow h-100 py-2`}
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div
                      className={`text-xs font-weight-bold text-${element.color} text-uppercase mb-1`}
                    >
                      {element.title}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {element.price}
                    </div>
                  </div>
                  {element.range ? <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{width: "50%"}}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div> : ''}
                  <div className="col-auto">
                    <i className={element.symbol}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
