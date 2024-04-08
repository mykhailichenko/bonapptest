import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {removeItemById, increaseAmount, decreaseAmount} from '../../store/slices/cartSlice';

import BurgerModal from '../../components/BurgerModal';

import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import burger_img_4 from '../../assets/burger-4.png';
import trash from '../../assets/trash.png';

export default function CartItem({item}) {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    return (
        <ListGroup.Item style={{background: '#fcf2de'}}>
            <Row>
                <Col
                    xs={6}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'}}
                >
                    <Image src={burger_img_4} width={50} height={50} />

                    <div style={{cursor: 'pointer'}} onClick={() => setModalShow(true)}>
                        {item.name}
                    </div>
                </Col>

                <Col
                    xs={6}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'}}
                >
                    <Button
                        size='sm'
                        variant='outline-info'
                        onClick={() => {dispatch(decreaseAmount(item.id))}}
                    >
                        –
                    </Button>

                    {item.count}

                    <Button
                        size='sm'
                        variant='outline-info'
                        onClick={() => {dispatch(increaseAmount(item.id))}}
                    >
                        +
                    </Button>

                    <Button
                        size='sm'
                        variant='danger'
                        onClick={() => {dispatch(removeItemById(item.id))}}
                    >
                        <Image src={trash} width={15} height={15} />
                    </Button>
                </Col>
            </Row>

            <BurgerModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                burger={item}
            />
        </ListGroup.Item>
    );
}