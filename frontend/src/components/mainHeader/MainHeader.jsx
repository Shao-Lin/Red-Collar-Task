import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import MenuIcon from "../../assets/MenuBtn.svg";
import CloseIcon from "../../assets/CloseMenu.svg";
import SearchInput from "../UI/SearchInput";
import SideBar from "../sideBar/SideBar";

import "./mainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = ({ onSearchChange, onFilterChange, initialSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((p) => !p);
  const close = () => setIsOpen(false);

  const handleValuesChange = ({ search, filter }) => {
    console.log("filter changed:", filter);
    onSearchChange(search);
    localStorage.setItem("search", search);
    onFilterChange(filter);
    localStorage.setItem("filter", filter);
  };

  return (
    <Formik
      initialValues={{
        search: initialSearch,
        filter: localStorage.getItem("filter"),
      }}
      validationSchema={Yup.object({
        search: Yup.string().required("Введите запрос"),
      })}
      onSubmit={() => {}}
    >
      {({ values, setFieldValue }) => {
        useEffect(() => handleValuesChange(values), [values]);

        return (
          <>
            <header className="main-header">
              <div className="main-header__left">
                <button
                  className="main-header__menu-btn"
                  aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                  onClick={toggle}
                >
                  <img src={isOpen ? CloseIcon : MenuIcon} alt="" />
                </button>
              </div>

              <Form className="main-header__center">
                <SearchInput />
              </Form>

              <div className="main-header__right">
                <Link to="/favorites" className="main-header__favourites">
                  Избранное
                </Link>
              </div>
            </header>

            <SideBar
              isOpen={isOpen}
              onClose={close}
              setFilter={(val) => setFieldValue("filter", val)}
            />
          </>
        );
      }}
    </Formik>
  );
};

MainHeader.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  initialSearch: PropTypes.string,
};

export default MainHeader;
