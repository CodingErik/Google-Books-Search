import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Saved() {

  const [savedBooks, setSavedBooks] = useState([]); 


  // get all the books from the database and set them in the array 
  // this is gonna be a route/controller I will be calling for info 
  useEffect(() => {
    // API.loadSavedBooks() calls the backend route 
 

    // this should return an array of books that were saved 
  
    // then we set the array to the state of the page 
  }, [])




  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron>
        </Col>
        <Col size="md-6 sm-12" >
          <h1>Saved Books</h1>
          <Row>
            {false ? (
              <Col>
              books.length
              </Col>
            ) : (
                <h3>No Saved Books to Display</h3>
              )}
              </Row>
        </Col>
      </Row>
    </Container>
  )
}


export default Saved;
