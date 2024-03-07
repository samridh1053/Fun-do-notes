import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import AppsIcon from "@mui/icons-material/Apps";
import SearchBar from "./SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TemporaryDrawer from "./SideBar";
import { ActiveModuleProvider, useActiveModule } from "./ActiveModuleContext"; 
import './Dashboard.css';
import NoteContainer from "./NotesContainer";
import TrashContainer from "./TrashContainer";
import ArchiveContainer from "./ArchiveContainer";
import { useState } from "react";

function Dashboard() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { activeModule } = useActiveModule(); 
  const navigate = useNavigate();

  const renderModuleContent = () => {
    switch (activeModule) {
      case "notes":
        return <NoteContainer />;
      case "archives":
        return <ArchiveContainer />; 
      case "trash":
        return <TrashContainer />; 
      default:
        return null;
    }
  };

  const handleChange=()=>{
    navigate('/login');
    window.localStorage.removeItem("token")

  }
  
  return (
    <>
    
            <div className="header" style={{ width: "100%", height: "80px", backgroundColor: "fff",}}>
                <p></p>
                <div className="menu">
                <button onClick={() =>
                    setToggleDrawer(!toggleDrawer)
                }>    <MenuIcon /></button></div>
                <div className="pic">
                <img src="	https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" style={{width:"50px", height:"50px",margin:"-14px 0px"}}></img>
                <h2>Fun-Do</h2>
                </div>
                
                <div className="search"><SearchBar></SearchBar></div>
                <div className="refresh"><RefreshIcon/></div>
                <div className="list-view"><ViewStreamIcon/></div>
                <div className="setting"><SettingsIcon/></div>
                <div className="apps"><AppsIcon/></div>
                <div className="account" onClick={handleChange}>< AccountCircleIcon/></div>
                
            </div>
      {renderModuleContent()} 
      
      <SwipeableDrawer
        anchor={"left"}
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
        sx={{ zIndex: 0 }}
      >
        <TemporaryDrawer open={isDrawerOpen} toggleDrawer={setDrawerOpen} onOpen={() => setToggleDrawer(true)} />
        <br />
      </SwipeableDrawer>
    
      <Outlet />
      
    </>
  );
}

export default Dashboard;