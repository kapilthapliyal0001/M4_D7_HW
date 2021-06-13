import {Component} from "react";
import {ListGroup} from "react-bootstrap";

class GetComment extends Component {
  state = {
    arr: [],
  };

  componentDidMount() {
    try {
      let response = fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
        {
          method: "GET",
          headers: {
            // headers is the info about the doctype;
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmODNiYmJlOWIxNTAwMTU1MDZlMTgiLCJpYXQiOjE2MjI3MzIxOTEsImV4cCI6MTYyMzk0MTc5MX0.ZqdgZmULZcI7gjh5daMg5RB8e4ZXiaeO8cFi1Ztz-Ro",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            arr: data,
          });
          // this.state.arr = data;
          console.log(this.state.arr, "successfully GET");
        });
    } catch (error) {
      console.log("Some issue with fetch");
    }
  }

  render() {
    return (
      <ListGroup>
        {this.state.arr.map((b) => (
          <ListGroup.Item>{b.comment} </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

// const GetComment = (props) => {
//   var arr = [];
//   try {
//     let response = fetch(
//       `https://striveschool-api.herokuapp.com/api/comments/${props.id}`,
//       {
//         method: "GET",
//         headers: {
//           // headers is the info about the doctype;
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmODNiYmJlOWIxNTAwMTU1MDZlMTgiLCJpYXQiOjE2MjI3MzIxOTEsImV4cCI6MTYyMzk0MTc5MX0.ZqdgZmULZcI7gjh5daMg5RB8e4ZXiaeO8cFi1Ztz-Ro",
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         arr = data;
//         console.log(arr);
//       });
//   } catch (error) {
//     console.log("Some issue with fetch");
//   }

//   return (
//     <ListGroup>
//       {arr.map((b) => (
//         <ListGroup.Item>{b.comment} </ListGroup.Item>
//       ))}
//     </ListGroup>
//   );

// arr.map((comment) => <h4>{comment.comment}</h4>);
// <ListGroup>
//     {arr.map((b) => (
//       <ListGroup.Item>{b.comment} </ListGroup.Item>
//     ))}
//   </ListGroup>
// };

export default GetComment;
