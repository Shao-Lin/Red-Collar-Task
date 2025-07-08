import MainHeader from "../components/mainHeader/MainHeader";
import React from "react";

import ListBookCard from "../components/listBookCard/ListBookCard";

const Main = () => {
  const test = {
    id: "0",
    title: "Ночной дозор и камень",
    author: "А. Стругацкий",
    description:
      "Не знаю, насколько смешной или забавной была книга на английском языке олько смешной или забавной б",
  };
  const test1 = {
    id: "1",
    title: "Ночной дозор и камень",
    author: "А. Стругацкий",
    description:
      "Не знаю, насколько смешной или забавной была книга на английском языке олько смешной или забавной б",
  };
  const test2 = {
    id: "2",
    title: "Ночной дозор и камень",
    author: "А. Стругацкий",
    description:
      "Не знаю, насколько смешной или забавной была книга на английском языке олько смешной или забавной б",
  };
  const test3 = {
    id: "3",
    title: "Ночной дозор и камень",
    author: "А. Стругацкий",
    description:
      "Не знаю, насколько смешной или забавной была книга на английском языке олько смешной или забавной б",
  };

  const arrTest = [test, test1, test2, test3];
  return (
    <>
      <MainHeader />

      <ListBookCard books={arrTest} />
    </>
  );
};
export default Main;
