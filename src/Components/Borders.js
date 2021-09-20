import React from "react";

export default function Borders() {
  const borderData = [
    {
      color: "primary",
      border: "left",
    },
    {
      color: "primary",
      border: "bottom",
    },
    {
      color: "secondary",
      border: "left",
    },
    {
      color: "secondary",
      border: "bottom",
    },
    {
      color: "success",
      border: "left",
    },
    {
      color: "success",
      border: "bottom",
    },
    {
      color: "info",
      border: "left",
    },
    {
      color: "info",
      border: "bottom",
    },
    {
      color: "warning",
      border: "left",
    },
    {
      color: "warning",
      border: "bottom",
    },
    {
      color: "danger",
      border: "left",
    },
    {
      color: "danger",
      border: "bottom",
    },
    {
      color: "dark",
      border: "left",
    },
    {
      color: "dark",
      border: "bottom",
    },
  ];
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Border Left Utilities --> */}
        {borderData.map((elem, border) => {
            return (
          <div className="col-lg-6" key={border}>
            <div className={`card mb-4 py-3 border-${elem.border}-${elem.color}`}>
              <div className="card-body">.border-{elem.border}-{elem.color}</div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}
