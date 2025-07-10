import { useCallback, useState } from "react";
import { readFavorites, writeFavorites } from "../utils/favorites";
import { notifySuccessAdd, notifySuccessDelete } from "../utils/notifyStorage";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(readFavorites)


  const isFav = useCallback((id) => favorites.some((book) => book.id === id), [favorites])

  const toggle = useCallback((book) => {
    setFavorites((prev) => {
      let next;

      if (prev.some((b) => b.id === book.id)) {
        next = prev.filter((b) => b.id !== book.id);
        notifySuccessDelete()
      } else {
        next = [book, ...prev];
        notifySuccessAdd()
      }

      writeFavorites(next);
      return next;
    });
  }, []);
  return { favorites, isFav, toggle }
}

