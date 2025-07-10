import axios from "axios"
import NoCover from "../assets/NotCover.webp"

export const singleBookApi = async (bookId) => {
  try {
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    return {
      id: data.id,
      title: data.volumeInfo.title,
      authors: (data.volumeInfo.authors ?? ["—"]).join(", "),
      publishedDate: data.volumeInfo.publishedDate ?? "-",
      pageCount: data.volumeInfo.pageCount,
      description: data.volumeInfo.description.replace(/<[^>]*>/g, '') ?? "Без описания",
      cover: data.volumeInfo.imageLinks?.thumbnail ?? NoCover
    }
  } catch (err) {
    throw new err
  }
} 