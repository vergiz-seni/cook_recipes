import { Button } from 'react-bootstrap';
// import './pages.css';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'

function NotFoundPage(handleItemClick) {
  return (
    <div className={styles.container}>
      <h1 className={styles.error}>Страница вне матрицы</h1>
        <img src='./../../../../public/pics/HaV_News_S3.webp' alt="error" className={styles.morpheus}/>
      <Button
        onClick={() => handleItemClick('Книги')}
        as={Link}
        variant="warning"
        to="/home"
        className={styles.back}
      >
        Вернуться на главную
      </Button>
    </div>
  );
}
export default NotFoundPage;
