import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import MenuIcon from "../../assets/MenuBtm.svg";
import CloseIcon from "../../assets/Close_round.svg";
import SearchInput from "../UI/SearchInput";
import SideBar from "../sideBar/SideBar";

import "./mainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = ({ onSearchChange, onFilterChange, initialSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((p) => !p);
  const close = () => setIsOpen(false);

  /* ----- Обработчики «на лету» ----- */
  const handleValuesChange = ({ search, filter }) => {
    onSearchChange(search);
    onFilterChange(filter);
  };

  return (
    <Formik
      initialValues={{ search: initialSearch, filter: "" }}
      validationSchema={Yup.object({
        search: Yup.string().required("Введите запрос"),
      })}
      /* submit не нужен, но должен быть */
      onSubmit={() => {}}
    >
      {({ values, setFieldValue }) => {
        /* реагируем на каждое изменение формы */
        useEffect(() => handleValuesChange(values), [values]);

        return (
          <>
            <header className="main-header">
              {/* кнопка меню / крестик */}
              <div className="main-header__left">
                <button
                  className="main-header__menu-btn"
                  aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                  onClick={toggle}
                >
                  <img src={isOpen ? CloseIcon : MenuIcon} alt="" />
                </button>
              </div>

              {/* SEARCH */}
              <Form className="main-header__center">
                <SearchInput />
              </Form>

              {/* «Избранное» */}
              <div className="main-header__right">
                <Link to="/favorites" className="main-header__favourites">
                  Избранное
                </Link>
              </div>
            </header>

            {/* Сайдбар ➜ внутри Formik, поэтому SelectInput получает контекст */}
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
