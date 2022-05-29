import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function TodoForm({ todos, setTodos }) {
    const [name, setName] = useState("");
    const handleChange = e =>{
        setName(e.target.value)
    }
    const handleSubmit = e => {
        
    }

    return <Form onSubmit={handleSubmit}>
        <InputGroup classname="mb-4">
            <FormControl placeholder="New todo..." 
            onChange={handleChange} 
            value={name} />
            <Button type="submit"> Add </Button>
        </InputGroup>
    </Form>
}