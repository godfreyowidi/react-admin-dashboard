import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemSecurityUpdateIcon from '@mui/icons-material/SystemSecurityUpdate';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo">reactadmin </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration: "none"}}>
            <li>
              <PeopleAltIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{textDecoration: "none"}}>
            <li>
              <InventoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <BorderStyleIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SystemSecurityUpdateIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <ManageHistoryIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar