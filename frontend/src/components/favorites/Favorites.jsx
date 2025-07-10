import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import useFavorites from "../../hooks/useFavorites";
import ListBookCard from "../../components/listBookCard/ListBookCard";
import "./favorites.css";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/BackArrow.png";

const PAGE_SIZE = 18;

const Favorite = () => {
  const { favorites, isFav, toggle } = useFavorites();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const slice = favorites.slice(0, page * PAGE_SIZE);
  const hasMore = slice.length < favorites.length;

  const loadMore = () => setPage((p) => p + 1);

  return (
    <main className="favorite-page">
      <div className="favorite-wrap">
        <button
          className="favorite-back-btn"
          aria-label="Назад"
          onClick={() => navigate(-1)}
        >
          <img src={BackArrow} alt="back" />
        </button>

        <header className="favorite-header">
          <h1 className="favorite-header__title">Избранное</h1>
        </header>
      </div>

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
