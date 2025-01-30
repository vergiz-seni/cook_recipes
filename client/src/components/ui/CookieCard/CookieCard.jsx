import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import  styles from '../CookieCard/CookieCard.module.css';

export default function CookieCard({ card }) {
  return (
    <div className={styles.card}>
      <Card>
        <Card.Body>
          <Card.Img
            variant="top"
            src={card.img}
            style={{ height: '400px', width: '600px' }}
          />
          <Link to={`/onerecipe/${card.id}`}>
            <Card.Title>{card.title}</Card.Title>
          </Link>
          <Card.Text>Ингредиенты: {card.ingredients}</Card.Text>
          <Card.Text>Время приготовления: {card.cookingTime}</Card.Text>
          <Button variant="primary">Избранные</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
