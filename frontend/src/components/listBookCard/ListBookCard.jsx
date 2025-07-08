import React from "react";
import PropTypes from "prop-types";
import BookCard from "../bookCard/BookCard";
import "./listBookCard.css";

const ListBookCard = ({ books = [] }) => (
  <section className="book-list">
    {books.map((book) => (
      <BookCard
        key={book.id || book.title}
        title={book.title}
        author={book.author}
        description={book.description}
      />
    ))}
  </section>
);

ListBookCard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      isFavourite: PropTypes.bool,
      onFavouriteToggle: PropTypes.func,
    })
  ),
};

export default ListBookCard;
