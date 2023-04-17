import React,{useState} from "react";
import classes from "./style.module.css";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MenuItem from "../MenuItem/MenuItem";

const Layout = (props) =>{

    const [page,setPage] = useState("home");

    const handlerGoPage = (action) =>{
        setPage(action);
    }

    

    return (
        <React.Fragment>

        <header>
            header
        </header>
        <div className={classes.layoutbody}>
        <div id="sidebar" className={classes.sidebar}>
            <MenuItem label="Cavalli" image="" action="cavalli" goPage={handlerGoPage} />
            <MenuItem label="Farmaci" image="" action="farmaci" goPage={handlerGoPage} />
        </div>
        <div id="content" className={classes.content}>
           <Dashboard load={page}></Dashboard>
        </div>
        </div>
        <footer>
            footer
        </footer>

        </React.Fragment>
    );

}
export default Layout;