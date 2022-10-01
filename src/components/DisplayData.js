import React from "react";
function DisplayData(props){
    return (
        <div>
            <hi>{props.firstName}</hi>
            <hi>{props.lastName}</hi>
        </div>
    );
}
export default DisplayData;