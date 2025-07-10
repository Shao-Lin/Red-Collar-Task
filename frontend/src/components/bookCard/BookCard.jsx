import React from "react";
import HeartIcon from "../../assets/NoFavorite.svg";
import HeartFilledIcon from "../../assets/Favorite.svg";
import "./bookCard.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BookCard = ({
  id,
  title,
  author,
  description,
  cover,
  isFavorite,
  onFavoriteToggle,
}) => {
  const navigate = useNavigate();
  return (
    <article className="book-card" onClick={() => navigate(`/book/${id}`)}>
      <img className="book-card__image" src={cover} alt={title} />

      <div className="book-card__title-row">
        <h3 className="book-card__title">{title}</h3>

        <button
          className="book-card__heart-btn"
          aria-label="В избранное"
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle();
          }}
        >
          <img
            className="book-card__heart-icon"
            src={isFavorite ? HeartFilledIcon : HeartIcon}
            alt={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
          />
        </button>
      </div>

      <p className="book-card__author">{author}</p>
      <p className="book-card__description">{description}</p>
    </article>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default BookCard;
