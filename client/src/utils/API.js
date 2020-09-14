import axios from "axios";

export default {
  searchTitle: function(query) {
    return axios.get(`api/books/search/${query}`)
  },
  loadSavedBooks: function(){
    return axios.get('api/books')
  },
    deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
    saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
}

