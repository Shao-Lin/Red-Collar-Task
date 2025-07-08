import React from "react";
import HeartIcon from "../../assets/NoFavorite.png";
import "./bookCard.css";
import PropTypes from "prop-types";
import bookCover from "../../assets/fakeImage2.webp";

const BookCard = ({
  title = "Ночной дозор и камень",
  author = "А. Стругацкий",
  description = "Не знаю, насколько смешной или забавной была книга на английском языке олько смешной или забавной б",
  isFavourite = false,
  onFavouriteToggle = () => {},
}) => {
  return (
    <article className="book-card">
      <img className="book-card__image" src={bookCover} alt={title} />

      <div className="book-card__title-row">
        <h3 className="book-card__title">{title}</h3>

        <button
          className="book-card__heart-btn"
          aria-label="Добавить в избранное"
          onClick={onFavouriteToggle}
        >
          <img
            className="book-card__heart-icon"
            src={HeartIcon}
            alt="heart"
            style={{ opacity: isFavourite ? 1 : 0.8 }}
          />
        </button>
      </div>

      <p className="book-card__author">{author}</p>

      <p className="book-card__description">{description}</p>
    </article>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFavourite: PropTypes.bool,
  onFavouriteToggle: PropTypes.func,
};

export default BookCard;
