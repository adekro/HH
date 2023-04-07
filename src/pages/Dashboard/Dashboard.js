import React from "react";
import classes from "./style.module.css";

const Dashboard = (props) =>{
    return(
        <React.Fragment>
            <p>Dashboard</p>
            <p>{props.load}</p>
        </React.Fragment>
    );
}
export default Dashboard;