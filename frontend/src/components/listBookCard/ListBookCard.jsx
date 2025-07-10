import React from "react";
import PropTypes from "prop-types";
import BookCard from "../bookCard/BookCard";
import "./listBookCard.css";

const ListBookCard = ({ books = [], isFavorite, toggleFavorite }) => {
  return (
    <section className="book-list">
      {books.map((book, id) => (
        <BookCard
          key={id}
          {...book}
          isFavorite={isFavorite(book.id)}
          onFavoriteToggle={() => toggleFavorite(book)}
        />
      ))}
    </section>
  );
};

ListBookCard.propTypes = {
  books: PropTypes.array.isRequired,
  isFavorite: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default ListBookCard;
