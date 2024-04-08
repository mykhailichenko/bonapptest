import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBurgers } from '../../store/slices/burgersSlice';

import BurgerCard from './BurgerCard';

import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'; // Импортируем компонент Container для Bootstrap

export default function MenuPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const { status, error, burgers } = useSelector(state => state.burgers);
    const dispatch = useDispatch();
    const itemsPerPage = 7;

    useEffect(() => {
        dispatch(fetchBurgers());
    }, [dispatch]);

    const totalPages = Math.ceil(burgers?.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container> {/* Обертываем всю разметку в контейнер Bootstrap */}
            <Row xs={1} md={2} lg={2} xl={2}>
                {status === 'loading' && <h2>Loading...</h2>}
                {error && <h2>An error occurred: {error}</h2>}
                {burgers?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(burger => (
                    <BurgerCard key={burger.id} burger={burger} />
                ))}
            </Row>

            {burgers && totalPages > 1 && (
                <Pagination className="justify-content-center mt-3"> {/* Применяем класс justify-content-center для центрирования */}
                    <Pagination.First onClick={() => handlePageChange(1)} />
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                    <Pagination.Last onClick={() => handlePageChange(totalPages)} />
                </Pagination>
            )}
        </Container>
    );
}