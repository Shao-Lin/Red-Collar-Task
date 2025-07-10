import React from "react";
import { Form } from "formik";
import SelectInput from "../UI/SelectInput";
import "./sideBar.css";
import CloseIcon from "../../assets/CloseMenu.svg";
import PropTypes from "prop-types";

const SideBar = ({ isOpen, onClose, setFilter }) => (
  <aside className={`side-bar ${isOpen ? "side-bar--open" : ""}`}>
    <button
      className="side-bar__close-btn"
      onClick={onClose}
      aria-label="Закрыть"
    >
      <img src={CloseIcon} alt="close" className="side-bar__close-icon" />
    </button>
    <h2 className="side-bar__title">Filter</h2>

    <Form className="side-bar__select">
      <SelectInput
        name="filter"
        label=""
        onChange={(val) => setFilter?.(val)}
      />
    </Form>
  </aside>
);
SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setFilter: PropTypes.func,
};
export default SideBar;
