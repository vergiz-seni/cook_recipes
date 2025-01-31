import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import  styles from '../CookieCard/CookieCard.module.css';

export default function CookieCard({ card, addRecipeToFavorites, user }) {
  return (
    <div className={styles.card}>
      <Card >
        <Card.Body className={styles.content}>
          <Card.Img
            variant="top"
            src={card.img}
            className={styles.img}
          />
          <Link to={`/onerecipe/${card.id}`} className={styles.title}>
            <Card.Title >{card.title}</Card.Title>
          </Link>
          <h3 className={styles.ingTitle}>Ингредиенты:</h3>
          <Card.Text className={styles.ingredients}> {card.ingredients}</Card.Text>
          <Card.Text><b>Время приготовления:</b> {card.cookingTime}</Card.Text>
          {user.status === 'logged' ? (
              <Button onClick={() => addRecipeToFavorites(card.id)} className={styles.favBtn}>В избранные</Button>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
}
