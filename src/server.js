import { createServer, Model } from "miragejs"

createServer({
  models: {
    books: Model,
  },

  seeds(server) {
    server.create("book", { id: "1", name: "One Piece", price: 10, description: "Pirata que estica.", type: "shounen" })
    server.create("book", { id: "2", name: "Sailor Moon", price: 20, description: "Peak fiction.", type: "shoujo" })
    server.create("book", { id: "3", name: "Dragon Ball", price: 100, description: "Assistia na TV globinho.", type: "shounen" })
    server.create("book", { id: "4", name: "Monster", price: 50, description: "Tenma é legal.", type: "seinen" })
    server.create("book", { id: "5", name: "Two Piece", price: 20, description: "Dois piratas que esticam.", type: "shounen" })
    server.create("book", { id: "6", name: "Superman", price: 30, description: "Homem morcego.", type: "american" })
    server.create("book", { id: "7", name: "Orb", price: 70, description: "Heliocentrismo.", type: "seinen" })
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
  }
})