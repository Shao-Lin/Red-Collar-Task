import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MenuIcon from "../../assets/MenuBtm.svg";
import SearchInput from "../UI/SearchInput";
import "./MainHeader.css";
import SideBar from "../sideBar/SideBar";
import CloseIcon from "../../assets/Close_round.svg";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((p) => !p);

  const close = () => setIsOpen(false);

  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        validationSchema={Yup.object({
          search: Yup.string().required("Введите запрос"),
        })}
        onSubmit={(v) => console.log(v)}
      >
        {() => (
          <header className="main-header">
            <div className="main-header__left">
              <button
                className="main-header__menu-btn"
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                onClick={toggle}
              >
                <img
                  src={isOpen ? CloseIcon : MenuIcon}
                  alt={isOpen ? "close" : "menu"}
                />
              </button>
            </div>

            <Form className="main-header__center">
              <SearchInput name="search" placeholder="Поиск..." />
            </Form>

            <div className="main-header__right">
              <span className="main-header__favourites">Избранное</span>
            </div>
          </header>
        )}
      </Formik>

      <SideBar isOpen={isOpen} onClose={close} />
    </>
  );
};

export default MainHeader;
