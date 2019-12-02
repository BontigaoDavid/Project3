import React from "react";
import "./style.css";

function Home() {
    return (
        <div className="container">
            <div>
                <h2>Table of Contents</h2>
            </div>

            <ul id="table-of-contents" style={{ listStyleType: "none" }}>

                <li>
                    <ul style={{ listStyleType: "none" }}>
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
                </li>

            </ul>


        </div>
    )
}

export default Home;