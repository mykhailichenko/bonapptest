import {Outlet} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import Container from 'react-bootstrap/Container';

import Header from './Header';

export default function Index() {
    return(
        <>
            <Header />

            <Container style={{marginTop: 90}}>
                <Outlet />
            </Container>

            <ToastContainer />
        </>
    );
}