import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
          
          </div>
          <div className="item">
            <DarkModeIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})}/>
          
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
           
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
              <div className="counter"></div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
              <div className="counter"></div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
            
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
              className="avatar" 
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar