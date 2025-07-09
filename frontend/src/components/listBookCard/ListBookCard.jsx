import React from "react";
import PropTypes from "prop-types";
import BookCard from "../bookCard/BookCard";
import "./listBookCard.css";

const ListBookCard = ({ books = [], isFavorite, toggleFavorite }) => (
  <section className="book-list">
    {books.map((book) => (
      <BookCard
        key={book.id}
        {...book}
        isFavorite={isFavorite(book.id)}
        onFavoriteToggle={() => toggleFavorite(book)}
      />
    ))}
  </section>
);

ListBookCard.propTypes = {
  books: PropTypes.array.isRequired,
  isFavorite: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default ListBookCard;
