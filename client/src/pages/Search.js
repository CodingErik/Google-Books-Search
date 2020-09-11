import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    // useEffect(() => {
    //     loadBooks()
    // }, [])

    // Loads all books and sets them to books
    // function loadBooks() {
    //     API.getBooks()
    //         .then(res =>
    //             setBooks(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };

    // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteBook(id) {
    //     API.deleteBook(id)
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    // }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.search) {
            API.searchTitle(formObject.search)
                .then(res => {
                    console.log(res.data)
                    console.log(res.data.items[0].volumeInfo.imagelinks.smallThumbnail)
                    
                    setBooks(res.data.items)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    };

    return (
        <Container fluid >
            <Row>
                <Col size="md-6" >
                    <Jumbotron>
                        <h1>(React) Google Books Search</h1>
                        <h3>Search for and Save Books of Interest</h3>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="search"
                            placeholder="Search any book title ..."
                        />
                        <FormBtn
                            disabled={!(formObject.search)}
                            onClick={handleFormSubmit}
                        >
                            Search
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <h1>Results</h1>
                    <div>
                        {books.length ? (
                            <List>
                                {books.map(book => (
                                    <ListItem key={book.id}>
                                        <Link to={"/books/" + book.id}>
                                            <strong>
                                            Author: {book.volumeInfo.authors[0]}
                                            Description: {book.volumeInfo.description}
                                            Author: {book.volumeInfo.authors[0]}
                                            </strong>
                                            {/* <img src={book.volumeInfo.imagelinks.thumbnail} alt={book.volumeInfo.title}/> */}
                                        </Link>
                                        {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Search;


// {
//     authors: ["Suzanne Collins"]
//     description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
//     image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
//     title: "The Hunger Games"
//   }


// *** volumeInfo
    // - authors[0]
    // - description
    // - imagelinks.thumbnail
    // - infoLink
    // - title




