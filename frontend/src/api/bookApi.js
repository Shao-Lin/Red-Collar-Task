// src/api/googleBooks.js
import axios from "axios";
import NoCover from "../assets/NotCover.webp"

const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
  timeout: 10000
});

export async function fetchBooks(q, filter, start = 0, max = 18) {
  try {
    const params = { q, startIndex: start, maxResults: max };
    if (filter) params.filter = filter;

    const { data } = await instance.get("volumes", { params });
    console.log()

    return {
      total: data.totalItems || 0,
      books: (data.items || []).map((v) => ({
        id: v.id,
        title: v.volumeInfo.title,
        author: (v.volumeInfo.authors ?? ["—"]).join(", "),
        description: v.volumeInfo.description ?? "Без описания",
        cover:
          v.volumeInfo.imageLinks?.thumbnail ?? NoCover
      }))
    };
  } catch (err) {
    // Здесь можно залогировать или показать toast:
    console.error("Google Books error:", err);
    // Передаём ошибку дальше — пусть компонент-вызывающий решит, что делать.
    throw err;
  }
}
