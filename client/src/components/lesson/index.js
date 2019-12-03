import React from "react";
import "./style.css";

function tableOfContents() {
    return (
        <div className="container">
            <h2>Table of Contents</h2>

            <div id="table-of-contents" className="col-12 col-md-6 p-4">
                <ul className="list-unstyled">
                    <li>
                        CSS

                        <ul>
                            <li>
                                <a href="/lesson/css/box-model">Box Model</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        ES6

                        <ul>
                            <li>
                                <a href="/lesson/es6/variables">Variables</a>
                            </li>
                            <li>
                                <a href="/lesson/es6/function">Functions</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        Logic

                        <ul>
                            <li>
                                <a href="/lesson/logic/mvc">Model-Views-Controller</a>
                            </li>
                            <li>
                                <a href="/lesson/logic/time-complexity">Big O and Time Complexity</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default tableOfContents;