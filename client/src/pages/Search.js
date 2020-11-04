import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Button from 'react-bootstrap/Button'
import Popup from '../components/Popup'; 

function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})
    const [saveBook, setSavedBook] = useState({})

    //setting up modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // on load search 
    useEffect(() => {
        API.searchTitle("the matrix")
            .then(res => {
                // console.log(res.data)
                // console.log(res.data.items[0].volumeInfo)
                setBooks(res.data.items)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function saveBookSelection(book) {
        // place book object
        let newBook = {
            title: book.title,
            author: book.authors[0],
            description: book.description,
            image: book.imageLinks.smallThumbnail,
            link: book.infoLink
        }
        API.saveBook(newBook)
            .then(res =>{
                setSavedBook(res.data)
                
                // this shows the modal
                // what we wanna do is emit to the server with data and 
                // then have the server respond with data and post
                handleShow()
            })
            .catch(err => console.log(err));

        // we need to implement socket.io so that when we save a book we also get a notification that
        // handleShow()
    };

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
            // sending the title 
            API.searchTitle(formObject.search)
                .then(res => {
                    // console.log(res.data)
                    // console.log(res.data.items[0].volumeInfo)
                    setBooks(res.data.items)
                })
                .catch(err => {
                    console.log(err);
                })
        }
        // console.log(formObject.search)
    };


    return (
        <Container fluid >
            <Row>
                <Col size="md-6" >
                    <Popup  
                    handleShow={handleShow}  
                    handleClose={handleClose} 
                    show={show}
                    saveBook={saveBook.title}
                    />

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
//                             disabled={!(formObject.search)}
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
                                        <Link to={"/books/" + book.id} />
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
                                        <Button onClick={() => saveBookSelection(book.volumeInfo)} variant="outline-success" className='ml-3' >Save</Button>
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





