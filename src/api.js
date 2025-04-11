export async function getBooks() {
  const res = await fetch("/api/books")

  if (!res.ok) {
    throw {
      message: "Failed to fetch books",
      statusText: res.statusText,
      status: res.status
    }
  }

  const data = await res.json()
  return data.books
}