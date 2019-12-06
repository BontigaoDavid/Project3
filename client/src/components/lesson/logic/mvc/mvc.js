import React from "react";
import "./style.css";
// import {FormBtn} from "../../../Form";

function mvc() {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 mb-3 d-flex justify-content-end">
                    <li className="breadcrumb-item" aria-current="page">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <a href="/lesson">Lessons</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <a href="/lesson/logic/mvc">Model-View-Controller (MVC) Model</a>
                    </li>
                </ol>
            </nav>
            <div className="row mvc-lesson ">
                <h2>Model-Views-Controller (MVC)</h2>
                <div>
                    <img id="exp-img" className="d-block mx-auto" src={require("./explanationimage.png")} alt="explanation" />
                    <p>
                        Model-Views-Controller is a design pattern commonly used for developing a user-interface. It separates code and logic into 3 different elements that connect to each other: the model, the view, and the controller. The model defines the data structure that will the database will contain which will commonly be the schema of the database language. The model then is rendered to the user through some interface known as the views. The views is what is rendered to the user and sends inputs in to the controller. The controller contains a number of functionalities that modifies the model and accesses the database.
                    </p>
                    <h4 className="text-center">MVC Folder Structure (React)</h4>
                    <img className="d-block mx-auto" src={require("./folderstructure.png")} alt="folder-structure" />
                    <div id="folder-img" className="text-center">
                        (full application folder structure)
                    </div>
                    <h4 className="text-center">Views</h4>
                    <p>
                        <div id="client-folder-div" className="float-left text-center">
                            <p id="client-folder-label">
                            <img src={require("./client.png")} alt="client" />
                                (client folder)
                            </p>
                            <img src={require("./client.png")} alt="client" />
                        </div>
                        In this project we use React which commonly follows the MVC design. In the client folder the views of the application are held. These are the different parts of what the user will see and interact with. We include the different pages and components such as buttons, forms, inputs and a navbar. We also style our elements using css and provide image assets for the webpage in this folder as well.
                    </p>
                    <img className="d-block mx-auto" src={require("./app-folder.png")} alt="app-folder" />
                    <p className="text-center">
                        (App.js using React Router)
                    </p>
                    <p>
                        Our App.js is whats rendered to the the root of the html document. Using the router, App.js renders different pages and components depending on the route of the url they visit specified by the exact path property on each route tag. Each page uses buttons and inputs fields for the user to interact with.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <img className="mb-3" style={{ width: "45%"}} src={require("./controller.png")} alt="controller" />
                        <img style={{ width: "45%" }} src={require("./user-model.png")} alt="user-model" />
                    </div>
                    <p>
                        The buttons and inputs make calls to the controller.js(left) in the controllers folder and passes in parameters from the fields the user filled out. The controller has a number of functions that can makes queries to the database and can create, modify and delete entries on the database. User.js(right) in the models folder contains the datastructure for the entries in the database. It uses mongoose a database language that allows the application to store objects with properties.   
                    </p>
                </div>
            </div>
            
            {/* <FormBtn style={{marginTop: "50px"}}>Next</FormBtn> */}
        </div>
    )
}

export default mvc;