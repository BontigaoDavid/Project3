import React from "react";

function Button(props) {
    return (
      <button {...props} className="btn btn-success btn-block mb-3">
        {props.children}
      </button>
    );
  }

// export function PreviousBtn(props) {
//     return (
//         <button {...props} className="btn btn-success btn-block mb-3">
//             {props.children}
//             </button>
//     );
// }

export default Button;