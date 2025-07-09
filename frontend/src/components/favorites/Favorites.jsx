import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import useFavorites from "../../hooks/useFavorites"; // читает localStorage
import ListBookCard from "../../components/listBookCard/ListBookCard";
import "./favorites.css";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/BackArrow.png";

const PAGE_SIZE = 18; // по-умолчанию 18

const Favorite = () => {
  const { favorites, isFav, toggle } = useFavorites();
  const navigate = useNavigate();

  /* делим избранное на порции, чтобы работал InfiniteScroll */
  const [page, setPage] = useState(1);
  const slice = favorites.slice(0, page * PAGE_SIZE);
  const hasMore = slice.length < favorites.length;

  const loadMore = () => setPage((p) => p + 1);

  return (
    <main className="favorite-page">
      {/* ---------------- wrapper ---------------- */}
      <div className="favorite-wrap">
        {/* КНОПКА ← */}
        <button
          className="favorite-back-btn"
          aria-label="Назад"
          onClick={() => navigate(-1)}
        >
          <img src={BackArrow} alt="back" />
        </button>

        {/* БЛОК «Избранное» */}
        <header className="favorite-header">
          <h1 className="favorite-header__title">Избранное</h1>
        </header>
      </div>

      {/* ---------------- список книг ---------------- */}
      <InfiniteScroll
        dataLength={slice.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<p style={{ textAlign: "center" }}>Загрузка…</p>}
        style={{ overflow: "visible" }}
      >
        <ListBookCard
          books={slice}
          isFavorite={isFav}
          toggleFavorite={toggle}
        />
      </InfiniteScroll>
    </main>
  );
};

export default Favorite;
