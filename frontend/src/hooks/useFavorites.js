import { useCallback, useState } from "react";
import { readFavorites, writeFavorites } from "../utils/favorites";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(readFavorites)


  const isFav = useCallback((id) => favorites.some((book) => book.id === id), [favorites])

  const toggle = useCallback((book) => {
    setFavorites((prev) => {
      const next = prev.some((b) => b.id === book.id)
        ? prev.filter((b) => b.id !== book.id) // удалить
        : [book, ...prev];                     // добавить

      writeFavorites(next);                   // синхронизация с localStorage
      return next;
    });
  }, []);
  return { favorites, isFav, toggle }
}

