import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';




function UserForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);        
        
        if (email.includes(" ")) {
            alert("Email cannot contain spaces!");
        }
        // Add more validations for password here
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}
export default UserForm;