import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {toast, Bounce} from 'react-toastify';

import {addItem} from '../../store/slices/cartSlice';

import BurgerModal from '../../components/BurgerModal';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//Images for burgers, because there are no images in API
import burger_img_1 from '../../assets/burger-1.png'
import burger_img_2 from '../../assets/burger-2.png'
import burger_img_3 from '../../assets/burger-3.png'
import burger_img_4 from '../../assets/burger-4.png'
import burger_img_5 from '../../assets/burger-5.png'
import burger_img_6 from '../../assets/burger-6.png'
import burger_img_7 from '../../assets/burger-7.png'

export default function BurgerCard({burger}) {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    const addCartNewItem = (event) => {
        event.stopPropagation();
        dispatch(addItem(burger));

        toast.success(`${burger.name} added!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    //Get random images for burgers
    function getRandomBurgerImage() {
        const burgerImages = [
            burger_img_1,
            burger_img_2,
            burger_img_3,
            burger_img_4,
            burger_img_5,
            burger_img_6,
            burger_img_7,
        ];

        const randomIndex = Math.floor(Math.random() * burgerImages.length);

        return burgerImages[randomIndex];
    }

    return (
        <>
            <Col xs={12} md={6} lg={4} xl={4}>
                <Card
                    style={{cursor: 'pointer', background: '#fcf2de'}}
                    className='my-3'
                    onClick={() => setModalShow(true)}
                >
                    <Card.Img
                        variant='top'
                        src={getRandomBurgerImage()}
                    />
                    <Card.Body>
                        <Card.Title>{burger.name}</Card.Title>

                        <Card.Text style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {burger.description}
                        </Card.Text>

                        <Card.Text>
                            Cost:
                            <span className='fw-bold'> {burger.price}</span>
                            {burger.currency}
                        </Card.Text>

                        <Button onClick={addCartNewItem}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>

            <BurgerModal
                show={modalShow}
                onHide={() => {setModalShow(false)}}
                burger={burger}
            />
        </>
    );
}