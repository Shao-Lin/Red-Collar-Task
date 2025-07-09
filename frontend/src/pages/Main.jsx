import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ListBookCard from "../components/listBookCard/ListBookCard";
import MainHeader from "../components/mainHeader/MainHeader";
import useGoogleBooks from "../hooks/useGoogleBooks";
import useDebounce from "../hooks/useDebounce";

const MainPage = () => {
  const [search, setSearch] = useState("Java");
  const [filter, setFilter] = useState("");

  /* debounce — чтобы не бомбить API при каждом символе */
  const debouncedSearch = useDebounce(search, 400);

  const { books, loadMore, hasMore } = useGoogleBooks(debouncedSearch, filter);
  console.log(books);

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
        <ListBookCard books={books} />
      </InfiniteScroll>
    </>
  );
};

export default MainPage;
