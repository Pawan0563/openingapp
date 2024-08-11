import PropTypes from "prop-types";
import "./Popover.css";

const Popover = ({ className = "" }) => {
  return (
    <div className={`popover ${className}`}>
      <div className="menu-item-module">
        <div className="menu-item-parent">
          <div className="menu-item">
            <div className="title">Tag 1</div>
          </div>
          <div className="menu-item1">
            <div className="title">Tag 2</div>
            <div className="radio-button" />
          </div>
          <div className="menu-item2">
            <div className="title">Tag 3</div>
          </div>
          <div className="menu-item2">
            <div className="title">Tag 4</div>
          </div>
          <div className="menu-item2">
            <div className="title">Tag 5</div>
          </div>
          <div className="menu-item2">
            <div className="title">Tag 6</div>
          </div>
          <div className="menu-item2">
            <div className="title">Tag 7</div>
          </div>
          <div className="menu-item2">
            <div className="title">Tag 8</div>
          </div>
          <div className="menu-item2">
            <div className="title">Tag 9</div>
          </div>
          <div className="menu-item2">
            <div className="title">Tag 10</div>
          </div>
          <div className="menu-item10">
            <div className="title">Single line item</div>
            <div className="radio-button">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Popover.propTypes = {
  className: PropTypes.string,
};

export default Popover;
