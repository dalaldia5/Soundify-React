import React from "react";
import "../styles/Sidebar.css";

interface SidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ children, isOpen, onClose }) => {
  return (
    <div className={`left ${isOpen ? "open" : ""}`}>
      <div className="close" onClick={onClose}>
        <img className="invert" src="/assets/close.svg" alt="Close" />
      </div>
      <div className="home bg-grey rounded m-1 p-1">
        <div className="logo">
          <img className="invert" src="/assets/logo.svg" alt="Soundify Logo" />
        </div>
        <ul>
          <li>
            <img className="invert" src="/assets/home.svg" alt="Home" />
            Home
          </li>
          <li>
            <img className="invert" src="/assets/search.svg" alt="Search" />
            Search
          </li>
        </ul>
      </div>
      <div className="library bg-grey rounded m-1 p-1">
        <div className="heading">
          <img
            className="invert"
            src="/assets/libraryicon.svg"
            alt="Library"
            style={{ height: "24px", width: "30px" }}
          />
          <h2>Your Library</h2>
          <img
            className="invert"
            src="/assets/plusicon.svg"
            alt="Add"
            style={{
              width: "30px",
              height: "15px",
              position: "relative",
              left: "110px",
            }}
          />
        </div>
        <div className="songList">{children}</div>
        <div className="footer">
          <div>
            <a href="https://www.linkedin.com/in/dia-dalal-63280b23b/">Legal</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/dia-dalal-63280b23b/">
              Safety and Privacy Center
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/dia-dalal-63280b23b/">
              Privacy Policy
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/dia-dalal-63280b23b/">
              Cookies
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/dia-dalal-63280b23b/">
              About Ads
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/dia-dalal-63280b23b/">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
