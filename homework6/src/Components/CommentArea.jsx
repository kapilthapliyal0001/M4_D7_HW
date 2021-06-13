import {Component} from "react";
import {Form, Button, ListGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GetComment from "./GetComment";

class CommentArea extends Component {
  state = {
    fetch: false,
    reservation: {
      comment: "",
      rate: 1,
      elementId: this.props.id,
    },
    submit: false,
  };

  //   Input change function for the double binding

  inputChange = (e) => {
    let id = e.target.id;

    this.setState({
      reservation: {
        ...this.state.reservation,
        [id]: e.target.value,
      },
    });
  };

  submitReservation = (e) => {
    e.preventDefault();
    console.log("I'm about to send my reservation!");
    console.log(this.state.reservation);
    this.setState({
      submit: true,
    });

    try {
      let response = fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.reservation),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmODNiYmJlOWIxNTAwMTU1MDZlMTgiLCJpYXQiOjE2MjI3MzIxOTEsImV4cCI6MTYyMzk0MTc5MX0.ZqdgZmULZcI7gjh5daMg5RB8e4ZXiaeO8cFi1Ztz-Ro",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          console.log("The data has been successfully posted!");
        });
    } catch (error) {
      console.log("There is some error in the fetch!");
    }
  };

  //    function when the submit button is clicked

  render() {
    return (
      <>
        {this.props.comments == 1 ? ( // if the user clicks the image;
          <>
            <GetComment id={this.props.id} />
            <h6 style={{color: "red"}}>Book id: {this.props.id}</h6>
            {/* List of comments if clicked  */}
            {/*  Basic form for the user input */}

            {/* <Form onSubmit={(e) => this.submitReservation(e)}> */}

            <Form onSubmit={(e) => this.submitReservation(e)}>
              <Form.Group className="d-flex" controlId="formBasicEmail">
                <Form.Label style={{color: "green"}} className="p-1">
                  Comment
                </Form.Label>

                {/* <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={this.state.reservation.name}
                        id="name"
                        // with value I'm reflecting into the input what I have into the state
                        onChange={(e) => this.inputChange(e)}
                /> */}

                <Form.Control
                  type="text"
                  placeholder="Add comments here"
                  id="comment"
                  value={this.state.reservation.comments}
                  onChange={(e) => this.inputChange(e)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="d-flex" controlId="formBasicEmail">
                <Form.Label style={{color: "blue"}} className="p-1">
                  Rating
                </Form.Label>
                <Form.Control
                  as="select"
                  id="rate"
                  value={this.state.reservation.rate}
                  onChange={(e) => this.inputChange(e)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                {/* <Form.Control
                  type="number"
                  placeholder="Add rating here"
                  id="rate"
                  value={this.state.reservation.rate}
                  onChange={(e) => this.inputChange(e)} */}
              </Form.Group>
              <Button
                className="d-flex justify-content-center"
                variant="primary"
                type="submit"
                size="sm"
                onClick={(e) => {
                  this.setState({
                    fetch: true, // ready to fetch if submit button is clicked!
                  });
                  // this.submitReservation();
                }}
              >
                Submit
              </Button>
            </Form>
            {/*  we will fetch the  */}
            {/* <Fetch id={this.props.id} /> */}
            {/* FETCH WILL END */}
          </>
        ) : (
          <> </>
        )}
      </>
    );
  }
}

export default CommentArea;

{
  /* <ListGroup>
                    <SingleComment asin={this.props.asin} />
                </ListGroup>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form> */
}
