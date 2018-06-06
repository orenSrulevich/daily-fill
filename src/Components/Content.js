import React from "react";
import Employee from "../Containers/Employee";
import Admin from "../Containers/Admin";

export default (props) => {
    if (props.tabValue === 0) {
        return (
            <Employee></Employee>)
    }
    return (
        <Admin></Admin>
    );
}
