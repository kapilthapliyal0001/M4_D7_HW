import {Button, Modal, Image} from "react-bootstrap";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentArea from "./CommentArea";
import {ThemeConsumer} from "react-bootstrap/esm/ThemeProvider";

function DropModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShow}>
        Show Comments
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <img src={props.img} alt={props.title}/> */}
            <Image src={props.img} fluid />
            {/* Book url: {props.img} and the title is : {props.title} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentArea comments={1} id={props.id} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DropModal;
