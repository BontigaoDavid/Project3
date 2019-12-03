import React from "react";
// import "./style.css";

function tableOfContents() {
    return (
        <div className="container">
            <h2>Table of Contents</h2>

            <div className="row">
                <div className="col-12 col-md-4 d-flex">
                    <div className="card toc justify-content-stretch w-100">
                        <div className="card-header">CSS</div>
                        <div className="card-body py-2">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="/lesson/css/box-model">Box Model</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex">
                    <div className="card toc justify-content-stretch w-100">
                        <div className="card-header">ES6</div>
                        <div className="card-body py-2">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="/lesson/es6/variables">Variables</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/lesson/es6/function">Functions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex">
                    <div className="card toc justify-content-stretch w-100">
                        <div className="card-header">Algorithms</div>
                        <div className="card-body py-2">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="/lesson/logic/mvc">Model-Views-Controller</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/lesson/logic/time-complexity">Big O and Time Complexity</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
{/* 
            <div id="table-of-contents" className="col-12 col-md-6 p-4">
                <ul className="list-unstyled">
                    <li>
                        CSS

                        
                    </li>

                    <li>
                        ES6

                        
                    </li>

                    <li>
                        Logic

                        
                    </li>
                </ul>
            </div> */}

        </div>
    )
}

export default tableOfContents;