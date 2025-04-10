import { createServer, Model } from "miragejs";

createServer({
  models: {
    books: Model,
  },

  seeds(server) {
    server.create("book", { id: "1", name: "One Piece", price: 10, description: "Pirata que estica.", type: "shounen", readingId: "1" })
    server.create("book", { id: "2", name: "Sailor Moon", price: 20, description: "Peak fiction.", type: "shoujo", readingId: "1" })
    server.create("book", { id: "3", name: "Dragon Ball", price: 100, description: "Assistia na TV globinho.", type: "shounen", readingId: "2" })
    server.create("book", { id: "4", name: "Monster", price: 50, description: "Tenma é legal.", type: "seinen", readingId: "1" })
    server.create("book", { id: "5", name: "Two Piece", price: 20, description: "Dois piratas que esticam.", type: "shounen", readingId: "2" })
    server.create("book", { id: "6", name: "Superman", price: 30, description: "Homem morcego.", type: "american", readingId: "3" })
    server.create("book", { id: "7", name: "Orb", price: 70, description: "Heliocentrismo.", type: "seinen", readingId: "4" })
  },

  routes() {
    this.namespace = "api"

    this.get("/books", (schema, request) => {
      return schema.books.all()
    })

    this.get("/books/:id", (schema, request) => {
      const id = request.params.id
      return schema.books.find(id)
    })

    this.get("/dashboard/reading", (schema, request) => {
      // readingID hard coded
      return schema.books.where({readingId: "1"})
    })

    this.get("/dashboard/reading/:id", (schema, request) => {
      // readingID hard coded
      const id = request.params.id
      return schema.books.where({id,  readingId: "1"})
    })
  }
})