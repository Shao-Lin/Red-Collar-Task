import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ListBookCard from "../components/listBookCard/ListBookCard";
import MainHeader from "../components/mainHeader/MainHeader";
import useGoogleBooks from "../hooks/useGoogleBooks";
import useDebounce from "../hooks/useDebounce";
import useFavorites from "../hooks/useFavorites";

const MainPage = () => {
  const [search, setSearch] = useState("Java");
  const [filter, setFilter] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  const { books, loadMore, hasMore } = useGoogleBooks(debouncedSearch, filter);
  console.log(books);
  const { isFav, toggle } = useFavorites();

  return (
    <>
      <MainHeader
        initialSearch={search}
        onSearchChange={setSearch}
        onFilterChange={setFilter}
      />

      <InfiniteScroll
        dataLength={books.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<p style={{ textAlign: "center" }}>Загрузка…</p>}
        style={{ overflow: "visible" }}
      >
        <ListBookCard
          books={books}
          isFavorite={isFav}
          toggleFavorite={toggle}
        />
      </InfiniteScroll>
    </>
  );
};

export default MainPage;
