import axios from "axios";
import NoCover from "../assets/NotCover.webp"

const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",

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
    console.error("Google Books error:", err);

    throw err;
  }
}
