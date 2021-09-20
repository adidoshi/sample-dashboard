import React from 'react'

export default function Colors() {
    const colorData = {
        textColor: [
            {
                val: 100,
                bgColor: "bg-dark",
                white: false
            },
            {
                val: 200,
                bgColor: "bg-dark",
                white: false
            },
            {
                val: 300,
                bgColor: "bg-dark",
                white: false
            },
            {
                val: 400,
                bgColor: "bg-dark",
                white: false
            },
            {
                val: 500,
                white: true
            },
            {
                val: 600,
                white: true
            },
            {
                val: 700,
                white: true
            },
            {
                val: 800,
                white: true
            },
            {
                val: 900,
                white: true
            },
        ],
        backgroundColor: [
            {
                color: "primary"
            },
            {
                color: "secondary"
            },
            {
                color: "success"
            },
            {
                color: "info"
            },
            {
                color: "warning"
            },
            {
                color: "light"
            },
            {
                color: "dark"
            },
        ]
    }
    return (
        <div className="container-fluid">
                    {/* <!-- Page Heading --> */}
                    <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
                    <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                            href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                        below were created to extend this theme past the default utility classes built into Bootstrap's
                        framework.</p>

                    {/* <!-- Content Row --> */}
                    <div className="row">

                        {/* <!-- First Column --> */}
                        <div className="col-lg-4">

                            {/* <!-- Custom Text Color Utilities --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                                </div>
                                <div className="card-body">
                                    {colorData.textColor.map((elem, color) => {
                                        return (
                                        <p className={`text-gray-${elem.val} p-3 ${elem.bgColor} m-0`} key={color}>.text-gray-{elem.val}</p>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* <!-- Custom Font Size Utilities --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                                </div>
                                <div className="card-body">
                                    <p className="text-xs">.text-xs</p>
                                    <p className="text-lg mb-0">.text-lg</p>
                                </div>
                            </div>

                        </div>

                        {/* <!-- Second Column --> */}
                        <div className="col-lg-4">

                            {/* <!-- Background Gradient Utilities --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities
                                    </h6>
                                </div>
                                <div className="card-body">
                                    {colorData.backgroundColor.map((elem, bg) => {
                                        return (
                                        <div className={`px-3 py-5 bg-gradient-${elem.color} text-white`} key={bg}>.bg-gradient-{elem.color}</div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>

                        {/* <!-- Third Column --> */}
                        <div className="col-lg-4">

                            {/* <!-- Grayscale Utilities --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities
                                    </h6>
                                </div>
                                <div className="card-body">
                                    {colorData.textColor.map((elem, gray) => {
                                        return (
                                        <div className={`p-3 bg-gray-${elem.val} ${elem.white ? 'text-white' : ''}`} key={gray}>.bg-gray-{elem.val}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
    )
}
