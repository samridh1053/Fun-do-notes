import { useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

function Dashboard() {
    const [toggleDrawer, setToggleDrawer] = useState(false)
    const navigate = useNavigate();
    return (
        <>
            <div style={{ width: "100%", height: "90px", backgroundColor: "aqua" }}>
                <span>Header</span>
                <button onClick={() =>
                    setToggleDrawer(!toggleDrawer)
                }>SideBar</button>
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
                    navigate("/dashboard/archive")}>Archive</button>
                <br />
                <button onClick={() =>
                    navigate("/dashboard/trash")}>Trash</button>
                <br />
            </SwipeableDrawer>
            <Outlet></Outlet>
        </>
    )
}

export default Dashboard