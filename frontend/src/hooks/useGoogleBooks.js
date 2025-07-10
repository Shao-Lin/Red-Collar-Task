import { useEffect, useState, useCallback } from "react";
import { fetchBooks } from "../api/bookApi";
import { notifyApiError, notifyNotFoundError } from "../utils/notifyStorage";

const PAGE_SIZE = 18;

export default function useGoogleBooks(query, filter) {
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  /* ----------------- ПЕРВАЯ ЗАГРУЗКА ----------------- */
  useEffect(() => {
    const firstLoad = async () => {
      if (!query) return;
      setIsLoading(true);
      try {
        const { books: chunk, total: all } = await fetchBooks(
          query,
          filter,
          0,
          PAGE_SIZE
        );
        setBooks(chunk);
        setTotal(all);
        setPage(1);
        if (chunk.length === 0) {
          console.log(books);
          notifyNotFoundError();

        }

      } catch (err) {
        notifyApiError()
        throw err
      }
      finally {
        setIsLoading(false);
      }
    };
    firstLoad();

  }, [query, filter]);

  /* ----------------- ЗАГРУЗКА "ЕЩЁ" ----------------- */
  const loadMore = useCallback(async () => {
    if (isLoading) return;
    if (books.length >= total) return;

    setIsLoading(true);
    try {
      const start = page * PAGE_SIZE;
      const { books: chunk } = await fetchBooks(
        query,
        filter,
        start,
        PAGE_SIZE
      );
      setBooks((prev) => [...prev, ...chunk]);
      setPage((p) => p + 1);
    } catch (err) {
      notifyApiError()
      throw err
    } finally {
      setIsLoading(false);
    }
  }, [query, filter, page, isLoading, books.length, total]);

  const hasMore = total === 0 ? true : books.length < total;

  return { books, loadMore, hasMore, isLoading };
}

