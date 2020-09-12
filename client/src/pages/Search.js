import React, { useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Button from 'react-bootstrap/Button'

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})


    function saveBook(id) {
        // API.getBooks()
        //     .then(res =>
        //         setBooks(res.data)
        //     )
        //     .catch(err => console.log(err));
        console.log('book will be saved', id)
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        // API.deleteBook(id)
        //     .then(res => loadBooks())
        //     .catch(err => console.log(err));

        console.log('book will be deleted', id)
    }

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
                    // console.log(res.data)
                    console.log(res.data.items[0].volumeInfo)

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
                    <Row>
                        {books.length ? (
                            <List>
                                {books.map(book => (
                                    <ListItem key={book.id}>
                                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                                        <Link to={"/books/" + book.id}/>
                                        <strong className="m-4">
                                            Title: {book.volumeInfo.title}
                                        </strong>
                                        <strong>
                                        Author: {book.volumeInfo.authors[0]}
                                        </strong>
                                        <p className="mt-3" >
                                            Description: {book.volumeInfo.description}
                                        </p>
                                        <strong>
                                            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"> link to book </a>
                                        </strong>
                                        <Button  onClick={() => saveBook(book.id)} variant="outline-success" className='ml-3' >Save</Button>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Search;





