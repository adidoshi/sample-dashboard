import React from "react";

export default function Button() {
  const btnData = {
    btnCircle: [
      {
        color: "primary",
        symbol: "fab fa-facebook-f",
      },
      {
        color: "success",
        symbol: "fas fa-check",
      },
      {
        color: "info",
        symbol: "fas fa-info-circle",
      },
      {
        color: "warning",
        symbol: "fas fa-exclamation-triangle",
      },
      {
        color: "danger",
        symbol: "fas fa-trash",
      },
    ],
    spliBtnData: [
      {
        symbol: "flag",
        bgColor: "primary",
        title: "Primary",
      },
      {
        symbol: "check",
        bgColor: "success",
        title: "Success",
      },
      {
        symbol: "info-circle",
        bgColor: "info",
        title: "Info",
      },
      {
        symbol: "exclamation-triangle",
        bgColor: "warning",
        title: "Warning",
      },
      {
        symbol: "trash",
        bgColor: "danger",
        title: "Danger",
      },
      {
        symbol: "arrow-right",
        bgColor: "secondary",
        title: "Secondary",
      },
      {
        symbol: "arrow-right",
        bgColor: "light",
        title: "Light",
      },
    ],
  };
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

      <div className="row">
        <div className="col-lg-6">
          {/* <!-- Circle Buttons --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Circle Buttons
              </h6>
            </div>
            <div className="card-body">
              <p>
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </p>
              {/* <!-- Circle Buttons (Default) --> */}
              <div className="mb-2">
                <code>.btn-circle</code>
              </div>
              {btnData.btnCircle.map((elem, circle) => {
                return (
                  <a
                    href="/"
                    className={`btn btn-${elem.color} btn-circle mx-1`}
                    key={circle}
                  >
                    <i className={elem.symbol}></i>
                  </a>
                );
              })}

              {/* <!-- Circle Buttons (Small) --> */}
              <div className="mt-4 mb-2">
                <code>.btn-circle .btn-sm</code>
              </div>
              {btnData.btnCircle.map((elem, small) => {
                return (
                  <a
                    href="/"
                    className={`btn btn-${elem.color} btn-circle btn-sm mx-1`}
                    key={small}
                  >
                    <i className={elem.symbol}></i>
                  </a>
                );
              })}

              {/* <!-- Circle Buttons (Large) --> */}
              <div className="mt-4 mb-2">
                <code>.btn-circle .btn-lg</code>
              </div>
              {btnData.btnCircle.map((elem, small) => {
                return (
                  <a
                    href="/"
                    className={`btn btn-${elem.color} btn-circle btn-lg mx-1`}
                    key={small}
                  >
                    <i className={elem.symbol}></i>
                  </a>
                );
              })}
            </div>
          </div>

          {/* <!-- Brand Buttons --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Brand Buttons
              </h6>
            </div>
            <div className="card-body">
              <p>
                Google and Facebook buttons are available featuring each
                company's respective brand color. They are used on the user
                login and registration pages.
              </p>
              <p>
                You can create more custom buttons by adding a new color
                variable in the
                <code>_variables.scss</code> file and then using the Bootstrap
                button variant mixin to create a new style, as demonstrated in
                the <code>_buttons.scss</code>
                file.
              </p>
              <a href="/" className="btn btn-google btn-block">
                <i className="fab fa-google fa-fw"></i>
                .btn-google
              </a>
              <a href="/" className="btn btn-facebook btn-block">
                <i className="fab fa-facebook-f fa-fw"></i> .btn-facebook
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Split Buttons with Icon
              </h6>
            </div>
            <div className="card-body">
              <p>
                Works with any button colors, just use the{" "}
                <code>.btn-icon-split</code> class and the markup in the
                examples below. The examples below also use the
                <code>.text-white-50</code> helper class on the icons for
                additional styling, but it is not required.
              </p>
              {btnData.spliBtnData.map((elem, split) => {
                return (
                  <>
                    <a
                      href="/"
                      className={`btn btn-${elem.bgColor} btn-icon-split`}
                      key={split}
                    >
                      <span className="icon text-white-50">
                        <i className={`fas fa-${elem.symbol}`}></i>
                      </span>
                      <span className="text">Split Button {elem.title}</span>
                    </a>
                    <div className="mb-2"></div>
                  </>
                );
              })}

              <p>Also works with small and large button classes!</p>
              <a href="/" className="btn btn-primary btn-icon-split btn-sm">
                <span className="icon text-white-50">
                  <i className="fas fa-flag"></i>
                </span>
                <span className="text">Split Button Small</span>
              </a>
              <div className="my-2"></div>
              <a href="/" className="btn btn-primary btn-icon-split btn-lg">
                <span className="icon text-white-50">
                  <i className="fas fa-flag"></i>
                </span>
                <span className="text">Split Button Large</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
