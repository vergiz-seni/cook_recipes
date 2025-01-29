import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

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
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="rega">
            <h1 className="text-center mb-4">Регистрация</h1>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Имя обязательно' }}
                render={({ field }) => (
                  <Form.Group className="mb-3">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                      {...field}
                      type="text"
                      isInvalid={!!errors.name}
                      placeholder="Введите имя"
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
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      {...field}
                      type="email"
                      isInvalid={!!errors.email}
                      placeholder="Введите email"
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
                  <Form.Group className="mb-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
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
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: 'Подтвердите пароль',
                  validate: (value) => value === password || 'Пароли не совпадают',
                }}
                render={({ field }) => (
                  <Form.Group className="mb-3">
                    <Form.Label>Подтвердите пароль</Form.Label>
                    <Form.Control
                      {...field}
                      type="password"
                      isInvalid={!!errors.confirmPassword}
                      placeholder="Подтвердите пароль"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <Button type="submit" variant="warning" className="mt-2 w-100">
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
