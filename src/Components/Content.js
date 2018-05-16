import React from "react";
import Employee from "./Employee";
import Admin from "./Admin";

export default (props) => {
    if (props.tabValue === 0) {
        return (
            <Employee></Employee>)
    }
    return (
        <Admin></Admin>
    );
}