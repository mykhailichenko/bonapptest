import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';

export default function BurgerModal({burger, ...props}) {
    return(
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {burger.restaurant}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{burger.name}</h4>
                <p>
                    {burger.description}
                </p>
                <span>Ingredients:</span>
                <ListGroup>
                    {burger?.ingredients.map(ingridient => {
                        return(
                            <ListGroup.Item key={ingridient}>{ingridient}</ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}