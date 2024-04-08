import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

import burger_logo from '../../assets/burger-logo.png';

export default function Header() {
    const itemCount = useSelector(state => state.cart.cart.length);

    return(
        <Navbar style={{background: '#a37415'}} fixed='top'>
            <Container>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Navbar.Brand className='align-items-center justify-content-center'>
                        <Image
                            alt='BonBurgers'
                            src={burger_logo}
                            width='60'
                            height='60'
                        />
                        <span style={{color: '#fcf2de'}}> BonBurgers</span>
                    </Navbar.Brand>
                </Link>

                <Col xs={2} md={1} style={{cursor: 'pointer'}}>
                    <Link to='/cart'>
                        <Button variant='warning'>
                            Cart {itemCount ? <Badge bg="success">{itemCount}</Badge> : null}
                        </Button>
                    </Link>
                </Col>
            </Container>
        </Navbar>
    )
}