import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from "react-bootstrap";
// Apollo GraphQL
import { ADD_USER } from "../utils/mutations";



const SignupForm = () => {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  function createUserCallback() {
    console.log('Callback hit...');
    createUser();
  }

  const { onChange, onSubmit, values } = useForm(createUserCallback, {
    username: '',
    email: '',
    password: ''
  });

  const [ createUser, { loading }] = useMutation(ADD_USER, {
    update(proxy, { data: { createUser: userData }}) {
      context.login(userData);
      navigate('/');
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { createUser: values }
  })

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form>
        {/* show alert if server response is bad */}

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={onChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
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

export default SignupForm;