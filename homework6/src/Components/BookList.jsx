// import SingleBook from "./SingleBook";
// import React from "react";
import SingleBook from "./SingleBook";
import {Container, Row, Col, Form} from "react-bootstrap";
import {Component} from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  fetchMovie = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=[YOUR API KEY HERE]&s=harry%20potter"
      );
    } catch (error) {}
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={this.state.searchQuery}
                  onChange={(e) => {
                    console.log(e.target.value);
                    return this.setState({searchQuery: e.target.value});
                  }}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map(
              (
                b // mapping each book got from the list.
              ) => (
                <Col xs={3}>
                  <SingleBook book={b} />
                </Col>
              )
            )}
        </Row>
      </Container>
    );
  }
}

export default BookList;
