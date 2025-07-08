import React from "react";
import { Formik, Form } from "formik";
import SelectInput from "../UI/SelectInput";
import "./sideBar.css";
import CloseIcon from "../../assets/Close_round.svg";

const SideBar = ({ isOpen, onClose }) => (
  <aside className={`side-bar ${isOpen ? "side-bar--open" : ""}`}>
    <button
      className="side-bar__close-btn"
      onClick={onClose}
      aria-label="Закрыть"
    >
      <img src={CloseIcon} alt="close" className="side-bar__close-icon" />
    </button>
    <h2 className="side-bar__title">Filter</h2>

    <Formik initialValues={{ filter: "" }} onSubmit={() => {}}>
      {() => (
        <Form className="side-bar__select">
          <SelectInput name="filter" label="" />
        </Form>
      )}
    </Formik>
  </aside>
);

export default SideBar;
