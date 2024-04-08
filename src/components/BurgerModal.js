import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

export default function BurgerModal({burger, ...props}) {
    return(
        <Modal {...props}>
            <Modal.Header closeButton style={{background: '#a37415', color: '#fcf2de'}}>
                <Modal.Title id='contained-modal-title-vcenter'>
                    {burger?.restaurant}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body style={{background: '#fcf2de'}}>
                <h4>{burger.name}</h4>
                <p>{burger.description}</p>
                <p className='fw-bold'>Ingredients:</p>

                <ListGroup>
                    {burger?.ingredients.map(ingridient => {
                        return(
                            <ListGroup.Item key={Math.random()}>{ingridient}</ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Modal.Body>
        </Modal>
    )
}