import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import AppsIcon from "@mui/icons-material/Apps";
import SearchBar from "./SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TemporaryDrawer from "./SideBar";
import { ActiveModuleProvider, useActiveModule } from "./ActiveModuleContext";
import "./Dashboard.css";
import NoteContainer from "./NotesContainer";
import TrashContainer from "./TrashContainer";
import ArchiveContainer from "./ArchiveContainer";
import { NavBar } from "./NavBar";
import { useState } from "react";

function Dashboard() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { activeModule } = useActiveModule();
  const navigate = useNavigate();

  const renderModuleContent = () => {
    switch (activeModule) {
      case "notes":
        return <NoteContainer isGridView={gridView} />;
      case "archives":
        return <ArchiveContainer />;
      case "trash":
        return <TrashContainer />;
      default:
        return null;
    }
  };

  const handleChange = () => {
    navigate("/login");
    window.localStorage.removeItem("token");
  };

  const toggleGridView = () => {
    setGridView(!gridView);
  };

  return (
    <div className="root">
      <NavBar gridView={gridView} setGridView={setGridView} />
      <NoteContainer isGridView={gridView} />
      {/* {renderModuleContent()} */}
    </div>
  );
}

export default Dashboard;
