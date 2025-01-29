import { Button } from 'react-bootstrap';
// import './pages.css';
import { Link } from 'react-router-dom';
function NotFoundPage(handleItemClick) {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Button
        onClick={() => handleItemClick('Книги')}
        as={Link}
        variant="warning"
        to="/books"
      >
        Вернуться на главную
      </Button>
    </div>
  );
}
export default NotFoundPage;
