import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import styles from './LoginForm.module.css'

const LoginForm = ({ loginHandler }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    loginHandler(data);
    reset();
  };
  return (
    <Container className={styles.container}>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className={styles.content}>
            <h1 className={styles.title}>Вход в систему</h1>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.inputs}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email обязателен',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/gm,
                    message: 'Некорректный email',
                  },
                }}
                render={({ field }) => (
                  <Form.Group className={styles.oneInput}>
                    <Form.Label className={styles.inputTitle}>Email</Form.Label>
                      <br/>
                    <Form.Control className={styles.inputField}
                      {...field}
                      type="email"
                      isInvalid={!!errors.email}
                      placeholder="Введите email"
                                  autoComplete="off"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Пароль обязателен',
                }}
                render={({ field }) => (
                  <Form.Group className={styles.oneInput}>
                    <Form.Label className={styles.inputTitle}>Пароль</Form.Label>
                      <br/>
                    <Form.Control className={styles.inputField}
                      {...field}
                      type="password"
                      isInvalid={!!errors.password}
                      placeholder="Введите пароль"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
                <div className={styles.bottomDiv}>
              <Button type="submit" variant="warning" className={styles.btn}>
                Войти
              </Button>
                <Link to='/register' className={styles.reg}>Ещё нет аккаунта?</Link>
                </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;
