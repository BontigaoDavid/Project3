import React from "react";
import "./style.css";

function mvc() {
    return (
        <div className="row">
            <h2>Model-Views-Controller (MVC)</h2>
            <div>
                <img id="exp-img" className="d-block mx-auto" src={require("./explanationimage.png")} />
                <p>
                    Model-Views-Controller is a design pattern commonly used for developing a user-interface. It separates code and logic into 3 different elements that connect to each other: the model, the view, and the controller. The model defines the data structure that will the database will contain which will commonly be the schema of the database language. The model then is rendered to the user through some interface known as the views. The views is what is rendered to the user and sends inputs in to the controller. The controller contains a number of functionalities that modifies the model and accesses the database.
                </p>
                <h4 className="text-center">MVC Folder Structure (React)</h4>
                <img className="d-block mx-auto" src={require("./folderstructure.png")} />
                <div id="folder-img" className="text-center">
                    (full application folder structure)
                </div>
                <h4 className="text-center">Views</h4>
                <p>
                    <div id="client-folder-div" className="float-left text-center">
                        <img src={require("./client.png")} />
                        <p>
                            (client folder)
                        </p>
                    </div>
                    In this project we use React which commonly follows the MVC design. In the client folder the views of the application are held. These are the different parts of what the user will see and interact with. We include the different pages and components such as buttons, forms, inputs and a navbar. We also style our elements using css and provide image assets for the webpage in this folder as well. 
                </p>
                <img className="d-block mx-auto" src={require("./app-folder.png")} />
                <p className="text-center">
                    (App.js using React Router)
                </p>
                <p>
                    hello
                </p>
            </div>
        </div>
    )
}

export default mvc;