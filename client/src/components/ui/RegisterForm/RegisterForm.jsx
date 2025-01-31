import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import styles from './RegisterForm.module.css'

const RegisterForm = ({ registerHandler }) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data) => {
    registerHandler(data);
    reset();
  };

  const password = watch('password', '');

  return (
    <Container className={styles.container}>
      <Row className="justify-content-center">
        <Col md={6}>
            <div className={styles.content}>
                <h1 className={styles.title}>Регистрация</h1>
                <Form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Имя обязательно' }}
                render={({ field }) => (
                  <Form.Group className={styles.oneinputdiv}>
                    <Form.Label className={styles.inputTitle}>Имя</Form.Label>
                      <br/>
                    <Form.Control
                      {...field}
                      type="text"
                      isInvalid={!!errors.name}
                      placeholder="Введите имя"
                      className={styles.inputs}
                      autoComplete="off"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email обязателен',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/,
                    message: 'Некорректный email',
                  },
                }}
                render={({ field }) => (
                  <Form.Group className={styles.oneinputdiv}>
                    <Form.Label className={styles.inputTitle}>Email</Form.Label>
                      <br/>
                    <Form.Control
                      {...field}
                      type="email"
                      isInvalid={!!errors.email}
                      placeholder="Введите email"
                      className={styles.inputs}
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
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                    message:
                      'Пароль должен содержать минимум 6 символов, включая заглавные и строчные буквы, цифры и специальные символы',
                  },
                }}
                render={({ field }) => (
                  <Form.Group className={styles.oneinputdiv}>
                    <Form.Label className={styles.inputTitle}>Пароль</Form.Label>
                      <br/>
                    <Form.Control
                      {...field}
                      type="password"
                      isInvalid={!!errors.password}
                      placeholder="Введите пароль"
                      className={styles.inputs}
                      autoComplete="off"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: 'Подтвердите пароль',
                  validate: (value) => value === password || 'Пароли не совпадают',
                }}
                render={({ field }) => (
                  <Form.Group className={styles.oneinputdiv}>
                    <Form.Label className={styles.inputTitle}>Подтвердите пароль</Form.Label>
                      <br/>
                    <Form.Control
                      {...field}
                      type="password"
                      isInvalid={!!errors.confirmPassword}
                      placeholder="Подтвердите пароль"
                      className={styles.inputs}
                      autoComplete="off"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <Button type="submit" variant="warning" className={styles.btn}>
                Зарегистрироваться
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
