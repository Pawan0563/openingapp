import { useState, useCallback } from "react";
import Popover from "./Popover";
import PropTypes from "prop-types";
import "./Uploaded.css";

const Uploaded = ({ className = "" }) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const openPopover = useCallback(() => {
    setPopoverOpen(true);
  }, []);

  const closePopover = useCallback(() => {
    setPopoverOpen(false);
  }, []);

  return (
    <>
      <div className={`uploaded ${className}`}>
        <div className="collapsible-side-bar-container">
          <div className="collapsible-side-bar2">
            <div className="menu-name2">
              <div className="settings4">
                <div className="settings5">Settings</div>
                <img
                  className="iconlyboldsetting2"
                  alt=""
                  src="/iconlyboldsetting@2x.png"
                />
              </div>
              <div className="notification4">
                <div className="notification5">Notification</div>
                <img
                  className="iconlyboldnotification2"
                  alt=""
                  src="/iconlyboldnotification@2x.png"
                />
              </div>
              <div className="menu-name-inner1">
                <div className="calendar-container">
                  <img
                    className="calendar-icon2"
                    alt=""
                    src="/calendar@2x.png"
                  />
                  <div className="messages2">
                    <div className="calendar2">Calendar</div>
                  </div>
                </div>
              </div>
              <div className="schedule4">
                <div className="schedule5">Schedule</div>
                <img
                  className="iconlybolddocument2"
                  alt=""
                  src="/iconlybolddocument@2x.png"
                />
              </div>
              <div className="invoice4">
                <div className="invoice5">Invoice</div>
                <img
                  className="iconlyboldticket2"
                  alt=""
                  src="/iconlyboldticket@2x.png"
                />
              </div>
              <div className="analytics2">
                <img className="chart-icon2" alt="" src="/chart@2x.png" />
                <div className="upload3">Upload</div>
              </div>
              <div className="dashboard4">
                <div className="dashboard-inner" />
                <div className="dashboard5">Dashboard</div>
                <img
                  className="iconlyboldcategory2"
                  alt=""
                  src="/iconlyboldcategory@2x.png"
                />
              </div>
            </div>
            <div className="logo-and-company2">
              <img className="subtract-icon4" alt="" src="/subtract.svg" />
              <div className="base3">Base</div>
            </div>
            <img
              className="tabler-icon-layout-sidebar-lef2"
              alt=""
              src="/tablericonlayoutsidebarleftexpand.svg"
            />
            <div className="theme-switch3">
              <div className="tabler-icon-sun-wrapper1">
                <img
                  className="tabler-icon-sun3"
                  alt=""
                  src="/tablericonsun.svg"
                />
              </div>
              <div className="tabler-icon-moon-wrapper1">
                <img
                  className="tabler-icon-sun3"
                  alt=""
                  src="/tablericonmoon.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-parent3">
            <div className="frame-parent4">
              <div className="upload-csv-frame">
                <div className="upload-csv2">Upload CSV</div>
              </div>
              <div className="search-bar-container">
                <div className="search-bar2">
                  <input className="white3" type="text" />
                </div>
                <img
                  className="mask-group-icon2"
                  alt=""
                  src="/mask-group@2x.png"
                />
                <img className="vector-icon7" alt="" src="/vector5.svg" />
              </div>
            </div>
            {/* <div className="input-container2">
              <div className="input-container-inner1">
                <div className="frame-parent5">
                  <img className="frame-icon" alt="" src="/frame-7682.svg" />
                  <div className="placeholder-text3">
                    <span>{`Drop your excel sheet here or `}</span>
                    <span className="browse1">browse</span>
                  </div>
                </div>
              </div>
              <div className="input-container-child2" />
              <div className="input-container-child3" />
              <div className="sizemd-iconleft-typeprima2">
                <img className="icon1" alt="" src="/icon.svg" />
                <div className="value1">Upload</div>
              </div>
            </div> */}
            <div className="frame-parent6">
              <div className="uploads-wrapper">
                <div className="uploads">Uploads</div>
              </div>
              <div className="table-demo-3">
                <div className="data-type-parent">
                  <div className="data-type">Sl No.</div>
                  <div className="button1">
                    <img className="icon2" alt="" src="/icon1.svg" />
                  </div>
                  <div className="data-type1">Links</div>
                  <div className="data-type2">Prefix</div>
                  <div className="data-type3">Add Tags</div>
                </div>
                <div className="data-type4">Selected Tags</div>
                <div className="table-row-wrapper">
                  <div className="table-row">
                    <div className="checkbox">
                      <div className="box" />
                    </div>
                    <a
                      className="data-type5"
                      href="https://www.google.com"
                      target="_blank"
                    >
                      www.google.com
                    </a>
                    <div className="data-type6">prefixsample</div>
                    <div className="column-08">
                      <div className="data-type7">01</div>
                    </div>
                    <div className="chip-holder">
                      <div className="placeholder-text3">Select Tags</div>
                      <div className="right-container">
                        <div className="button2" onClick={openPopover}>
                          <img
                            className="controls-icon"
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="left-container">
                      <div className="label">
                        <div className="label-text">TAG 1</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label">
                        <div className="label-text">TAG 2</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label">
                        <div className="label-text">TAG 3</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label">
                        <div className="label-text">TAG 4</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label">
                        <div className="label-text">TAG 4</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label">
                        <div className="label-text">TAG 4</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label">
                        <div className="label-text">TAG 4</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label">
                        <div className="label-text">TAG 4</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label8">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label8">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-row-container">
                  <div className="table-row">
                    <div className="checkbox">
                      <div className="box" />
                    </div>
                    <a
                      className="data-type5"
                      href="https://www.google.com"
                      target="_blank"
                    >
                      www.google.com
                    </a>
                    <div className="data-type6">prefixsample</div>
                    <div className="column-08">
                      <div className="data-type7">02</div>
                    </div>
                    <div className="chip-holder">
                      <div className="placeholder-text3">Select Tags</div>
                      <div className="right-container">
                        <div className="button2" onClick={openPopover}>
                          <img
                            className="controls-icon"
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="left-container1">
                      <div className="label10">
                        <div className="label-text">TAG 1</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label10">
                        <div className="label-text">TAG 2</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label12">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label12">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-row-frame">
                  <div className="table-row">
                    <div className="checkbox">
                      <div className="box" />
                    </div>
                    <a
                      className="data-type5"
                      href="https://www.google.com"
                      target="_blank"
                    >
                      www.google.com
                    </a>
                    <div className="data-type6">prefixsample</div>
                    <div className="column-08">
                      <div className="data-type7">03</div>
                    </div>
                    <div className="chip-holder">
                      <div className="placeholder-text3">Select Tags</div>
                      <div className="right-container">
                        <div className="button2" onClick={openPopover}>
                          <img
                            className="controls-icon"
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="left-container1">
                      <div className="label10">
                        <div className="label-text">TAG 1</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label10">
                        <div className="label-text">TAG 2</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label10">
                        <div className="label-text">TAG 3</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label10">
                        <div className="label-text">TAG 4</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label12">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label12">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-row-wrapper1">
                  <div className="table-row">
                    <div className="checkbox">
                      <div className="box" />
                    </div>
                    <a
                      className="data-type5"
                      href="https://www.google.com"
                      target="_blank"
                    >
                      www.google.com
                    </a>
                    <div className="data-type6">prefixsample</div>
                    <div className="column-08">
                      <div className="data-type7">04</div>
                    </div>
                    <div className="chip-holder">
                      <div className="placeholder-text3">Select Tags</div>
                      <div className="right-container">
                        <div className="button2" onClick={openPopover}>
                          <img
                            className="controls-icon"
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="left-container1">
                      <div className="label10">
                        <div className="label-text">TAG 1</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label12">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label12">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-row-wrapper2">
                  <div className="table-row">
                    <div className="checkbox">
                      <div className="box" />
                    </div>
                    <a
                      className="data-type5"
                      href="https://www.google.com"
                      target="_blank"
                    >
                      www.google.com
                    </a>
                    <div className="data-type6">prefixsample</div>
                    <div className="column-08">
                      <div className="data-type7">05</div>
                    </div>
                    <div className="chip-holder">
                      <div className="placeholder-text3">Select Tags</div>
                      <div className="right-container">
                        <div className="button2" onClick={openPopover}>
                          <img
                            className="controls-icon"
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="left-container1">
                      <div className="label10">
                        <div className="label-text">TAG 1</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label10">
                        <div className="label-text">TAG 2</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label10">
                        <div className="label-text">TAG 3</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label12">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                      <div className="label12">
                        <div className="label-text">your label</div>
                        <img
                          className="controls-icon"
                          alt=""
                          src="/icon2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popover1">
                  <div className="menu-item-module1">
                    <div className="menu-item-group">
                      <div className="menu-item11">
                        <div className="title11">Tag 1</div>
                      </div>
                      <div className="menu-item12">
                        <div className="title12">Tag 2</div>
                        <div className="radio-button2" />
                      </div>
                      <div className="menu-item13">
                        <div className="title11">Tag 3</div>
                      </div>
                      <div className="menu-item13">
                        <div className="title11">Tag 4</div>
                      </div>
                      <div className="menu-item13">
                        <div className="title11">Tag 5</div>
                      </div>
                      <div className="menu-item13">
                        <div className="title11">Tag 6</div>
                      </div>
                      <div className="menu-item13">
                        <div className="title11">Tag 7</div>
                      </div>
                      <div className="menu-item13">
                        <div className="title11">Tag 8</div>
                      </div>
                      <div className="menu-item13">
                        <div className="title11">Tag 9</div>
                      </div>
                      <div className="menu-item13">
                        <div className="title11">Tag 10</div>
                      </div>
                      <div className="menu-item21">
                        <div className="title11">Single line item</div>
                        <div className="icon1">
                          <div className="circle1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopoverOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopover}
        >
          <Popover onClose={closePopover} />
        </PortalPopup>
      )}
    </>
  );
};

Uploaded.propTypes = {
  className: PropTypes.string,
};

export default Uploaded;
