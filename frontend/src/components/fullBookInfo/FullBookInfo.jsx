import React, { useEffect, useState } from "react";
import BackArrow from "../../assets/BackArrow.png";
import "./fullBookInfo.css";
import HeartIcon from "../../assets/NoFavorite.svg";
import HeartFilledIcon from "../../assets/Favorite.svg";
import { singleBookApi } from "../../api/singleBookApi";
import { useNavigate, useParams } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";
import { notifyApiError } from "../../utils/notifyStorage";

const FullBookInfo = () => {
  const [dataBook, setDataBook] = useState({});
  const { isFav, toggle } = useFavorites();
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { title, authors, publishedDate, pageCount, description, cover } =
          await singleBookApi(bookId);

        setDataBook({
          title,
          authors,
          publishedDate,
          pageCount,
          description,
          cover,
        });
      } catch (err) {
        console.error("Ошибка при загрузке книги:", err);
        notifyApiError();
      }
    };

    fetchData();
  }, [bookId]);

  console.log(dataBook);

  return (
    <main className="book-page">
      <button
        className="book-page__back"
        aria-label="Назад"
        onClick={() => navigate(-1)}
      >
        <img src={BackArrow} alt="Back Arrow" />
      </button>
      <div className="book-page__content">
        <img
          className="book-page__cover"
          src={dataBook.cover}
          alt="Book cover"
        />
        <div className="book-page__info">
          <div className="book-page__title-row">
            <h1 className="book-page__title">{dataBook.title}</h1>
            <button
              className="book-page__favorite-btn"
              aria-label="Добавить в избранное"
              onClick={() =>
                toggle({
                  id: bookId,
                  title: dataBook.title,
                  author: dataBook.author,
                  description: dataBook.description,
                  cover: dataBook.cover,
                })
              }
            >
              <img
                className="book-page__favorite-img"
                src={isFav(bookId) ? HeartFilledIcon : HeartIcon}
                alt={isFav(bookId) ? "Удалить" : "Добавить"}
              />
            </button>
          </div>

          <p className="book-page__authors book-page__meta">
            <span className="book-page__description-title">Авторы: </span>{" "}
            {dataBook.authors}
          </p>
          <p className="book-page__published book-page__meta">
            <span className="book-page__description-title book-page__meta">
              Дата публикации:{" "}
            </span>
            {dataBook.publishedDate}
          </p>
          <p className="book-page__pages book-page__meta">
            <span className="book-page__description-title">
              Количество страниц:{" "}
            </span>
            {dataBook.pageCount}
          </p>
          <p className="book-page__description book-page__meta">
            <span className="book-page__description-title">Описание: </span>
          </p>
          <p className="book-page__description-text book-page__meta">
            {dataBook.description}
          </p>
        </div>
      </div>
    </main>
  );
};
export default FullBookInfo;
