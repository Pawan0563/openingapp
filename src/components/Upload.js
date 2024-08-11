import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch";
import "./Upload.css";

const Upload = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [file, setFile] = useState(null); // State to hold the selected file
  const [uploading, setUploading] = useState(false); // State to track the uploading status
  const [fileName, setFileName] = useState(""); // State to hold the file name

  const navigate = useNavigate();

  // Handle upload button click
  const onUploadClick = useCallback(() => {
    if (file) {
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
        alert("Uploaded Successfully!!!");
        navigate("/uploaded");
      }); // Simulate upload delay
    } else {
      alert("Please select a file to upload.");
    }
  }, [file, navigate]);

  // Handle theme change
  const handleThemeChange = (darkMode) => {
    setIsDarkMode(darkMode);
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name); // Update file name
    }
  };
  return (
    <div
      className={`upload ${className} ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="collapsible-side-bar-parent">
        <div className="collapsible-side-bar">
          <div className="menu-name">
            <div className="settings">
              <div className="settings1">Settings</div>
              <img
                className="iconlyboldsetting"
                alt=""
                src="/iconlyboldsetting@2x.png"
              />
            </div>
            <div className="notification">
              <div className="notification1">Notification</div>
              <img
                className="iconlyboldnotification"
                alt=""
                src="/iconlyboldnotification@2x.png"
              />
            </div>
            <div className="menu-name-inner">
              <div className="calendar-parent">
                <img className="calendar-icon" alt="" src="/calendar@2x.png" />
                <div className="messages">
                  <div className="calendar">Calendar</div>
                </div>
              </div>
            </div>
            <div className="schedule">
              <div className="schedule1">Schedule</div>
              <img
                className="iconlybolddocument"
                alt=""
                src="/iconlybolddocument@2x.png"
              />
            </div>
            <div className="invoice">
              <div className="invoice1">Invoice</div>
              <img
                className="iconlyboldticket"
                alt=""
                src="/iconlyboldticket@2x.png"
              />
            </div>
            <div className="analytics">
              <img className="chart-icon" alt="" src="/chart@2x.png" />
              <div className="upload1">Upload</div>
            </div>
            <div className="dashboard">
              <div className="dashboard-child" />
              <div className="dashboard1">Dashboard</div>
              <img
                className="iconlyboldcategory"
                alt=""
                src="/iconlyboldcategory@2x.png"
              />
            </div>
          </div>
          <div className="logo-and-company">
            <img className="subtract-icon" alt="" src="/subtract.svg" />
            <div className="base1">Base</div>
          </div>
          <img
            className="tabler-icon-layout-sidebar-lef"
            alt=""
            src="/tablericonlayoutsidebarleftexpand.svg"
          />
          <ThemeSwitch onChange={handleThemeChange} />
        </div>
        <div className="frame-parent">
          <div className="frame-group">
            <div className="upload-csv-wrapper">
              <div className="upload-csv">Upload CSV</div>
            </div>
            <div className="search-bar-parent">
              <div className="search-bar">
                <input className="white1" type="text" />
              </div>
              <img
                className="mask-group-icon"
                alt=""
                src="/mask-group@2x.png"
              />
              <img className="vector-icon5" alt="" src="/vector5.svg" />
            </div>
          </div>
          <div className="input-container">
            <div className="input-container-inner">
              <div className="file-upload-area">
                <input
                  id="file-upload"
                  type="file"
                  accept=".csv, .xlsx"
                  onChange={handleFileChange}
                  style={{ display: "none" }} // Hide the input
                />
                <label htmlFor="file-upload" className="upload-label">
                  <img className="upload-icon" alt="" src="/frame-7682.svg" />
                  <span>
                    Drop your excel sheet here or <b>browse</b>
                  </span>
                </label>
              </div>
              <div className="upload-button" onClick={onUploadClick}>
                <img className="icon" alt="" src="/icon.svg" />
                <div className="value">Upload</div>
              </div>
              {fileName && (
                <div className="file-name">
                  Selected File: <strong>{fileName}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Upload.propTypes = {
  className: PropTypes.string,
};

export default Upload;
