import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from "./HeaderOption";
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img className="app_logo" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="app-logo" />
        {/* mat icon */}
        <div className="header_search">
            <div>
                <SearchIcon />
            </div>
            <input type="text" placeholder="Search for people, jobs, more" defaultValue={""} />
        </div>
      </div>

      <div className="header_right">
            <HeaderOption ICON={HomeIcon} title="Home"/>
            <HeaderOption ICON={SupervisorAccountIcon} title="My network"/>
            <HeaderOption ICON={WorkIcon} title="Jobs"/>
            <HeaderOption ICON={MessageIcon} title="Messages"/>
            <HeaderOption ICON={NotificationsActiveIcon} title="Notifications"/>
            <HeaderOption avatar="https://lh3.googleusercontent.com/ogw/ADea4I543V7ABQFXbHfP8o_h5fa5Qb3mC_ZMg_qzvmYT=s32-c-mo" title="me"/>
      </div>
    </div>
  );
}

export default Header;
