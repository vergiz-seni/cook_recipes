import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CookieCard({ card }) {
  return (
    <Card>
      <Card.Body>
        <Card.Img
          variant="top"
          src={card.img}
          style={{ height: '400px', width: '600px' }}
        />
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.ingredients}</Card.Text>
        <Card.Text>Время приготовления: {card.cookingTime}</Card.Text>
        <Card.Text>{card.recipe}</Card.Text>
        <Link to={`/recipes/${card.id}`}>
          <Button variant="primary">Избранные</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
