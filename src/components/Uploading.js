import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Uploading.css";

const Uploading = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`uploading ${className}`}>
      <div className="collapsible-side-bar-group">
        <div className="collapsible-side-bar1">
          <div className="menu-name1">
            <div className="settings2">
              <div className="settings3">Settings</div>
              <img
                className="iconlyboldsetting1"
                alt=""
                src="/iconlyboldsetting@2x.png"
              />
            </div>
            <div className="notification2">
              <div className="notification3">Notification</div>
              <img
                className="iconlyboldnotification1"
                alt=""
                src="/iconlyboldnotification@2x.png"
              />
            </div>
            <div className="menu-name-child">
              <div className="calendar-group">
                <img className="calendar-icon1" alt="" src="/calendar@2x.png" />
                <div className="messages1">
                  <div className="calendar1">Calendar</div>
                </div>
              </div>
            </div>
            <div className="schedule2">
              <div className="schedule3">Schedule</div>
              <img
                className="iconlybolddocument1"
                alt=""
                src="/iconlybolddocument@2x.png"
              />
            </div>
            <div className="invoice2">
              <div className="invoice3">Invoice</div>
              <img
                className="iconlyboldticket1"
                alt=""
                src="/iconlyboldticket@2x.png"
              />
            </div>
            <div className="analytics1">
              <img className="chart-icon1" alt="" src="/chart@2x.png" />
              <div className="upload2">Upload</div>
            </div>
            <div className="dashboard2">
              <div className="dashboard-item" />
              <div className="dashboard3">Dashboard</div>
              <img
                className="iconlyboldcategory1"
                alt=""
                src="/iconlyboldcategory@2x.png"
              />
            </div>
          </div>
          <div className="logo-and-company1">
            <img className="subtract-icon2" alt="" src="/subtract.svg" />
            <div className="base2">Base</div>
          </div>
          <img
            className="tabler-icon-layout-sidebar-lef1"
            alt=""
            src="/tablericonlayoutsidebarleftexpand.svg"
          />
          <div className="theme-switch2">
            <div className="tabler-icon-sun-frame">
              <img
                className="tabler-icon-sun2"
                alt=""
                src="/tablericonsun.svg"
              />
            </div>
            <div className="tabler-icon-moon-frame">
              <img
                className="tabler-icon-sun2"
                alt=""
                src="/tablericonmoon.svg"
              />
            </div>
          </div>
        </div>
        <div className="frame-div">
          <div className="frame-parent1">
            <div className="upload-csv-container">
              <div className="upload-csv1">Upload CSV</div>
            </div>
            <div className="search-bar-group">
              <div className="search-bar1">
                <input className="white2" type="text" />
              </div>
              <img
                className="mask-group-icon1"
                alt=""
                src="/mask-group@2x.png"
              />
              <img className="vector-icon6" alt="" src="/vector5.svg" />
            </div>
          </div>
          <div className="input-container1">
            <div className="group-div">
              <div className="frame-parent2">
                <img className="frame-inner" alt="" src="/frame-76821.svg" />
                <div className="placeholder-text1">upload-template.xlsx</div>
                <div className="placeholder-text2">Remove</div>
              </div>
            </div>
            <div className="rectangle-div" />
            <div className="input-container-child1" />
            <div
              className="sizemd-iconleft-typeprima1"
              onClick={onSizemdIconLeftTypePrimaClick}
            >
              <div className="rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Uploading.propTypes = {
  className: PropTypes.string,
};

export default Uploading;
