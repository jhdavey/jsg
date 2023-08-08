import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert } from "react-bootstrap";
// GraphQL API
import { LOGIN_USER } from "../utils/mutations";


const LoginForm = () => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  function loginCallback() {
    console.log('Callback hit...')
    login();
  }

  const { onChange, onSubmit, values } = useForm(loginCallback, {
    email: '',
    password: ''
  });

  const [login, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { login: userData }}) {
      context.login(userData);
      window.location.assign('/');
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { ...values }
  })

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={onChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={onChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="success"
          onClick={onSubmit}
        >
          Submit
        </Button>
        {errors.map(function(error){
          return (
            <Alert severity="error">
              {error.message}
            </Alert>
          )
        })}
      </Form>
    </>
  );
};

export default LoginForm;