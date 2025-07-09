// src/utils/favorites.js
const KEY = "favorites";

/* читаем массив или [] */
export const readFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
};

/* сохраняем массив */
export const writeFavorites = (arr) =>
  localStorage.setItem(KEY, JSON.stringify(arr));
