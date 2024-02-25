import { useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBar from "./SearchBar";
import './Dashboard.css';

function Dashboard() {
    const [toggleDrawer, setToggleDrawer] = useState(false)
    const navigate = useNavigate();
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
                
            </div>
            <SwipeableDrawer
                anchor={'left'}
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
                sx={{ zIndex: 0 }}
            >
                <br />
                <button onClick={() =>
                    navigate("/dashboard/notes")}>Notes</button>
                <br />
                <button onClick={() =>
                    navigate("/dashboard/archive")}><ArchiveIcon/></button>
                <br />
                <button onClick={() =>
                    navigate("/dashboard/trash")}><DeleteIcon/></button>
                <br />
            </SwipeableDrawer>
            <Outlet></Outlet>
        </>
    )
}

export default Dashboard