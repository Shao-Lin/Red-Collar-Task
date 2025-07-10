const KEY = "favorites";

export const readFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
};

export const writeFavorites = (arr) =>
  localStorage.setItem(KEY, JSON.stringify(arr));
