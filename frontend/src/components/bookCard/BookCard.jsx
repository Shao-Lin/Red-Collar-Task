import React from "react";
import HeartIcon from "../../assets/NoFavorite.png";
import "./bookCard.css";
import PropTypes from "prop-types";
import bookCover from "../../assets/NotCover.webp";

const BookCard = ({
  id,
  title,
  author,
  description,
  cover,
  isFavorite,
  onFavoriteToggle = () => {},
}) => {
  return (
    <article className="book-card">
      <img className="book-card__image" src={cover} alt={title} />

      <div className="book-card__title-row">
        <h3 className="book-card__title">{title}</h3>

        <button
          className="book-card__heart-btn"
          aria-label="Добавить в избранное"
          onClick={onFavoriteToggle}
        >
          <img
            className="book-card__heart-icon"
            src={HeartIcon}
            alt="heart"
            style={{ opacity: isFavorite ? 1 : 0.8 }}
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
  isFavorite: PropTypes.bool,
  onFavoriteToggle: PropTypes.func,
};

export default BookCard;
