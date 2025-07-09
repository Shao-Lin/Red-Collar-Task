import React from "react";
import PropTypes from "prop-types";
import BookCard from "../bookCard/BookCard";
import "./listBookCard.css";

const ListBookCard = ({ books = [] }) => (
  <section className="book-list">
    {books.map((book) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        description={book.description}
        cover={book.cover}
      />
    ))}
  </section>
);

ListBookCard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ),
};

export default ListBookCard;
