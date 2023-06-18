import React, { useState } from "react";
import classes from "./style.module.css";
import Dashboard from "../../pages/Dashboard/Dashboard";
import MenuItem from "../MenuItem/MenuItem";
import HorsesList from "../../pages/Horses/HorsesList";
import useHorses from "../../hooks/useHorses";
import { Button } from "adekroui";
import LandsRegistryMap from "../LandsRegistryMap/LandsRegistryMap";

const Layout = (props) => {
  const [page, setPage] = useState("home");
  const [land, setLend] = useState(false);
  const { horses } = useHorses();

  const handlerGoPage = (action) => {
    setPage(action);
  };
  const loadland = () => {
    setLend((prevl) => {
      return !prevl;
    });
  };

  return (
    <React.Fragment>
      <header>
        header
        <Button onClick={loadland}>ciao</Button>
      </header>
      <div className={classes.layoutbody}>
        <div id="sidebar" className={classes.sidebar}>
          <div className={classes.sidebarcontent}>
            <div className={classes.sidebarlist}>
              <MenuItem
                label="Home"
                image=""
                action="home"
                goPage={handlerGoPage}
              />
              <MenuItem
                label="Cavalli"
                image=""
                action="horses"
                goPage={handlerGoPage}
              />
              <MenuItem
                label="Farmaci"
                image=""
                action="farmaci"
                goPage={handlerGoPage}
              />
            </div>
          </div>
        </div>
        <div id="content" className={classes.content}>
          {land && <LandsRegistryMap />}
          {page === "home" && <Dashboard load={page} />}
          {page === "horses" && <HorsesList horses={horses} />}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
