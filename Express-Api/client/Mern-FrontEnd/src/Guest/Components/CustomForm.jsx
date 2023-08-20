import React, { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { GlobalContext } from "../../Context/context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CustomForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(GlobalContext);

 const loginUser = (e) => {
  e.preventDefault();

  const payload = { email, password }

  axios.post('/api/login', payload)
    .then((json) => {
      Cookies.set('token', json.data.token)
      dispatch({
        type: "USER_LOGIN",
        token: json.data.token
      })
    })
    .catch(err => {
      console.log("Login Error:", err);
      alert("Login failed. Please check your credentials."); // Display an error message
    });
}


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const loginUser = () => {
  //     // Simulate successful login and obtain an authentication token
  //     const token = "your-auth-token"; // Replace with your actual token
  //     Cookies.set("token", token, { expires: 7 }); // Set the token in a cookie that expires in 7 days
  // };
  return (
    <div className="bigbox">
      <div className="title ">Log in</div>

      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-light">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="butn" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
